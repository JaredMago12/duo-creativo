import { CIERRE_HORA } from '../config'
import { DIAS_LARGO, esFinDeSemana, siguienteHabil } from '../lib/fechas'

/** Barra superior que cambia sola segun el dia y la hora. */
export default function Aviso() {
  const ahora = new Date()
  const dia = ahora.getDay()
  const manana = siguienteHabil(
    new Date(ahora.getFullYear(), ahora.getMonth(), ahora.getDate() + 1)
  )

  let contenido
  if (esFinDeSemana(ahora)) {
    contenido = (
      <>
        Hoy es {DIAS_LARGO[dia]} y el taller está cerrado. Puedes mandar tu pedido ahora:
        lo confirmamos el <b>{DIAS_LARGO[manana.getDay()]} a las 9:00</b>.
      </>
    )
  } else if (ahora.getHours() >= CIERRE_HORA) {
    contenido = (
      <>
        El taller ya cerró por hoy. Deja tu pedido y te respondemos el{' '}
        <b>{DIAS_LARGO[manana.getDay()]} a las 9:00</b>.
      </>
    )
  } else {
    contenido = (
      <>
        Taller abierto <b>hasta las {CIERRE_HORA}:00</b> · Lunes a viernes · Sábado y domingo cerrado
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
