import Logo from './Logo'
import {
  WHATSAPP, WHATSAPP_VISIBLE, CORREO, INSTAGRAM, DIRECCION, MAPA,
} from '../config'

export default function PieDePagina() {
  return (
    <footer>
      <div className="env">
        <div className="pie-cols">
          <div>
            <div className="marca-pie">
              <Logo size={34} borde="#FDF6E7" />
              <span className="nombre">Duo Creativo</span>
            </div>
            <p>
              Papelería creativa hecha a mano en Naucalpan, Estado de México. Libretas,
              invitaciones, stickers y papelería para eventos.
            </p>
          </div>

          <div>
            <h4>Contacto</h4>
            <ul>
              <li><a href={`https://wa.me/${WHATSAPP}`}>WhatsApp {WHATSAPP_VISIBLE}</a></li>
              <li><a href={`mailto:${CORREO}`}>{CORREO}</a></li>
              <li><a href={INSTAGRAM}>Instagram</a></li>
            </ul>
          </div>

          <div>
            <h4>Taller</h4>
            <ul>
              <li>{DIRECCION.calle}</li>
              <li>Col. {DIRECCION.colonia}, C.P. {DIRECCION.cp}</li>
              <li>{DIRECCION.ciudad}, {DIRECCION.estado}</li>
              <li style={{ marginTop: 12 }}>
                <a href={MAPA} target="_blank" rel="noopener noreferrer">Cómo llegar</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="legal">
          <span>© {new Date().getFullYear()} Duo Creativo. Todos los diseños son originales.</span>
          <span>Aviso de privacidad · Términos de venta</span>
        </div>
      </div>
    </footer>
  )
}
