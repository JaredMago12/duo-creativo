const PASOS = [
  {
    titulo: 'Envías tu pedido',
    texto: 'Desde esta página, a cualquier hora. Nos llega con las piezas, la fecha y tus notas.',
    cuando: 'cualquier día',
  },
  {
    titulo: 'Confirmamos y cotizamos',
    texto: 'Te escribimos con el total final y un boceto si tu pieza lleva diseño. Pides cambios las veces que necesites.',
    cuando: '1 día hábil',
  },
  {
    titulo: 'Pagas el anticipo',
    texto: 'La mitad por transferencia y entramos a producción. El resto al entregar.',
    cuando: 'el mismo día',
  },
  {
    titulo: 'Imprimimos y entregamos',
    texto: 'Cortamos, encuadernamos y empacamos a mano. Te avisamos cuando esté en tus manos o en camino.',
    cuando: 'el día que elegiste',
  },
]

export default function Proceso() {
  return (
    <section id="proceso">
      <div className="env">
        <div className="cabeza">
          <div>
            <h2>Cómo trabajamos</h2>
            <p>
              Cuatro pasos, siempre en días hábiles. Si envías tu pedido un viernes por la
              noche, la confirmación llega el lunes.
            </p>
          </div>
        </div>
        <ol className="proceso">
          {PASOS.map((p, i) => (
            <li key={p.titulo}>
              <span className="num">{i + 1}</span>
              <h3>{p.titulo}</h3>
              <p>{p.texto}</p>
              <span className="cuando">{p.cuando}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
