import { CIERRE_HORA } from '../config'
import { DIAS_LARGO, esFinDeSemana, diaDeRecepcion, mismaFecha, soloFecha } from '../lib/fechas'

/** Barra superior que cambia sola segun el dia y la hora. */
export default function Aviso() {
  const ahora = new Date()
  const recepcion = diaDeRecepcion(ahora)
  const entraHoy = mismaFecha(recepcion, soloFecha(ahora))

  let contenido
  if (esFinDeSemana(ahora)) {
    contenido = (
      <>
        Hoy es {DIAS_LARGO[ahora.getDay()]} y el taller está cerrado. Deja tu pedido ahora:
        entra a producción el <b>{DIAS_LARGO[recepcion.getDay()]} a las 9:00</b>.
      </>
    )
  } else if (!entraHoy) {
    contenido = (
      <>
        El taller ya cerró por hoy. Deja tu pedido y entra a producción el{' '}
        <b>{DIAS_LARGO[recepcion.getDay()]} a las 9:00</b>.
      </>
    )
  } else {
    contenido = (
      <>
        Taller abierto <b>hasta las {CIERRE_HORA}:00</b> · Los pedidos de hoy entran hoy
        mismo · Sábado y domingo cerrado
      </>
    )
  }

  return (
    <div className="aviso" role="status">
      <div className="env">
        <span>{contenido}</span>
      </div>
    </div>
  )
}
