import {
  Taza, TazaColor, TazaMagica, TazaNegra, Termo, Tarro, Vaso,
  Playera, Tote, Libreta, Etiquetas, Stickers, Papeleria, TermoEvento,
} from './ilustraciones.jsx'

// ---------------------------------------------------------------------
//  Cómo se escribe un producto
//
//  precio                → precio fijo
//  precio + precioMax    → rango, se muestra "$100 – $120"
//  desde: true           → el precio es un mínimo y puede subir
//  cotizacion: true      → sin precio, se acuerda por WhatsApp
//  variantes: [...]      → el cliente elige una opción antes de agregar
// ---------------------------------------------------------------------

export const PRODUCTOS = [
  // ---------------- Tazas y termos ----------------
  {
    id: 'vaso-liso', nombre: 'Vaso liso', precio: 70, unidad: 'por pieza',
    cat: 'tazas', fondo: 'var(--tint-arena)', Arte: Vaso,
    desc: 'El más accesible para pedidos grandes. Se personaliza con nombre, frase o logo.',
  },
  {
    id: 'taza-blanca', nombre: 'Taza blanca', precio: 120, unidad: 'por pieza',
    cat: 'tazas', fondo: 'var(--tint-oro)', Arte: Taza,
    desc: 'La clásica de cerámica. Impresión a todo color, resiste el lavavajillas.',
  },
  {
    id: 'termo', nombre: 'Termo', precio: 150, unidad: 'por pieza',
    cat: 'tazas', fondo: 'var(--tint-carbon)', Arte: Termo,
    desc: 'Conserva la temperatura por horas. Muy pedido como regalo de oficina.',
  },
  {
    id: 'taza-color', nombre: 'Taza de color', precio: 160, unidad: 'por pieza',
    cat: 'tazas', fondo: 'var(--tint-oro)', Arte: TazaColor,
    desc: 'Interior y asa de color. Eliges el tono al confirmar tu pedido.',
  },
  {
    id: 'taza-negra', nombre: 'Taza negra', precio: 180, unidad: 'por pieza',
    cat: 'tazas', fondo: 'var(--tint-carbon)', Arte: TazaNegra,
    desc: 'Mate por fuera, con el diseño en contraste. Se ve muy bien con letras doradas.',
  },
  {
    id: 'taza-magica', nombre: 'Taza mágica', precio: 200, unidad: 'por pieza',
    cat: 'tazas', fondo: 'var(--tint-carbon)', Arte: TazaMagica,
    desc: 'Negra en frío; al servir algo caliente revela el diseño. La favorita para sorprender.',
  },
  {
    id: 'tarro', nombre: 'Tarro de cerveza', unidad: 'por pieza',
    cat: 'tazas', fondo: 'var(--tint-arena)', Arte: Tarro,
    desc: 'Vidrio grueso. Muy pedido para cumpleaños, padrinos y despedidas.',
    variantes: [
      { id: 'solo', nombre: 'Sin personalizar', precio: 180 },
      { id: 'personalizado', nombre: 'Personalizado', precio: 200 },
    ],
  },

  // ---------------- Playeras y bolsas ----------------
  {
    id: 'playera-nombre', nombre: 'Playera con nombre', unidad: 'estampado de 8 × 3 cm',
    cat: 'textiles', fondo: 'var(--tint-arena)', Arte: Playera,
    desc: 'Un nombre o una palabra corta. La opción más económica para equipos y grupos.',
    variantes: [
      { id: 'estampado', nombre: 'Solo el estampado', precio: 39, nota: 'Tú pones la playera' },
      { id: 'completa', nombre: 'Con playera incluida', precio: 139 },
    ],
  },
  {
    id: 'playera-nombre-logo', nombre: 'Playera con nombre y logo', unidad: 'estampado de 8 × 5 cm',
    cat: 'textiles', fondo: 'var(--tint-oro)', Arte: Playera,
    desc: 'Nombre acompañado de un logotipo pequeño. Muy usada para uniformes de negocio.',
    variantes: [
      { id: 'estampado', nombre: 'Solo el estampado', precio: 50, nota: 'Tú pones la playera' },
      { id: 'completa', nombre: 'Con playera incluida', precio: 150 },
    ],
  },
  {
    id: 'playera-logo-pecho', nombre: 'Playera con logo en el pecho', unidad: 'estampado de 8 × 10 cm',
    cat: 'textiles', fondo: 'var(--tint-arena)', Arte: Playera,
    desc: 'Logotipo del lado izquierdo, del tamaño de un bolsillo.',
    variantes: [
      { id: 'estampado', nombre: 'Solo el estampado', precio: 60, nota: 'Tú pones la playera' },
      { id: 'completa', nombre: 'Con playera incluida', precio: 160 },
    ],
  },
  {
    id: 'playera-logo-grande', nombre: 'Playera con logo grande al frente', unidad: 'estampado de 20 × 25 cm',
    cat: 'textiles', fondo: 'var(--tint-carbon)', Arte: Playera,
    desc: 'Diseño grande y a todo color. El precio depende del tamaño y de qué tan complejo sea el diseño.',
    variantes: [
      { id: 'estampado', nombre: 'Solo el estampado', precio: 100, precioMax: 120, nota: 'Tú pones la playera' },
      { id: 'completa', nombre: 'Con playera incluida', precio: 220, precioMax: 250 },
    ],
  },
  {
    id: 'tote', nombre: 'Bolsa tote bag', precio: 180, desde: true, unidad: 'por pieza',
    cat: 'textiles', fondo: 'var(--tint-oro)', Arte: Tote,
    desc: 'De manta, resistente y lavable. El precio sube si el diseño lleva varios colores o va por ambos lados.',
  },

  // ---------------- Papelería ----------------
  {
    id: 'libreta', nombre: 'Libreta personalizada', precio: 80, desde: true,
    unidad: 'sencilla, por pieza',
    cat: 'papeleria', fondo: 'var(--tint-arena)', Arte: Libreta,
    desc: 'Desde la más sencilla. El costo cambia según el tipo de libreta y el diseño de la portada.',
  },
  {
    id: 'etiquetas', nombre: 'Etiquetas escolares y portadas A4', unidad: 'paquete',
    cat: 'papeleria', fondo: 'var(--tint-oro)', Arte: Etiquetas,
    desc: 'Para marcar lápices, colores y útiles, más portadas para libretas tamaño A4. Solo en ese tamaño.',
    variantes: [
      { id: 'normal', nombre: 'Acabado normal', precio: 50 },
      { id: 'brillos', nombre: 'Con brillos', precio: 60 },
    ],
  },
  {
    id: 'stickers', nombre: 'Stickers personalizados', cotizacion: true, unidad: 'según el diseño',
    cat: 'papeleria', fondo: 'var(--tint-arena)', Arte: Stickers,
    desc: 'Cualquier forma y tamaño. Mándanos tu idea y te pasamos el precio por WhatsApp.',
  },
  {
    id: 'papeleria', nombre: 'Papelería en general', cotizacion: true,
    unidad: 'libretas, plumones, colores',
    cat: 'papeleria', fondo: 'var(--tint-carbon)', Arte: Papeleria,
    desc: 'También surtimos material escolar y de oficina. Dinos qué necesitas y te cotizamos.',
  },

  // ---------------- Eventos ----------------
  {
    id: 'termo-evento', nombre: 'Termo de plástico para eventos', cotizacion: true,
    unidad: 'precio por volumen',
    cat: 'eventos', fondo: 'var(--tint-oro)', Arte: TermoEvento,
    desc: 'Para bodas, XV años y eventos de empresa. Según la cantidad de piezas se incluyen stickers de tu evento. El precio se acuerda contigo y queda fijo.',
  },
]

export const CATEGORIAS = [
  { id: 'todo', nombre: 'Todo' },
  { id: 'tazas', nombre: 'Tazas y termos' },
  { id: 'textiles', nombre: 'Playeras y bolsas' },
  { id: 'papeleria', nombre: 'Papelería' },
  { id: 'eventos', nombre: 'Eventos' },
]

// ---------------------------------------------------------------------
//  Ayudas para leer precios
// ---------------------------------------------------------------------

/** Un producto con variantes se guarda en el carrito como "id::variante". */
export const claveDe = (producto, variante) =>
  variante ? `${producto.id}::${variante.id}` : producto.id

export function buscarPorClave(clave) {
  const [id, varId] = clave.split('::')
  const producto = PRODUCTOS.find((p) => p.id === id)
  if (!producto) return null
  const variante = varId ? producto.variantes?.find((v) => v.id === varId) : null
  return { producto, variante: variante || null }
}

/** Devuelve { min, max, cotizacion } de un producto o de una de sus variantes. */
export function precioDe(producto, variante) {
  if (producto.cotizacion) return { min: 0, max: 0, cotizacion: true }
  const fuente = variante || producto
  return { min: fuente.precio, max: fuente.precioMax ?? fuente.precio, cotizacion: false }
}

/** El rango de precios de un producto, para mostrarlo en la tarjeta. */
export function precioDesde(producto) {
  if (producto.cotizacion) return { min: 0, max: 0, cotizacion: true }
  if (producto.variantes) {
    const bajos = producto.variantes.map((v) => v.precio)
    const altos = producto.variantes.map((v) => v.precioMax ?? v.precio)
    return { min: Math.min(...bajos), max: Math.max(...altos), cotizacion: false }
  }
  return precioDe(producto)
}
