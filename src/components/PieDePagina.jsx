import { IconoFacebook, IconoWhatsApp } from '../data/ilustraciones.jsx'
import {
  WHATSAPP, WHATSAPP_VISIBLE, CORREO, FACEBOOK, FACEBOOK_NOMBRE, DIRECCION,
} from '../config'

export default function PieDePagina() {
  return (
    <footer>
      <div className="env">
        <div className="pie-cols">
          <div>
            <div className="marca-pie">
              <img src="/monograma.png" alt="" />
              <span><span className="nombre">Dúo Creativo</span><span className="oficio">DISEÑO · DETALLES · RECUERDOS</span></span>
            </div>
            <p>
              Personalizamos tazas, termos, playeras, bolsas y papelería para regalos,
              eventos y negocios. Taller en Naucalpan, Estado de México.
            </p>
          </div>

          <div>
            <h4>Contacto</h4>
            <ul>
              <li><a className="con-icono" href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer">
                  <IconoWhatsApp width="16" height="16" /><span>{WHATSAPP_VISIBLE}</span>
                </a></li>
              <li><a href={`mailto:${CORREO}`}>{CORREO}</a></li>
              <li>
                <a className="con-icono" href={FACEBOOK} target="_blank" rel="noopener noreferrer">
                  <IconoFacebook /><span>{FACEBOOK_NOMBRE}</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4>Taller</h4>
            <ul>
              <li>{DIRECCION.colonia}</li>
              <li>{DIRECCION.ciudad}</li>
              <li>{DIRECCION.estado}</li>
              <li style={{ marginTop: 12 }}>
                Lunes a viernes, con cita. Te damos la dirección exacta al
                confirmar tu pedido.
              </li>
            </ul>
          </div>
        </div>

        <div className="legal">
          <span>© {new Date().getFullYear()} Dúo Creativo. Todos los diseños son originales.</span>
          <span>Aviso de privacidad · Términos de venta</span>
        </div>
      </div>
    </footer>
  )
}
