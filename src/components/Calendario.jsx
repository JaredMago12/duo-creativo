import { useState } from 'react'
import { DIAS_HABILES_PRODUCCION } from '../config'
import {
  MESES, esFinDeSemana, fechaLarga, mismaFecha, capitalizar,
} from '../lib/fechas'

const DOW = ['L', 'M', 'M', 'J', 'V', 'S', 'D']

export default function Calendario({ minFecha, fechaElegida, onElegir }) {
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

  return (
    <div className="bloque" id="calendario">
      <h3>¿Para qué día lo quieres?</h3>
      <p className="sub">
        Necesitamos al menos {DIAS_HABILES_PRODUCCION} días hábiles. El día más próximo
        disponible es el {fechaLarga(minFecha)}.
      </p>

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

          return (
            <button
              key={f.getDate()}
              type="button"
              className={'dia' + (finde ? ' finde' : '') + (elegido ? ' elegido' : '')}
              disabled={bloqueado}
              onClick={() => onElegir(f)}
              aria-label={
                finde
                  ? `${fechaLarga(f)}, taller cerrado`
                  : temprano
                    ? `${fechaLarga(f)}, demasiado pronto`
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
        <span><i className="muestra d" /> Día elegido</span>
      </div>
    </div>
  )
}
