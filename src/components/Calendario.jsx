import { useState } from 'react'
import {
  MESES, esFinDeSemana, fechaLarga, fechaCorta, mismaFecha, capitalizar, enumerar,
} from '../lib/fechas'

const DOW = ['L', 'M', 'M', 'J', 'V', 'S', 'D']

export default function Calendario({ minFecha, recepcion, diasProduccion, fechaElegida, onElegir }) {
  const [mesVista, setMesVista] = useState(
    () => new Date(minFecha.getFullYear(), minFecha.getMonth(), 1)
  )

  const anio = mesVista.getFullYear()
  const mes = mesVista.getMonth()

  // Semana que empieza en lunes: convertimos domingo (0) en 6
  const hueco = (new Date(anio, mes, 1).getDay() + 6) % 7
  const ultimo = new Date(anio, mes + 1, 0).getDate()
  const dias = Array.from({ length: ultimo }, (_, i) => new Date(anio, mes, i + 1))

  const limite = new Date(minFecha.getFullYear(), minFecha.getMonth(), 1)
  const puedeRetroceder = mesVista > limite

  const mover = (delta) => setMesVista(new Date(anio, mes + delta, 1))

  const esProduccion = (f) => diasProduccion.some((p) => mismaFecha(p, f))
  const trabajo = enumerar(diasProduccion.map(fechaCorta))

  return (
    <div className="bloque" id="calendario">
      <h3>¿Para qué día lo quieres?</h3>

      <div className="explica">
        <p>
          Tu pedido entra al taller el <b>{fechaCorta(recepcion)}</b>. Lo trabajamos{' '}
          <b>{trabajo}</b>, así que lo más pronto que puede estar listo es el{' '}
          <b>{fechaLarga(minFecha)}</b>.
        </p>
        <p className="ojo">
          Si necesitas más tiempo, elige cualquier día hábil posterior. Sábados y
          domingos no trabajamos.
        </p>
      </div>

      <div className="cal-top">
        <button
          className="flecha"
          onClick={() => mover(-1)}
          disabled={!puedeRetroceder}
          aria-label="Mes anterior"
          type="button"
        >
          ‹
        </button>
        <span className="cal-mes" aria-live="polite">
          {capitalizar(MESES[mes])} {anio}
        </span>
        <button className="flecha" onClick={() => mover(1)} aria-label="Mes siguiente" type="button">
          ›
        </button>
      </div>

      <div className="cal-grid">
        {DOW.map((d, i) => (
          <span key={i} className={'dow' + (i >= 5 ? ' finde' : '')} aria-hidden="true">
            {d}
          </span>
        ))}

        {Array.from({ length: hueco }, (_, i) => (
          <span key={'v' + i} className="dia vacio" />
        ))}

        {dias.map((f) => {
          const finde = esFinDeSemana(f)
          const temprano = f < minFecha
          const bloqueado = finde || temprano
          const elegido = mismaFecha(f, fechaElegida)
          const produce = esProduccion(f)

          const clases = ['dia']
          if (finde) clases.push('finde')
          if (produce && !elegido) clases.push('produccion')
          if (elegido) clases.push('elegido')

          return (
            <button
              key={f.getDate()}
              type="button"
              className={clases.join(' ')}
              disabled={bloqueado}
              onClick={() => onElegir(f)}
              aria-label={
                finde
                  ? `${fechaLarga(f)}, taller cerrado`
                  : temprano
                    ? `${fechaLarga(f)}, aún estamos produciendo`
                    : fechaLarga(f)
              }
            >
              {f.getDate()}
            </button>
          )
        })}
      </div>

      <div className="cal-pie">
        <span><i className="muestra f" /> Taller cerrado</span>
        <span><i className="muestra t" /> Días que lo trabajamos</span>
        <span><i className="muestra d" /> Día elegido</span>
      </div>
    </div>
  )
}
