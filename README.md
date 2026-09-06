# Duo Creativo — tienda en línea

Sitio de pedidos de papelería creativa hecho en React + Vite. Los pedidos llegan
como mensaje de WhatsApp al **56 2118 8572**. El calendario no deja elegir sábados
ni domingos porque el taller no trabaja en fin de semana.

---

## 1. Lo que necesitas antes de empezar

| Cosa | Dónde se consigue | Costo |
|---|---|---|
| Node.js 20 o superior | https://nodejs.org (botón "LTS") | Gratis |
| Cuenta de GitHub | https://github.com/signup | Gratis |
| Cuenta de Netlify | https://app.netlify.com/signup | Gratis |
| Git | https://git-scm.com/downloads | Gratis |

Para verificar que Node quedó instalado, abre la terminal y escribe:

```bash
node -v
```

Debe responder algo como `v20.11.0`. Si dice "command not found", reinicia la
terminal después de instalar.

---

## 2. Probarlo en tu computadora

Descomprime la carpeta, ábrela en la terminal y corre:

```bash
cd duo-creativo
npm install
npm run dev
```

Verás una dirección como `http://localhost:5173`. Ábrela en el navegador. Cada
vez que guardes un archivo, la página se actualiza sola.

Para detenerlo: `Ctrl + C` en la terminal.

---

## 3. Subirlo a GitHub

1. Entra a https://github.com/new
2. Nombre del repositorio: `duo-creativo`
3. Déjalo en **Public**. **No** marques "Add a README file" — ya tienes uno.
4. Clic en **Create repository**.
5. En tu terminal, dentro de la carpeta del proyecto:

```bash
git init
git add .
git commit -m "Primera version de la tienda de Duo Creativo"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/duo-creativo.git
git push -u origin main
```

Cambia `TU-USUARIO` por tu nombre de usuario de GitHub. La primera vez te va a
pedir tu usuario y un **token**, no tu contraseña. El token se genera en
GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
→ Generate new token, con el permiso `repo` marcado.

---

## 4. Publicarlo en Netlify

1. Entra a https://app.netlify.com y haz login **con tu cuenta de GitHub**.
2. Clic en **Add new site** → **Import an existing project** → **GitHub**.
3. Autoriza a Netlify y elige el repositorio `duo-creativo`.
4. Netlify lee el archivo `netlify.toml` y llena todo solo. Confirma que diga:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Clic en **Deploy site**.

En un par de minutos tendrás una dirección como
`https://algo-random-123.netlify.app`.

Para cambiarla: **Site configuration → Change site name** y pon `duocreativo`,
para que quede `https://duocreativo.netlify.app`.

### Cada vez que quieras actualizar el sitio

Editas los archivos, y después:

```bash
git add .
git commit -m "Actualice precios del catalogo"
git push
```

Netlify vuelve a publicar solo, en menos de un minuto. No hay que hacer nada más.

---

---

## Cómo se calculan los días de entrega

El sitio maneja tres momentos distintos, todos en `src/lib/fechas.js`:

1. **Recepción** — el día en que el pedido entra al taller. Si llega en horario
   hábil, entra hoy. Si llega en fin de semana o después de la hora de cierre,
   entra el siguiente día hábil.
2. **Producción** — los días que realmente se trabaja la pieza. Son
   `DIAS_HABILES_PRODUCCION` días hábiles seguidos, empezando el día de recepción.
3. **Entrega** — el día hábil **siguiente** al último de producción. Mientras se
   está produciendo la pieza no se puede entregar.

Con `DIAS_HABILES_PRODUCCION = 2`:

| Llega el pedido | Entra al taller | Se trabaja | Listo |
|---|---|---|---|
| domingo | lunes | lunes y martes | miércoles |
| lunes 10:00 | lunes | lunes y martes | miércoles |
| jueves | jueves | jueves y viernes | lunes |
| viernes | viernes | viernes y lunes | martes |
| viernes 20:30 | lunes | lunes y martes | miércoles |

Para dar más o menos tiempo, cambia solo el número en `src/config.js`. Todo lo
demás se recalcula solo, incluido el texto que ve el cliente arriba del calendario.

## 5. Qué archivo tocar para cambiar cada cosa

| Quiero cambiar… | Archivo |
|---|---|
| Número de WhatsApp, horario, correo, dirección, costos de envío | `src/config.js` |
| Productos, precios, descripciones, categorías | `src/data/productos.js` |
| Días hábiles de producción (hoy son 2) | `src/config.js` → `DIAS_HABILES_PRODUCCION` |
| Hora en que dejas de recibir pedidos del día | `src/config.js` → `CIERRE_HORA` |
| Dirección del taller | `src/config.js` → `DIRECCION` |
| Colores y tipografías | `src/styles.css` (las variables están hasta arriba) |
| Textos de la portada | `src/components/Portada.jsx` |
| Los 4 pasos de "Cómo trabajamos" | `src/components/Proceso.jsx` |
| Título y descripción que ve Google | `index.html` |

### Agregar un producto nuevo

Abre `src/data/productos.js`, copia un bloque completo y cambia los datos:

```js
{
  id: 'marcalibros',              // único, sin espacios
  nombre: 'Marcapáginas bordados',
  precio: 75,
  unidad: 'por pieza',
  cat: 'libretas',                // debe existir en CATEGORIAS
  fondo: 'var(--tint-amarillo)',  // o --tint-fucsia / --tint-turquesa
  Arte: Libreta,                  // reutiliza un dibujo de ilustraciones.jsx
  desc: 'Hilo de algodón sobre cartulina de 300 g.',
},
```

---

## 6. Poner tu propio dominio (opcional)

Compra el dominio en Namecheap, GoDaddy o Google Domains (alrededor de $200 MXN
al año para un `.mx` o un `.com`). Luego en Netlify:

**Domain management → Add a domain** → escribes tu dominio → Netlify te da los
DNS que hay que pegar en el panel de donde lo compraste. El candado HTTPS lo pone
Netlify gratis y solo.

---

## 7. Preguntas frecuentes

**¿Los pedidos se guardan en algún lado?**
No. El sitio arma el mensaje y lo abre en WhatsApp; la conversación queda en tu
teléfono. No hay base de datos que mantener ni costo mensual.

**¿Funciona si el cliente entra desde la computadora?**
Sí, abre WhatsApp Web. Si no tiene sesión iniciada, puede usar el enlace
"Copiar la cotización en texto" y pegártela por donde quiera.

**¿Puedo cobrar en línea?**
No con esta versión. Para cobrar con tarjeta necesitarías conectar Mercado Pago
o Stripe, que ya requiere un backend. Hoy el flujo es: pedido → cotización por
WhatsApp → anticipo por transferencia.

**Cambié algo y se rompió.**
`git log` te muestra el historial. Para volver a la última versión que
funcionaba: `git restore .` (deshace lo que no has guardado en un commit).

---

## 8. Si Netlify falla con "ERESOLVE"

Significa que las versiones de `vite` y `@vitejs/plugin-react` no combinan.
La regla es simple:

| Vite | Necesita plugin-react |
|---|---|
| 5, 6 o 7 | versión 4.x |
| 8 | versión 6.x |

Para dejarlas alineadas en la versión actual:

```bash
npm install --save-dev vite@^8.2.2 @vitejs/plugin-react@^6.1.1
npm run build
git add package.json package-lock.json
git commit -m "Alinear versiones de Vite y plugin-react"
git push
```

**Nunca corras `npm audit fix --force`.** Ese comando sube las dependencias a la
siguiente versión mayor sin avisar y es lo que rompe esta combinación.

Y asegúrate de que `package-lock.json` esté subido a GitHub. Si no está, Netlify
resuelve las versiones por su cuenta y puede elegir combinaciones que no funcionan.

---

## 9. Cómo se calcula la fecha de entrega

Son dos preguntas separadas, no una cuenta corrida.

**1. ¿Cuándo entra el pedido al taller?**
Si llega un día hábil antes de `CIERRE_HORA`, entra ese mismo día. Si llega en
fin de semana o después de esa hora, entra el siguiente día hábil.

**2. ¿Qué días se trabaja?**
`DIAS_HABILES_PRODUCCION` días hábiles seguidos, **contando el día en que entró**.
La fecha lista es el último de esos días.

Ejemplos con 2 días de producción y cierre a las 18:00:

| Pedido llega | Entra al taller | Se trabaja | Listo |
|---|---|---|---|
| domingo | lunes | lunes y martes | martes |
| lunes 10:00 | lunes | lunes y martes | martes |
| lunes 20:00 | martes | martes y miércoles | miércoles |
| viernes 10:00 | viernes | viernes y lunes | lunes |
| viernes 20:00 | lunes | lunes y martes | martes |

El calendario del sitio marca esos días de trabajo con un punto turquesa, y arriba
explica en texto cuáles son. El cliente ve por qué no puede pedirlo para mañana.

Todo vive en `src/lib/fechas.js`, en tres funciones: `diaDeRecepcion()`,
`diasDeProduccion()` y `primeraFechaDisponible()`.
