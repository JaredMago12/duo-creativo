// =====================================================================
//  CONFIGURACIÓN DE DUO CREATIVO
//  Este es el único archivo que necesitas tocar para cambiar datos
//  del negocio. Guarda, y el sitio se actualiza solo.
// =====================================================================

// --- WhatsApp -------------------------------------------------------
// Formato internacional, sin "+", sin espacios y sin guiones.
// 52 = México · 5621188572 = tu número.
export const WHATSAPP = '525621188572'
export const WHATSAPP_VISIBLE = '56 2118 8572'

// --- Ritmo del taller -----------------------------------------------
// Días hábiles COMPLETOS que tardas en producir un pedido, contando el día
// en que entra al taller. La entrega se ofrece hasta el día hábil siguiente
// al último de trabajo, porque mientras se produce no se puede entregar.
//
// Con 2, un pedido que llega en domingo:
//   entra el lunes → se trabaja lunes y martes → se entrega el miércoles
export const DIAS_HABILES_PRODUCCION = 2

// Hora en que dejas de recibir pedidos del día (formato 24 h).
// Después de esta hora, el pedido entra hasta el siguiente día hábil.
export const CIERRE_HORA = 18

// --- Contacto y taller ----------------------------------------------
export const CORREO = 'jxduocreativo@gmail.com'
export const FACEBOOK = 'https://www.facebook.com/duocreativo'
export const FACEBOOK_NOMBRE = 'Dúo Creativo'

export const DIRECCION = {
  calle: '28 de Noviembre 17',
  colonia: 'Plan de Ayala',
  ciudad: 'Naucalpan de Juárez',
  estado: 'Estado de México',
  cp: '53710',
}

// Texto completo, para el mensaje de WhatsApp y el pie de página
export const DIRECCION_COMPLETA =
  `${DIRECCION.calle}, ${DIRECCION.colonia}, ${DIRECCION.cp} ${DIRECCION.ciudad}, Méx.`

// Enlace que abre la dirección en Google Maps
export const MAPA = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(DIRECCION_COMPLETA)}`

// --- Horario que se muestra en la tabla ------------------------------
// dia: 0 = domingo … 6 = sábado
export const HORARIO = [
  { dia: 1, nombre: 'Lunes', horas: '9:00 – 18:00', cerrado: false },
  { dia: 2, nombre: 'Martes', horas: '9:00 – 18:00', cerrado: false },
  { dia: 3, nombre: 'Miércoles', horas: '9:00 – 18:00', cerrado: false },
  { dia: 4, nombre: 'Jueves', horas: '9:00 – 18:00', cerrado: false },
  { dia: 5, nombre: 'Viernes', horas: '9:00 – 15:00', cerrado: false },
  { dia: 6, nombre: 'Sábado', horas: 'Cerrado', cerrado: true },
  { dia: 0, nombre: 'Domingo', horas: 'Cerrado', cerrado: true },
]

// --- Formas de entrega ------------------------------------------------
export const ENVIOS = [
  {
    id: 'taller',
    titulo: 'Recoger en el taller',
    detalle: 'Plan de Ayala, Naucalpan, de 10:00 a 18:00',
    costo: 0,
  },
  {
    id: 'metro',
    titulo: 'Envío en CDMX y zona metropolitana',
    detalle: 'Llega el mismo día que eliges',
    costo: 90,
  },
  {
    id: 'nacional',
    titulo: 'Envío al resto del país',
    detalle: 'Sale el día que eliges y llega de 2 a 4 días hábiles después',
    costo: 180,
  },
]
