// Ilustraciones dibujadas a mano en SVG. No son imágenes: pesan casi nada
// y se ven nítidas en cualquier pantalla.

const T = '#1F1B33' // tinta
const F = '#D02A6D' // fucsia
const V = '#0E8F82' // turquesa
const A = '#FFC64B' // amarillo
const C = '#FDF6E7' // crema

export function Libreta() {
  return (
    <svg viewBox="0 0 120 90" aria-hidden="true">
      <rect x="22" y="8" width="76" height="74" rx="6" fill="#fff" stroke={T} strokeWidth="3" />
      <path d="M34 8v74" stroke={T} strokeWidth="3" />
      {[20, 38, 56, 72].map((y) => (
        <circle key={y} cx="28" cy={y} r="4" fill={C} stroke={T} strokeWidth="2.5" />
      ))}
      <g fill={T} opacity=".38">
        {[26, 42, 58].map((y) =>
          [48, 62, 76].map((x) => <circle key={`${x}-${y}`} cx={x} cy={y} r="2" />)
        )}
      </g>
    </svg>
  )
}

export function Agenda() {
  return (
    <svg viewBox="0 0 120 90" aria-hidden="true">
      <rect x="18" y="16" width="84" height="66" rx="7" fill={F} stroke={T} strokeWidth="3" />
      <rect x="18" y="16" width="84" height="17" rx="7" fill={T} />
      <path d="M36 8v14M84 8v14" stroke={T} strokeWidth="4" strokeLinecap="round" />
      <g stroke={C} strokeWidth="3" strokeLinecap="round" opacity=".85">
        <path d="M32 46h24M32 58h44M32 70h30" />
      </g>
    </svg>
  )
}

export function Stickers() {
  return (
    <svg viewBox="0 0 120 90" aria-hidden="true">
      <rect x="12" y="10" width="96" height="70" rx="7" fill="#fff" stroke={T} strokeWidth="3" strokeDasharray="7 5" />
      <circle cx="38" cy="34" r="14" fill={A} stroke={T} strokeWidth="3" />
      <rect x="62" y="20" width="28" height="28" rx="8" fill={V} stroke={T} strokeWidth="3" />
      <path d="M38 52l13 13-13 13-13-13z" fill={F} stroke={T} strokeWidth="3" />
      <path d="M62 58h28M62 68h18" stroke={T} strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

export function Sobre() {
  return (
    <svg viewBox="0 0 120 90" aria-hidden="true">
      <rect x="14" y="20" width="92" height="56" rx="6" fill="#fff" stroke={T} strokeWidth="3" />
      <path d="M14 26l46 30 46-30" fill="none" stroke={T} strokeWidth="3" />
      <rect x="42" y="4" width="36" height="34" rx="4" fill={A} stroke={T} strokeWidth="3" />
      <path d="M50 16h20M50 24h13" stroke={T} strokeWidth="2.6" strokeLinecap="round" />
    </svg>
  )
}

export function Tarjetas() {
  return (
    <svg viewBox="0 0 120 90" aria-hidden="true">
      <rect x="14" y="26" width="70" height="44" rx="6" fill={V} stroke={T} strokeWidth="3" transform="rotate(-7 49 48)" />
      <rect x="34" y="20" width="70" height="44" rx="6" fill="#fff" stroke={T} strokeWidth="3" transform="rotate(6 69 42)" />
      <path d="M46 36h32M46 46h20" stroke={T} strokeWidth="3" strokeLinecap="round" transform="rotate(6 69 42)" />
    </svg>
  )
}

export function Planner() {
  return (
    <svg viewBox="0 0 120 90" aria-hidden="true">
      <rect x="14" y="14" width="92" height="64" rx="6" fill="#fff" stroke={T} strokeWidth="3" />
      <path d="M14 30h92" stroke={T} strokeWidth="3" />
      <path d="M36 8v12M84 8v12" stroke={T} strokeWidth="4" strokeLinecap="round" />
      <rect x="24" y="38" width="18" height="14" rx="3" fill={A} stroke={T} strokeWidth="2.5" />
      <rect x="50" y="38" width="18" height="14" rx="3" fill={C} stroke={T} strokeWidth="2.5" />
      <rect x="76" y="38" width="18" height="14" rx="3" fill={F} stroke={T} strokeWidth="2.5" />
      <rect x="24" y="58" width="18" height="12" rx="3" fill={V} stroke={T} strokeWidth="2.5" />
      <rect x="50" y="58" width="44" height="12" rx="3" fill={C} stroke={T} strokeWidth="2.5" />
    </svg>
  )
}

export function Etiquetas() {
  return (
    <svg viewBox="0 0 120 90" aria-hidden="true">
      <path d="M60 12h40a6 6 0 0 1 6 6v30a6 6 0 0 1-6 6H60L30 33z" fill={A} stroke={T} strokeWidth="3" strokeLinejoin="round" />
      <circle cx="88" cy="33" r="5" fill={C} stroke={T} strokeWidth="3" />
      <path d="M14 33h16" stroke={T} strokeWidth="3" strokeLinecap="round" />
      <path d="M46 62h44a6 6 0 0 1 6 6v6a6 6 0 0 1-6 6H46L26 74z" fill={V} stroke={T} strokeWidth="3" strokeLinejoin="round" />
    </svg>
  )
}

export function Boda() {
  return (
    <svg viewBox="0 0 120 90" aria-hidden="true">
      <rect x="10" y="18" width="52" height="62" rx="5" fill="#fff" stroke={T} strokeWidth="3" />
      <rect x="52" y="10" width="52" height="62" rx="5" fill="#FBDCE9" stroke={T} strokeWidth="3" />
      <path d="M64 26h28M64 36h28M64 46h16" stroke={T} strokeWidth="2.8" strokeLinecap="round" />
      <circle cx="78" cy="60" r="7" fill="none" stroke={F} strokeWidth="3" />
      <circle cx="88" cy="60" r="7" fill="none" stroke={A} strokeWidth="3" />
      <path d="M22 34h22M22 44h14" stroke={T} strokeWidth="2.8" strokeLinecap="round" opacity=".5" />
    </svg>
  )
}

export function IconoWhatsApp(props) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.9-4.45 9.9-9.91C21.95 6.45 17.5 2 12.04 2zm5.8 14.16c-.25.69-1.43 1.32-1.98 1.4-.53.08-1.19.11-1.92-.12-.44-.14-1.01-.33-1.74-.64-3.06-1.32-5.06-4.4-5.21-4.6-.15-.2-1.25-1.66-1.25-3.17s.79-2.25 1.07-2.56c.28-.31.61-.38.81-.38h.58c.19 0 .44-.07.69.53.25.61.86 2.11.94 2.26.08.15.13.33.02.53-.1.2-.16.33-.31.5-.15.18-.32.39-.46.53-.15.15-.31.31-.13.61.18.3.79 1.31 1.7 2.12 1.17 1.04 2.16 1.37 2.46 1.52.3.15.48.13.66-.08.18-.2.76-.89.96-1.19.2-.3.4-.25.68-.15.28.1 1.77.83 2.07.99.3.15.5.22.58.35.07.13.07.74-.18 1.44z" />
    </svg>
  )
}
