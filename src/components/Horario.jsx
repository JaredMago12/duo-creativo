import { HORARIO } from '../config'

export default function Horario() {
  const hoy = new Date().getDay()

  return (
    <section id="horario" style={{ borderTop: '2px solid var(--tinta)' }}>
      <div className="env horario">
        <div>
          <h2 style={{ fontSize: 'clamp(1.9rem,3.4vw,2.7rem)', marginBottom: 16 }}>
            El taller descansa el fin de semana
          </h2>
          <p>
            Sábado y domingo no imprimimos, no encuadernamos y no entregamos. La tienda en
            línea sigue abierta: puedes mandar tu pedido cuando quieras y lo tomamos el
            siguiente día hábil.
          </p>
          <p className="mano" style={{ marginTop: 20 }}>
            Los días festivos oficiales también cerramos. Los avisamos aquí con una semana
            de anticipación.
          </p>
        </div>

        <table className="tabla">
          <tbody>
            {HORARIO.map((d) => (
              <tr key={d.dia} className={d.cerrado ? 'cerrado' : undefined}>
                <th scope="row">
                  {d.nombre}
                  {d.dia === hoy && <span className="hoy-marca">hoy</span>}
                </th>
                <td>{d.horas}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
