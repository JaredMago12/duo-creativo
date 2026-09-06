import { useMemo, useState } from 'react'

import Aviso from './components/Aviso'
import Encabezado from './components/Encabezado'
import Portada from './components/Portada'
import Catalogo from './components/Catalogo'
import Calendario from './components/Calendario'
import Formulario, { Notas } from './components/Formulario'
import Resumen from './components/Resumen'
import Proceso from './components/Proceso'
import Horario from './components/Horario'
import PieDePagina from './components/PieDePagina'
import { IconoWhatsApp } from './data/ilustraciones.jsx'

import { buscarPorClave, precioDe } from './data/productos'
import { WHATSAPP, ENVIOS, DIAS_HABILES_PRODUCCION } from './config'
import {
  diaDeRecepcion, diasDeProduccion, primeraFechaDisponible,
  fechaLarga, fechaCorta, dinero, DIAS_LARGO,
} from './lib/fechas'

export default function App() {
  const [carrito, setCarrito] = useState({})  // { 'producto::variante': cantidad }
  const [filtro, setFiltro] = useState('todo')
  const [fechaElegida, setFechaElegida] = useState(null)
  const [envioId, setEnvioId] = useState(ENVIOS[0].id)
  const [datos, setDatos] = useState({ nombre: '', tel: '', correo: '', notas: '' })
  const [errores, setErrores] = useState({})
  const [acuse, setAcuse] = useState(null)

  // Tres momentos: 1) cuándo entra el pedido al taller, 2) qué días se
  // trabaja, 3) el día hábil siguiente al último de trabajo, que es lo más
  // pronto que puede estar listo.
  const recepcion = useMemo(() => diaDeRecepcion(new Date()), [])
  const diasProduccion = useMemo(
    () => diasDeProduccion(recepcion, DIAS_HABILES_PRODUCCION),
    [recepcion]
  )
  const minFecha = useMemo(
    () => primeraFechaDisponible(recepcion, DIAS_HABILES_PRODUCCION),
    [recepcion]
  )

  const envio = ENVIOS.find((e) => e.id === envioId)

  const piezas = Object.values(carrito).reduce((a, b) => a + b, 0)

  // El total es un rango: algunas piezas tienen precio variable y otras se cotizan
  const cuenta = Object.entries(carrito).reduce(
    (acum, [clave, q]) => {
      const { producto, variante } = buscarPorClave(clave)
      const p = precioDe(producto, variante)
      if (p.cotizacion) return { ...acum, hayCotizacion: true }
      return { ...acum, min: acum.min + p.min * q, max: acum.max + p.max * q }
    },
    { min: 0, max: 0, hayCotizacion: false }
  )

  // ----- Carrito -------------------------------------------------------
  const agregar = (id) =>
    setCarrito((c) => ({ ...c, [id]: (c[id] || 0) + 1 }))

  const cambiarCantidad = (id, delta) =>
    setCarrito((c) => {
      const q = (c[id] || 0) + delta
      if (q <= 0) {
        const { [id]: _fuera, ...resto } = c
        return resto
      }
      return { ...c, [id]: q }
    })

  const quitar = (id) =>
    setCarrito((c) => {
      const { [id]: _fuera, ...resto } = c
      return resto
    })

  const cambiarDato = (campo, valor) => {
    setDatos((d) => ({ ...d, [campo]: valor }))
    if (errores[campo]) setErrores((e) => ({ ...e, [campo]: false }))
  }

  const irAlPedido = () =>
    document.getElementById('pedido')?.scrollIntoView({ behavior: 'smooth' })

  // ----- Validación ----------------------------------------------------
  function validar() {
    const malNombre = datos.nombre.trim().length < 2
    const malTel = datos.tel.replace(/\D/g, '').length < 10
    setErrores({ nombre: malNombre, tel: malTel })

    if (malNombre || malTel) {
      setAcuse(null)
      document.getElementById(malNombre ? 'nombre' : 'tel')?.focus()
      return false
    }
    if (!fechaElegida) {
      setAcuse({
        titulo: 'Falta el día de entrega',
        cuerpo: 'Elige un día hábil en el calendario para saber cuándo tener listo tu pedido.',
        alerta: true,
      })
      document.getElementById('calendario')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      return false
    }
    return true
  }

  // ----- Texto de la cotización ----------------------------------------
  function textoPedido() {
    const lineas = ['Hola Duo Creativo, quiero hacer un pedido.', '']

    Object.entries(carrito).forEach(([clave, q]) => {
      const { producto, variante } = buscarPorClave(clave)
      const p = precioDe(producto, variante)
      const nombre = variante ? `${producto.nombre} — ${variante.nombre}` : producto.nombre
      const importe = p.cotizacion
        ? 'por cotizar'
        : p.min === p.max
          ? dinero(p.min * q)
          : `${dinero(p.min * q)} a ${dinero(p.max * q)}`
      lineas.push(`• ${q} × ${nombre} — ${importe}`)
    })

    lineas.push('')
    lineas.push(`Entrega: ${envio.titulo}${envio.costo ? ' — ' + dinero(envio.costo) : ''}`)
    lineas.push(`Día que necesito: ${fechaLarga(fechaElegida)}`)
    lineas.push(`(entra al taller el ${fechaCorta(recepcion)})`)
    const tMin = cuenta.min + envio.costo
    const tMax = cuenta.max + envio.costo
    lineas.push(
      tMin === tMax
        ? `Total estimado: ${dinero(tMin)}`
        : `Total estimado: entre ${dinero(tMin)} y ${dinero(tMax)}`
    )
    if (cuenta.hayCotizacion) {
      lineas.push('(Hay piezas cuyo precio depende del diseño y falta cotizar.)')
    }

    if (datos.notas.trim()) {
      lineas.push('')
      lineas.push(`Detalles: ${datos.notas.trim()}`)
    }

    lineas.push('')
    lineas.push(`Soy ${datos.nombre.trim()} — ${datos.tel.trim()}`)
    if (datos.correo.trim()) lineas.push(datos.correo.trim())

    return lineas.join('\n')
  }

  // ----- Acciones -------------------------------------------------------
  function enviarWhatsApp() {
    if (!validar()) return
    const url = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(textoPedido())}`
    window.open(url, '_blank', 'noopener')

    setAcuse({
      titulo: 'Pedido enviado',
      cuerpo: `Abrimos WhatsApp con tu cotización. Tu pedido entra al taller el ${DIAS_LARGO[recepcion.getDay()]} y te confirmamos el total final ese mismo día.`,
      alerta: false,
    })
  }

  async function copiarResumen() {
    if (!validar()) return
    try {
      await navigator.clipboard.writeText(textoPedido())
      setAcuse({
        titulo: 'Cotización copiada',
        cuerpo: 'Pégala donde quieras: WhatsApp, correo o un mensaje directo.',
        alerta: false,
      })
    } catch {
      setAcuse({
        titulo: 'No se pudo copiar',
        cuerpo: 'Tu navegador bloqueó el portapapeles. Usa el botón de WhatsApp.',
        alerta: true,
      })
    }
  }

  // ----- Vista ----------------------------------------------------------
  return (
    <>
      <Aviso />
      <Encabezado piezas={piezas} onIrAlPedido={irAlPedido} />

      <main>
        <Portada />

        <Catalogo
          carrito={carrito}
          filtro={filtro}
          onFiltrar={setFiltro}
          onAgregar={agregar}
        />

        <section id="pedido">
          <div className="env">
            <div className="cabeza">
              <div>
                <h2>Tu pedido</h2>
                <p>
                  Elige el día en que quieres tu papelería lista. El taller no produce
                  sábados ni domingos, así que esos días aparecen tachados en el calendario.
                </p>
              </div>
            </div>

            <div className="taller">
              <div>
                <Formulario
                  datos={datos}
                  errores={errores}
                  onCambio={cambiarDato}
                  envioId={envioId}
                  onEnvio={setEnvioId}
                />
                <Calendario
                  minFecha={minFecha}
                  recepcion={recepcion}
                  diasProduccion={diasProduccion}
                  fechaElegida={fechaElegida}
                  onElegir={(f) => { setFechaElegida(f); setAcuse(null) }}
                />
                <Notas valor={datos.notas} onCambio={cambiarDato} />
              </div>

              <Resumen
                carrito={carrito}
                piezas={piezas}
                cuenta={cuenta}
                envio={envio}
                fechaElegida={fechaElegida}
                onCambiarCantidad={cambiarCantidad}
                onQuitar={quitar}
                onEnviar={enviarWhatsApp}
                onCopiar={copiarResumen}
                acuse={acuse}
              />
            </div>
          </div>
        </section>

        <Proceso />
        <Horario />
      </main>

      <PieDePagina />

      <a
        className="flotante"
        href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Hola Duo Creativo, tengo una pregunta sobre su papelería.')}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escribir a Duo Creativo por WhatsApp"
      >
        <IconoWhatsApp />
        <span>Escríbenos</span>
      </a>
    </>
  )
}
