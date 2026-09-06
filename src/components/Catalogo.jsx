import { PRODUCTOS, CATEGORIAS } from '../data/productos'
import { dinero } from '../lib/fechas'

export default function Catalogo({ carrito, filtro, onFiltrar, onAgregar }) {
  const visibles = PRODUCTOS.filter((p) => filtro === 'todo' || p.cat === filtro)

  return (
    <section id="catalogo">
      <div className="env">
        <div className="cabeza">
          <div>
            <h2>Catálogo</h2>
            <p>
              Precios por pieza o paquete, con tu diseño o el nuestro. Todo se personaliza
              sin costo extra: nombre, colores y tipografía.
            </p>
          </div>
          <p className="mano" style={{ margin: 0 }}>
            ¿Buscas algo que no está aquí?
            <br />
            Escríbenos y lo cotizamos.
          </p>
        </div>

        <div className="filtros" role="group" aria-label="Filtrar catálogo por tipo">
          {CATEGORIAS.map((c) => (
            <button
              key={c.id}
              className="filtro"
              aria-pressed={filtro === c.id}
              onClick={() => onFiltrar(c.id)}
            >
              {c.nombre}
            </button>
          ))}
        </div>

        <div className="rejilla">
          {visibles.map((p) => {
            const cantidad = carrito[p.id] || 0
            const Arte = p.Arte
            return (
              <article className="pieza" key={p.id}>
                <div className="troquel">
                  <div className="lamina" style={{ background: p.fondo }}>
                    <Arte />
                  </div>
                  <h3>{p.nombre}</h3>
                  <p className="desc">{p.desc}</p>
                  <div className="pie-pieza">
                    <span className="precio">
                      {dinero(p.precio)}
                      <small>{p.unidad}</small>
                    </span>
                    <button
                      className={'btn-add' + (cantidad ? ' puesto' : '')}
                      onClick={() => onAgregar(p.id)}
                    >
                      {cantidad ? `En tu pedido (${cantidad})` : 'Agregar'}
                    </button>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
