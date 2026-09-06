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
// Días hábiles mínimos entre el pedido y la entrega.
export const DIAS_HABILES_PRODUCCION = 2
// Hora en que dejas de atender (24 h). Después de esta hora el aviso
// de arriba dice que respondes al siguiente día hábil.
export const CIERRE_HORA = 18

// --- Contacto y taller ----------------------------------------------
export const CORREO = 'hola@duocreativo.mx'
export const INSTAGRAM = 'https://instagram.com/duocreativo'
export const DIRECCION = ['28 de Noviembre 17, Plan de Ayala', '53710 Naucalpan de Juárez, Méx']

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
    detalle: 'Colonia Roma Norte, de 10:00 a 18:00',
    costo: 0,
  },
  {
    id: 'cdmx',
    titulo: 'Envío dentro de CDMX',
    detalle: 'Llega el mismo día que eliges',
    costo: 90,
  },
  {
    id: 'nacional',
    titulo: 'Envío al resto del país',
    detalle: 'De 2 a 4 días hábiles después',
    costo: 180,
  },
]
