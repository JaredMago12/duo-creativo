export default function Portada() {
  return (
    <div className="portada" id="top">
      <div className="env">
        <div>
          <h1>
            Diseño, detalles y<br />
            <span className="marcador">recuerdos</span> que se quedan.
          </h1>
          <p className="entrada">
            Personalizamos tazas, termos, playeras, bolsas y papelería para regalos,
            eventos y negocios. Cada pieza se hace por encargo en nuestro taller de
            Naucalpan.
          </p>
          <div className="acciones">
            <a className="btn btn-primario" href="#catalogo">VER EL CATÁLOGO</a>
            <a className="btn" href="#pedido">HACER UN PEDIDO</a>
          </div>
          <div className="nota-portada">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#B08243"
                 strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
              <rect x="3" y="5" width="18" height="16" rx="2" />
              <path d="M8 3v4M16 3v4M3 10h18" />
            </svg>
            <span className="mano">
              El taller trabaja de lunes a viernes.<br />
              Los pedidos se reciben todos los días.
            </span>
          </div>
        </div>

        <div className="pila">
          <img src="/logo-completo.png" alt="Dúo Creativo — Diseño, detalles, recuerdos" />
        </div>
      </div>
    </div>
  )
}
