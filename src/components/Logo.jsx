export default function Logo({ size = 46 }) {
  return (
    <img
      src="/monograma.png"
      alt="Dúo Creativo"
      className="glifo"
      width={size}
      height={size}
      style={{ width: size, height: size }}
    />
  )
}
