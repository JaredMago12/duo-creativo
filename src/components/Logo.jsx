export default function Logo({ size = 38, borde = '#1F1B33' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" aria-hidden="true" className="glifo">
      <rect x="1.5" y="1.5" width="25" height="25" rx="7" fill="#0E8F82" stroke={borde} strokeWidth="3" />
      <rect x="13.5" y="13.5" width="25" height="25" rx="7" fill="#D02A6D" fillOpacity=".92" stroke={borde} strokeWidth="3" />
    </svg>
  )
}
