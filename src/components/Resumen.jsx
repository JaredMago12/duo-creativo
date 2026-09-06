import { PRODUCTOS } from '../data/productos'
import { dinero, fechaLarga } from '../lib/fechas'
import { IconoWhatsApp } from '../data/ilustraciones.jsx'

export default function Resumen({
  carrito, piezas, subtotal, envio, total, fechaElegida,
  onCambiarCantidad, onQuitar, onEnviar, onCopiar, acuse,
}) {
  const ids = Object.keys(carrito)
  const hay = ids.length > 0

  return (
    <div className="resumen">
      <div className="bloque" style={{ margin: 0 }}>
        <h3>Resumen</h3>
        <p className="sub">
          {hay
            ? `${piezas} ${piezas === 1 ? 'artículo' : 'artículos'} en tu pedido.`
            : 'Aún no has agregado nada.'}
        </p>

        {hay && (
          <ul className="lista">
            {ids.map((id) => {
              const p = PRODUCTOS.find((x) => x.id === id)
              const q = carrito[id]
              return (
                <li key={id}>
                  <span className="tit">{p.nombre}</span>
                  <span className="monto">{dinero(p.precio * q)}</span>
                  <span className="sub2">
                    <span className="paso">
                      <button
                        type="button"
                        onClick={() => onCambiarCantidad(id, -1)}
                        aria-label={`Quitar uno de ${p.nombre}`}
                      >−</button>
                      <span className="n">{q}</span>
                      <button
                        type="button"
                        onClick={() => onCambiarCantidad(id, 1)}
                        aria-label={`Agregar uno de ${p.nombre}`}
                      >+</button>
                    </span>
                    <button type="button" className="quitar" onClick={() => onQuitar(id)}>
                      Quitar
                    </button>
                  </span>
                </li>
              )
            })}
          </ul>
        )}

        {!hay && (
          <div className="vacio-msg">
            <svg width="52" height="52" viewBox="0 0 24 24" fill="none"
                 stroke="rgba(31,27,51,.35)" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
              <path d="M4 7h16v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z" />
              <path d="M8 7V4h8v3" />
              <path d="M9 12h6" />
            </svg>
            <p>Elige piezas del catálogo y aparecerán aquí.</p>
          </div>
        )}

        {hay && (
          <>
            <div className={'entrega-fecha' + (fechaElegida ? ' lista-ya' : '')}>
              Día de entrega
              <strong>{fechaElegida ? fechaLarga(fechaElegida) : 'Sin elegir'}</strong>
            </div>

            <div className="cuentas">
              <div><span>Piezas</span><span>{dinero(subtotal)}</span></div>
              <div>
                <span>{envio.titulo}</span>
                <span>{envio.costo ? dinero(envio.costo) : 'Sin costo'}</span>
              </div>
              <div className="total"><span>Total</span><span>{dinero(total)}</span></div>
            </div>

            <button
              className="btn btn-primario"
              style={{ width: '100%', marginTop: 20 }}
              onClick={onEnviar}
              type="button"
            >
              <IconoWhatsApp />
              Enviar pedido por WhatsApp
            </button>

            <button className="enlace-copia" onClick={onCopiar} type="button">
              Copiar la cotización en texto
            </button>

            {acuse && (
              <div className={'acuse' + (acuse.alerta ? ' alerta' : '')} role="status">
                <strong>{acuse.titulo}</strong>
                {acuse.cuerpo}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}
