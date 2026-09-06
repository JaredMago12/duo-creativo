// Todo el cálculo de días hábiles vive aquí.
// Sábado (6) y domingo (0) nunca cuentan como día de trabajo.

export const MESES = [
  'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
  'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre',
]

export const DIAS_LARGO = [
  'domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado',
]

export const esFinDeSemana = (d) => d.getDay() === 0 || d.getDay() === 6

// Quita la hora para poder comparar fechas sin sorpresas
export const soloFecha = (d) => new Date(d.getFullYear(), d.getMonth(), d.getDate())

export const mismaFecha = (a, b) =>
  Boolean(a) && Boolean(b) && a.getTime() === b.getTime()

/** Avanza n días hábiles desde una fecha, saltando fines de semana. */
export function sumarDiasHabiles(desde, n) {
  const d = new Date(desde)
  let contados = 0
  while (contados < n) {
    d.setDate(d.getDate() + 1)
    if (!esFinDeSemana(d)) contados++
  }
  return soloFecha(d)
}

/** Devuelve la misma fecha si es hábil; si cae en fin de semana, salta al lunes. */
export function siguienteHabil(desde) {
  const d = new Date(desde)
  while (esFinDeSemana(d)) d.setDate(d.getDate() + 1)
  return soloFecha(d)
}

/** "viernes 11 de septiembre" */
export const fechaLarga = (d) =>
  `${DIAS_LARGO[d.getDay()]} ${d.getDate()} de ${MESES[d.getMonth()]}`

/** "$1,850" */
export const dinero = (n) => '$' + n.toLocaleString('es-MX')

export const capitalizar = (s) => s.replace(/^./, (c) => c.toUpperCase())
