import { useState } from 'react'
import { PRODUCTOS, CATEGORIAS, claveDe, precioDesde, precioDe } from '../data/productos'
import { dinero } from '../lib/fechas'

/** "$120", "$100 – $120" o "Cotización" */
export function Precio({ rango, prefijo, unidad }) {
  if (rango.cotizacion) {
    return <span className="precio a-cotizar">Cotización{unidad && <small>{unidad}</small>}</span>
  }
  const texto = rango.min === rango.max ? dinero(rango.min) : `${dinero(rango.min)} – ${dinero(rango.max)}`
  return (
    <span className="precio">
      {prefijo && <span className="prefijo">{prefijo}</span>}
      {texto}
      {unidad && <small>{unidad}</small>}
    </span>
  )
}

function Tarjeta({ producto, carrito, onAgregar }) {
  const [elegida, setElegida] = useState(producto.variantes?.[0] ?? null)
  const Arte = producto.Arte
  const clave = claveDe(producto, elegida)
  const cantidad = carrito[clave] || 0

  const rango = producto.variantes ? precioDe(producto, elegida) : precioDesde(producto)
  const prefijo = producto.desde ? 'DESDE' : null

  return (
    <article className="pieza">
      <div className="troquel">
        <div className="lamina" style={{ background: producto.fondo }}>
          <Arte />
        </div>
        <h3>{producto.nombre}</h3>
        <p className="desc">{producto.desc}</p>

        {producto.variantes && (
          <div className="variantes" role="radiogroup" aria-label={`Opciones de ${producto.nombre}`}>
            {producto.variantes.map((v) => {
              const p = precioDe(producto, v)
              return (
                <label key={v.id} className={'variante' + (elegida?.id === v.id ? ' elegida' : '')}>
                  <input
                    type="radio"
                    name={`var-${producto.id}`}
                    checked={elegida?.id === v.id}
                    onChange={() => setElegida(v)}
                  />
                  <span className="v-nombre">
                    {v.nombre}
                    {v.nota && <span className="v-nota">{v.nota}</span>}
                  </span>
                  <span className="v-precio">
                    {p.min === p.max ? dinero(p.min) : `${dinero(p.min)} – ${dinero(p.max)}`}
                  </span>
                </label>
              )
            })}
          </div>
        )}

        <div className="pie-pieza">
          <Precio rango={rango} prefijo={prefijo} unidad={producto.unidad} />
          <button className={'btn-add' + (cantidad ? ' puesto' : '')} onClick={() => onAgregar(clave)}>
            {cantidad ? `EN TU PEDIDO (${cantidad})` : producto.cotizacion ? 'PEDIR PRECIO' : 'AGREGAR'}
          </button>
        </div>
      </div>
    </article>
  )
}

export default function Catalogo({ carrito, filtro, onFiltrar, onAgregar }) {
  const visibles = PRODUCTOS.filter((p) => filtro === 'todo' || p.cat === filtro)

  return (
    <section id="catalogo">
      <div className="env">
        <div className="cabeza">
          <div>
            <h2>Catálogo</h2>
            <p>
              Los precios son por pieza e incluyen la personalización. En los diseños
              grandes o complejos el costo se ajusta al confirmar tu pedido.
            </p>
          </div>
          <p className="mano" style={{ margin: 0 }}>
            ¿Buscas algo que no está aquí?<br />
            Escríbenos y lo cotizamos.
          </p>
        </div>

        <div className="filtros" role="group" aria-label="Filtrar catálogo">
          {CATEGORIAS.map((c) => (
            <button key={c.id} className="filtro" aria-pressed={filtro === c.id} onClick={() => onFiltrar(c.id)}>
              {c.nombre}
            </button>
          ))}
        </div>

        <div className="rejilla">
          {visibles.map((p) => (
            <Tarjeta key={p.id} producto={p} carrito={carrito} onAgregar={onAgregar} />
          ))}
        </div>
      </div>
    </section>
  )
}
