import { buscarPorClave, precioDe } from '../data/productos'
import { dinero, fechaLarga } from '../lib/fechas'
import { IconoWhatsApp } from '../data/ilustraciones.jsx'

export default function Resumen({
  carrito, piezas, cuenta, envio, fechaElegida,
  onCambiarCantidad, onQuitar, onEnviar, onCopiar, acuse,
}) {
  const claves = Object.keys(carrito)
  const hay = claves.length > 0

  const totalMin = cuenta.min + envio.costo
  const totalMax = cuenta.max + envio.costo

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
            {claves.map((clave) => {
              const { producto, variante } = buscarPorClave(clave)
              const q = carrito[clave]
              const p = precioDe(producto, variante)
              return (
                <li key={clave}>
                  <span className="tit">
                    {producto.nombre}
                    {variante && <em>{variante.nombre}</em>}
                  </span>
                  <span className="monto">
                    {p.cotizacion
                      ? 'Por cotizar'
                      : p.min === p.max
                        ? dinero(p.min * q)
                        : `${dinero(p.min * q)} – ${dinero(p.max * q)}`}
                  </span>
                  <span className="sub2">
                    <span className="paso">
                      <button type="button" onClick={() => onCambiarCantidad(clave, -1)}
                              aria-label={`Quitar uno de ${producto.nombre}`}>−</button>
                      <span className="n">{q}</span>
                      <button type="button" onClick={() => onCambiarCantidad(clave, 1)}
                              aria-label={`Agregar uno de ${producto.nombre}`}>+</button>
                    </span>
                    <button type="button" className="quitar" onClick={() => onQuitar(clave)}>
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
            <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="#B08243"
                 strokeWidth="1.2" strokeLinecap="round" aria-hidden="true">
              <path d="M4 7h16v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z" />
              <path d="M8 7V4h8v3" /><path d="M9 12h6" />
            </svg>
            <p>Elige piezas del catálogo y aparecerán aquí.</p>
          </div>
        )}

        {hay && (
          <>
            <div className={'entrega-fecha' + (fechaElegida ? ' lista-ya' : '')}>
              DÍA DE ENTREGA
              <strong>{fechaElegida ? fechaLarga(fechaElegida) : 'Sin elegir'}</strong>
            </div>

            <div className="cuentas">
              <div>
                <span>Piezas</span>
                <span>
                  {cuenta.min === cuenta.max
                    ? dinero(cuenta.min)
                    : `${dinero(cuenta.min)} – ${dinero(cuenta.max)}`}
                </span>
              </div>
              <div>
                <span>{envio.titulo}</span>
                <span>{envio.costo ? dinero(envio.costo) : 'Sin costo'}</span>
              </div>
              <div className="total">
                <span>Total</span>
                <span>
                  {totalMin === totalMax ? dinero(totalMin) : `${dinero(totalMin)} – ${dinero(totalMax)}`}
                </span>
              </div>
              {cuenta.hayCotizacion && (
                <span className="nota-cotiza">
                  Hay piezas cuyo precio depende del diseño. Te las cotizamos al confirmar
                  y el total sube en consecuencia.
                </span>
              )}
            </div>

            <button className="btn btn-primario" style={{ width: '100%', marginTop: 22 }}
                    onClick={onEnviar} type="button">
              <IconoWhatsApp />
              ENVIAR PEDIDO POR WHATSAPP
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
