// Ilustraciones en SVG, dibujadas con los colores del logotipo.
// No son imágenes: pesan casi nada y se ven nítidas en cualquier pantalla.

const C = '#292929' // carbón
const O = '#B08243' // oro
const F = '#F3EADF' // crema
const B = '#FFFFFF'

const trazo = { stroke: C, strokeWidth: 2.6, strokeLinecap: 'round', strokeLinejoin: 'round' }

/* ---------- Tazas ---------- */
function CuerpoTaza({ relleno = B, detalle = O }) {
  return (
    <>
      <path d="M26 26h50v40a14 14 0 0 1-14 14H40a14 14 0 0 1-14-14z" fill={relleno} {...trazo} />
      <path d="M76 36h10a12 12 0 0 1 0 24H76" fill="none" {...trazo} />
      <path d="M36 40h30M36 52h20" stroke={detalle} strokeWidth="3.4" strokeLinecap="round" />
    </>
  )
}

export const Taza = () => (
  <svg viewBox="0 0 120 100" aria-hidden="true"><CuerpoTaza /></svg>
)

export const TazaColor = () => (
  <svg viewBox="0 0 120 100" aria-hidden="true">
    <CuerpoTaza relleno={B} detalle={O} />
    <path d="M26 26h50v9H26z" fill={O} stroke={C} strokeWidth="2.6" />
  </svg>
)

export const TazaNegra = () => (
  <svg viewBox="0 0 120 100" aria-hidden="true">
    <CuerpoTaza relleno={C} detalle={O} />
  </svg>
)

export const TazaMagica = () => (
  <svg viewBox="0 0 120 100" aria-hidden="true">
    <defs>
      <linearGradient id="magia" x1="0" x2="1">
        <stop offset="0" stopColor={C} />
        <stop offset="1" stopColor={B} />
      </linearGradient>
    </defs>
    <path d="M26 26h50v40a14 14 0 0 1-14 14H40a14 14 0 0 1-14-14z" fill="url(#magia)" {...trazo} />
    <path d="M76 36h10a12 12 0 0 1 0 24H76" fill="none" {...trazo} />
    <g stroke={O} strokeWidth="2.8" strokeLinecap="round">
      <path d="M88 18v10M83 23h10" />
      <path d="M98 42v7M94.5 45.5h7" />
    </g>
    <path d="M52 40h20M52 52h14" stroke={O} strokeWidth="3.4" strokeLinecap="round" />
  </svg>
)

export const Vaso = () => (
  <svg viewBox="0 0 120 100" aria-hidden="true">
    <path d="M42 18h36l-5 62a6 6 0 0 1-6 6H53a6 6 0 0 1-6-6z" fill={B} {...trazo} />
    <path d="M45 44h30" stroke={O} strokeWidth="3.4" strokeLinecap="round" />
    <path d="M46 56h22" stroke={O} strokeWidth="3.4" strokeLinecap="round" />
  </svg>
)

export const Termo = () => (
  <svg viewBox="0 0 120 100" aria-hidden="true">
    <rect x="44" y="22" width="34" height="64" rx="10" fill={B} {...trazo} />
    <rect x="48" y="10" width="26" height="14" rx="5" fill={C} stroke={C} strokeWidth="2.6" />
    <path d="M44 44h34" {...trazo} />
    <rect x="52" y="52" width="18" height="22" rx="4" fill={O} stroke={C} strokeWidth="2.4" />
  </svg>
)

export const TermoEvento = () => (
  <svg viewBox="0 0 120 100" aria-hidden="true">
    <rect x="20" y="26" width="30" height="60" rx="9" fill={B} {...trazo} />
    <rect x="24" y="16" width="22" height="12" rx="4" fill={O} stroke={C} strokeWidth="2.4" />
    <rect x="58" y="26" width="30" height="60" rx="9" fill={C} {...trazo} />
    <rect x="62" y="16" width="22" height="12" rx="4" fill={O} stroke={C} strokeWidth="2.4" />
    <circle cx="73" cy="54" r="9" fill={F} stroke={C} strokeWidth="2.4" />
    <circle cx="35" cy="54" r="9" fill={O} stroke={C} strokeWidth="2.4" />
  </svg>
)

export const Tarro = () => (
  <svg viewBox="0 0 120 100" aria-hidden="true">
    <path d="M32 20h44v58a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8z" fill={B} {...trazo} />
    <path d="M76 34h12a13 13 0 0 1 0 26H76" fill="none" {...trazo} />
    <path d="M32 40h44" {...trazo} />
    <path d="M32 20h44v20H32z" fill={F} stroke={C} strokeWidth="2.6" />
    <path d="M40 52h28M40 64h20" stroke={O} strokeWidth="3.4" strokeLinecap="round" />
  </svg>
)

/* ---------- Textiles ---------- */
export const Playera = () => (
  <svg viewBox="0 0 120 100" aria-hidden="true">
    <path d="M44 14l-24 12 8 18 10-5v45h44V39l10 5 8-18-24-12a14 14 0 0 1-32 0z" fill={B} {...trazo} />
    <rect x="48" y="44" width="24" height="16" rx="3" fill={O} stroke={C} strokeWidth="2.4" />
  </svg>
)

export const Tote = () => (
  <svg viewBox="0 0 120 100" aria-hidden="true">
    <path d="M30 32h60l-5 54H35z" fill={B} {...trazo} />
    <path d="M46 32V22a14 14 0 0 1 28 0v10" fill="none" {...trazo} />
    <circle cx="60" cy="58" r="13" fill={O} stroke={C} strokeWidth="2.4" />
  </svg>
)

/* ---------- Papelería ---------- */
export const Libreta = () => (
  <svg viewBox="0 0 120 100" aria-hidden="true">
    <rect x="30" y="12" width="62" height="76" rx="6" fill={B} {...trazo} />
    <path d="M42 12v76" {...trazo} />
    {[24, 40, 56, 72].map((y) => (
      <circle key={y} cx="36" cy={y} r="3.4" fill={F} stroke={C} strokeWidth="2.2" />
    ))}
    <path d="M54 32h26M54 46h26M54 60h16" stroke={O} strokeWidth="3.2" strokeLinecap="round" />
  </svg>
)

export const Etiquetas = () => (
  <svg viewBox="0 0 120 100" aria-hidden="true">
    <path d="M52 14h40a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6H52L26 32z" fill={O} {...trazo} />
    <circle cx="82" cy="32" r="4.6" fill={F} stroke={C} strokeWidth="2.4" />
    <path d="M40 60h40a6 6 0 0 1 6 6v14a6 6 0 0 1-6 6H40L18 73z" fill={B} {...trazo} />
    <circle cx="74" cy="73" r="4" fill={O} stroke={C} strokeWidth="2.2" />
  </svg>
)

export const Stickers = () => (
  <svg viewBox="0 0 120 100" aria-hidden="true">
    <rect x="18" y="16" width="84" height="68" rx="7" fill={B} stroke={C} strokeWidth="2.6" strokeDasharray="7 5" />
    <circle cx="44" cy="40" r="14" fill={O} stroke={C} strokeWidth="2.6" />
    <rect x="66" y="26" width="26" height="26" rx="7" fill={C} />
    <path d="M44 60l12 12-12 12-12-12z" fill={C} />
    <path d="M66 62h26M66 74h16" stroke={O} strokeWidth="3.4" strokeLinecap="round" />
  </svg>
)

export const Papeleria = () => (
  <svg viewBox="0 0 120 100" aria-hidden="true">
    <rect x="24" y="46" width="34" height="42" rx="5" fill={B} {...trazo} />
    <path d="M70 88V34l10-18 10 18v54z" fill={O} {...trazo} />
    <path d="M70 34h20" {...trazo} />
    <path d="M32 58h18M32 70h12" stroke={O} strokeWidth="3.2" strokeLinecap="round" />
    <path d="M80 16v-8" stroke={C} strokeWidth="2.6" strokeLinecap="round" />
  </svg>
)

/* ---------- Iconos ---------- */
export function IconoWhatsApp(props) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.9-4.45 9.9-9.91C21.95 6.45 17.5 2 12.04 2zm5.8 14.16c-.25.69-1.43 1.32-1.98 1.4-.53.08-1.19.11-1.92-.12-.44-.14-1.01-.33-1.74-.64-3.06-1.32-5.06-4.4-5.21-4.6-.15-.2-1.25-1.66-1.25-3.17s.79-2.25 1.07-2.56c.28-.31.61-.38.81-.38h.58c.19 0 .44-.07.69.53.25.61.86 2.11.94 2.26.08.15.13.33.02.53-.1.2-.16.33-.31.5-.15.18-.32.39-.46.53-.15.15-.31.31-.13.61.18.3.79 1.31 1.7 2.12 1.17 1.04 2.16 1.37 2.46 1.52.3.15.48.13.66-.08.18-.2.76-.89.96-1.19.2-.3.4-.25.68-.15.28.1 1.77.83 2.07.99.3.15.5.22.58.35.07.13.07.74-.18 1.44z" />
    </svg>
  )
}

export function IconoFacebook(props) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.45 2.91h-2.33V22c4.78-.76 8.44-4.92 8.44-9.94z" />
    </svg>
  )
}
