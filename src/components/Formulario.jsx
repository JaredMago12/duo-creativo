import { ENVIOS } from '../config'
import { dinero } from '../lib/fechas'

export default function Formulario({ datos, errores, onCambio, envioId, onEnvio }) {
  const campo = (id) => 'campo' + (errores[id] ? ' mal' : '')

  return (
    <>
      <div className="bloque">
        <h3>¿Con quién hablamos?</h3>
        <p className="sub">Te confirmamos por WhatsApp en el siguiente día hábil.</p>

        <div className="par">
          <div className={campo('nombre')}>
            <label htmlFor="nombre">Nombre completo</label>
            <input
              id="nombre"
              type="text"
              autoComplete="name"
              placeholder="Ana Martínez"
              value={datos.nombre}
              onChange={(e) => onCambio('nombre', e.target.value)}
            />
            {errores.nombre && (
              <p className="error">Escribe tu nombre para poder confirmarte.</p>
            )}
          </div>

          <div className={campo('tel')}>
            <label htmlFor="tel">WhatsApp</label>
            <input
              id="tel"
              type="tel"
              autoComplete="tel"
              placeholder="55 1234 5678"
              value={datos.tel}
              onChange={(e) => onCambio('tel', e.target.value)}
            />
            {errores.tel && (
              <p className="error">Faltan dígitos. Necesitamos 10 para escribirte.</p>
            )}
          </div>
        </div>

        <div className="campo">
          <label htmlFor="correo">
            Correo <span style={{ fontWeight: 400, color: 'rgba(31,27,51,.6)' }}>(opcional)</span>
          </label>
          <input
            id="correo"
            type="email"
            autoComplete="email"
            placeholder="ana@correo.com"
            value={datos.correo}
            onChange={(e) => onCambio('correo', e.target.value)}
          />
        </div>
      </div>

      <div className="bloque">
        <h3>¿Cómo lo recibes?</h3>
        <p className="sub">Las entregas y las recolecciones también son de lunes a viernes.</p>
        <div className="entregas">
          {ENVIOS.map((e) => (
            <label key={e.id} className={'entrega' + (envioId === e.id ? ' elegida' : '')}>
              <input
                type="radio"
                name="entrega"
                value={e.id}
                checked={envioId === e.id}
                onChange={() => onEnvio(e.id)}
              />
              <span>
                <strong>{e.titulo}</strong>
                <span>{e.detalle}</span>
              </span>
              <span className="costo">{e.costo ? dinero(e.costo) : 'Sin costo'}</span>
            </label>
          ))}
        </div>
      </div>
    </>
  )
}

export function Notas({ valor, onCambio }) {
  return (
    <div className="bloque">
      <h3>¿Algo que debamos saber?</h3>
      <p className="sub">
        Colores, nombres, cantidad de invitados, la fecha del evento, un enlace a tu logotipo.
      </p>
      <label htmlFor="notas" className="oculto">Detalles del pedido</label>
      <textarea
        id="notas"
        value={valor}
        onChange={(e) => onCambio('notas', e.target.value)}
        placeholder="Ej. Quiero las invitaciones en verde olivo con letra script. La boda es el 14 de noviembre y somos 80 invitados."
      />
    </div>
  )
}
