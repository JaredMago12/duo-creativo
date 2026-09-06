import { CIERRE_HORA } from '../config'

// =====================================================================
//  DÍAS HÁBILES
//  Sábado (6) y domingo (0) nunca cuentan como día de trabajo.
//
//  El cálculo son dos preguntas separadas:
//    1. ¿Cuándo entra el pedido al taller?  -> diaDeRecepcion()
//    2. ¿Qué días se trabaja?               -> diasDeProduccion()
//  La fecha lista es el último día de producción.
// =====================================================================

export const MESES = [
  'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
  'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre',
]

export const DIAS_LARGO = [
  'domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado',
]

export const esFinDeSemana = (d) => d.getDay() === 0 || d.getDay() === 6

/** Quita la hora para poder comparar fechas sin sorpresas. */
export const soloFecha = (d) => new Date(d.getFullYear(), d.getMonth(), d.getDate())

export const mismaFecha = (a, b) =>
  Boolean(a) && Boolean(b) && a.getTime() === b.getTime()

/** Devuelve la misma fecha si es hábil; si cae en fin de semana, salta al lunes. */
export function siguienteHabil(desde) {
  const d = new Date(desde)
  while (esFinDeSemana(d)) d.setDate(d.getDate() + 1)
  return soloFecha(d)
}

/** El día siguiente a una fecha, saltando el fin de semana. */
export function siguienteDiaHabil(desde) {
  const d = new Date(desde)
  d.setDate(d.getDate() + 1)
  return siguienteHabil(d)
}

/**
 * El día en que el taller ve el pedido.
 * Si llega en horario de un día hábil, entra hoy mismo.
 * Si llega en fin de semana o después de la hora de cierre, entra el
 * siguiente día hábil.
 */
export function diaDeRecepcion(ahora = new Date()) {
  const hoy = soloFecha(ahora)
  const enHorario = !esFinDeSemana(hoy) && ahora.getHours() < CIERRE_HORA
  return enHorario ? hoy : siguienteDiaHabil(hoy)
}

/**
 * Los n días hábiles que se van a trabajar, empezando por el día de
 * recepción. Devuelve un arreglo de fechas.
 */
export function diasDeProduccion(recepcion, n) {
  const dias = []
  const d = new Date(recepcion)
  while (dias.length < n) {
    if (!esFinDeSemana(d)) dias.push(soloFecha(d))
    d.setDate(d.getDate() + 1)
  }
  return dias
}

/**
 * La fecha más próxima en que el pedido puede estar listo.
 *
 * Es el día hábil SIGUIENTE al último día de producción: mientras se trabaja
 * la pieza todavía no se puede entregar.
 *
 * Ejemplo con n = 2 y un pedido que entra el domingo:
 *   recepción = lunes · se trabaja lunes y martes · se entrega el miércoles
 */
export function primeraFechaDisponible(recepcion, n) {
  const dias = diasDeProduccion(recepcion, n)
  return siguienteDiaHabil(dias[dias.length - 1])
}

// ---------------------------------------------------------------------
//  Formato
// ---------------------------------------------------------------------

/** "viernes 11 de septiembre" */
export const fechaLarga = (d) =>
  `${DIAS_LARGO[d.getDay()]} ${d.getDate()} de ${MESES[d.getMonth()]}`

/** "viernes 11" */
export const fechaCorta = (d) => `${DIAS_LARGO[d.getDay()]} ${d.getDate()}`

/** ["lunes 7","martes 8"] -> "lunes 7 y martes 8" */
export function enumerar(lista) {
  if (lista.length === 0) return ''
  if (lista.length === 1) return lista[0]
  return lista.slice(0, -1).join(', ') + ' y ' + lista[lista.length - 1]
}

/** "$1,850" */
export const dinero = (n) => '$' + n.toLocaleString('es-MX')

export const capitalizar = (s) => s.replace(/^./, (c) => c.toUpperCase())
