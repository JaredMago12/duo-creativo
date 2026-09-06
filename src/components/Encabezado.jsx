import Logo from './Logo'

export default function Encabezado({ piezas, onIrAlPedido }) {
  return (
    <header>
      <div className="barra env">
        <a className="marca" href="#top">
          <Logo />
          <span>
            <span className="nombre">Dúo Creativo</span>
            <span className="oficio">DISEÑO · DETALLES · RECUERDOS</span>
          </span>
        </a>
        <nav>
          <a href="#catalogo">Catálogo</a>
          <a href="#pedido">Hacer un pedido</a>
          <a href="#proceso">Cómo trabajamos</a>
          <a href="#horario">Horario</a>
        </nav>
        <button className="btn-carrito" onClick={onIrAlPedido}>
          MI PEDIDO <span className="cuenta">{piezas}</span>
        </button>
      </div>
    </header>
  )
}
