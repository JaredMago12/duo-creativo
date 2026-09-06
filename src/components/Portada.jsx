export default function Portada() {
  return (
    <div className="portada" id="top">
      <div className="env">
        <div>
          <h1>
            Papelería que se hace a mano
            <br />
            <span className="marcador">y se pide en línea.</span>
          </h1>
          <p className="entrada">
            Somos dos: una diseña, la otra imprime y encuaderna. Hacemos libretas,
            invitaciones, stickers y papelería para eventos, pieza por pieza, en nuestro
            taller de la Ciudad de México.
          </p>
          <div className="acciones">
            <a className="btn btn-primario" href="#catalogo">Armar mi pedido</a>
            <a className="btn" href="#proceso">Ver cómo trabajamos</a>
          </div>
          <div className="nota-portada">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#D02A6D"
                 strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <rect x="3" y="5" width="18" height="16" rx="3" />
              <path d="M8 3v4M16 3v4M3 10h18" />
            </svg>
            <span className="mano">
              El taller abre de lunes a viernes. Los pedidos se reciben todos los días.
            </span>
          </div>
        </div>

        <div className="pila" aria-hidden="true">
          <div className="hoja hoja-1">
            <div className="espiral">
              {[0, 1, 2, 3, 4, 5].map((i) => <i key={i} />)}
            </div>
            <h3>Libreta A5 de puntos</h3>
            <p>Papel de 120 g, abre plana</p>
            <div className="renglones"><i /><i /><i /><i /></div>
          </div>

          <div className="hoja hoja-2">
            <div className="cinta" />
            <h3>Invitaciones</h3>
            <p>Papel algodón, tinta en relieve</p>
            <div className="renglones"><i /><i /><i /></div>
          </div>

          <div className="hoja hoja-3">
            <h3>Stickers troquelados</h3>
            <p>Vinil mate, resistente al agua</p>
            <svg viewBox="0 0 200 60" style={{ marginTop: 10 }}>
              <circle cx="24" cy="30" r="19" fill="#FFC64B" stroke="#1F1B33" strokeWidth="2.5" />
              <rect x="56" y="11" width="38" height="38" rx="9" fill="#0E8F82" stroke="#1F1B33" strokeWidth="2.5" />
              <path d="M120 11l19 19-19 19-19-19z" fill="#D02A6D" stroke="#1F1B33" strokeWidth="2.5" />
              <circle cx="172" cy="30" r="19" fill="#FDF6E7" stroke="#1F1B33" strokeWidth="2.5" strokeDasharray="5 4" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
