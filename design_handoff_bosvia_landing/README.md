# Handoff: Bosvia — Landing page de producto (portafolio)

## Overview
Landing page de **Bosvia**, un software en desarrollo para conectar reservas, huéspedes y operación interna de glampings, ecohoteles y pequeños alojamientos. La página forma parte del portafolio de su creador. Comunica visión de producto, sensibilidad de diseño y capacidad técnica. **Debe quedar claro que el producto está en construcción**: no hay clientes, testimonios, métricas, integraciones ni funcionalidades reales. Todo el contenido está en español.

## About the Design Files
Los archivos de este paquete son **referencias de diseño hechas en HTML**. Son prototipos que muestran el aspecto y el comportamiento esperados, no código de producción para copiar. La tarea es **recrear estos diseños con Next.js (App Router) + TypeScript + Tailwind CSS**, el stack que pidió el cliente, con componentes reutilizables y contenido fácil de editar (por ejemplo, un `content.ts` con todos los textos y datos de demostración).

Las imágenes de referencia originales (`reference/`) son la dirección visual principal. El prototipo HTML las traduce a una web real; si hay duda, prioriza la fidelidad a las referencias.

## Fidelity
**Alta fidelidad (hi-fi).** Colores, tipografía, espaciado, curvas orgánicas y composición son finales. Recrear con precisión.

---

## Design Tokens

### Colores
| Token | Hex | Uso |
|---|---|---|
| ivory | `#F8F5EE` | Fondo general |
| surface | `#FBFAF6` | Fondo de mockups (dashboard, sitios) |
| forest | `#103C34` | Sidebar, footer, botones oscuros |
| ink | `#092524` | Titulares y texto principal |
| moss | `#496952` | “Bosvia organiza.” |
| sage | `#D9DFCD` | Círculos de iconos y pasos |
| sage-soft | `#E3E6DA` | Círculos de iconos de módulos y tarjetas |
| sage-bg | `#E4E8DA` | Fondo de la sección de personalización |
| terracotta | `#B65330` | CTA principal, botón “Reservar” |
| terracotta-hover | `#9C4426` | Hover del CTA |
| sand | `#D9CAB7` | Muestra de color |
| warm-brown | `#8E6240` | Muestra de color |
| roble | `#8E4A2C` | Barra de nav del preview “Cabaña Roble” |
| paragraph | `#626A76` | Párrafos |
| line | `#E3DED2` | Bordes y separadores |
| line-soft | `#EDE8DD` | Borde inferior de la franja de beneficios |
| status-dot | `#3E9A5B` | Punto de “Producto en desarrollo” |
| rule | `#8A9188` | Líneas cortas de las notas |

Colores del dashboard: teal `#2E7F74` (reserva), llegada `#D3DECB` (punto `#5E8A5C`), salida `#EADFD1` (punto `#8A6A4A`, texto `#3F3428`), mantenimiento `#CF6A45`, KPI ocupación `#9DB59C`, KPI salidas `#D7704C`, texto secundario `#6B7178` / `#8A8F96`, bordes `#ECE8DE` / `#E4DFD3`, cabecera de tabla `#F6F4EE`.

### Tipografía
- **Titulares:** DM Serif Display 400 (Google Fonts).
- **UI y párrafos:** Inter 400/500/600.
- Hero h1: `min(6vw, 80px)`, line-height 0.98, letter-spacing -0.025em, sin salto automático (`white-space: nowrap`). En móvil: `clamp(44px, 12.5vw, 64px)`.
- h2 de sección: `clamp(38px, 5vw, 68px)`, lh 1.02, ls -0.02em. Personalización: `clamp(34px, 3.5vw, 50px)`. “De la idea”: `clamp(36px, 4vw, 56px)`. Cierre: `clamp(30px, 3vw, 42px)`.
- h3 de tarjetas y pasos: 21–27px serif, lh 1.15–1.2.
- Eyebrow: Inter 12px 500, letter-spacing 0.32em, mayúsculas, color forest.
- Párrafos: 15–19px, lh 1.5, color paragraph.
- Notas con línea: 13–14px, línea de 24–30 × 1px color rule, gap 16px.

### Espaciado y layout
- Contenedor: max-width 1240px (hero y header: 1320px), padding horizontal `clamp(20px, 4vw, 52px)`.
- Padding vertical de sección: `clamp(56px, 6vw, 88px)`.
- Radios: botones 6–8px, píldora 999px, tarjetas 6px, dashboard 12px, círculos 50%.
- Sombras: dashboard `0 30px 60px -20px rgba(9,37,36,.35), 0 8px 20px -8px rgba(9,37,36,.18)`; CTA `0 10px 24px -12px rgba(182,83,48,.8)`; teléfono `0 30px 50px -20px rgba(9,37,36,.55)`.

---

## Screens / Sections (orden de la página)

### A. Header
Absoluto sobre el hero (no fijo). Flex con space-between y gap de 24px.
- Logo (ave + “bosvia”) de 40–58px de alto. Enlace a `#top`.
- Nav: “El proyecto” → `#producto`, “Experiencia” → `#experiencia`, “Desarrollo” → `#desarrollo`. Inter 14px; en hover, borde inferior terracota.
- Píldora: punto verde de 8px + “Producto en desarrollo”, fondo `rgba(217,223,205,.85)`, 13px.
- Botón delineado: “Volver al portafolio →”, borde 1.5px ink, radio 8px, padding 11×20. En hover, fondo ink y texto ivory.
- **Por debajo de 1080px:** logo + botón de menú (46×46) que abre un panel con los enlaces en serif 26px, el estado y el botón al portafolio. Al pulsar un enlace, el panel se cierra.

### B. Hero
- Altura `clamp(660px, 50vw, 820px)`.
- La foto (glamping con domo al amanecer) ocupa desde el 38% hasta el borde derecho, `object-fit: cover`, anclada arriba.
- Encima, una forma marfil con curva orgánica (SVG, viewBox 1000×700, `preserveAspectRatio=none`): `M0 0 H570 C480 24 432 112 424 236 L418 452 C410 588 300 640 168 700 H0 Z`.
- Hojas decorativas abajo a la izquierda, de 150–230px.
- Bloque de texto: top 24%, width 40%, max 520px. h1 “La naturaleza / inspira. / Bosvia organiza.” (la última línea en moss). Descripción de máximo 34ch. CTA terracota “Explorar el proyecto →” (padding 16×26) → `#producto`. Enlace subrayado “Ver cómo funcionará →” → `#flujo`. Nota con línea: “SaaS para glampings, ecohoteles y pequeños alojamientos.”
- Dashboard: absoluto en top 34%, left 45%, right 0, con la etiqueta “Vista conceptual”.
- **Móvil:** texto arriba, después la foto a 360px de alto con radio superior izquierdo de 140px, y el dashboard superpuesto (margin-top -170px).

### C. Franja de beneficios
Grid `repeat(auto-fit, minmax(260px,1fr))`, separadores verticales de 1px en `#E3DED2` (se quitan por debajo de 860px). Cada columna: círculo sage de 76px con icono lineal de 32px (stroke 1.4) + h3 serif de 21–25px + descripción de 15px.
1. Reservas conectadas: “Disponibilidad y estadías en un mismo lugar.”
2. Operación coordinada: “Llegadas, salidas y tareas del equipo.”
3. Identidad propia: “Una experiencia alineada con cada alojamiento.”

### D. Una experiencia conectada (`#experiencia`)
Eyebrow + h2 “Del primer clic a una / estadía bien organizada.”
- Grid: ≥1100px `1.75fr 1fr`; por debajo, una sola columna.
- **Mockup:** lienzo de diseño de 860×560 escalado al ancho de la columna (escala máxima 1.1).
  - Laptop: 720px de ancho, bisel `#1D2423`, pantalla de 470px de alto. Contiene: nav “Bosque Alto” (Inicio, Alojamientos, Experiencias, Galería, Contacto, botón Reservar); hero fotográfico de 170px con “Bosque Alto / Naturaleza que se vive”; barra de reserva (Llegada 3 oct 2026 → Salida 5 oct 2026 · Huéspedes 2 personas · botón terracota “Elegir alojamiento”); 3 tarjetas: Domo Niebla desde $320.000 / noche, Cabaña Roble desde $480.000, Domo Luna desde $360.000. Base de la laptop de 768×16.
  - Teléfono: 210×420, left 590, top 104, radio 32. Contiene: Bosque Alto + menú; foto; “Cabaña Roble”; 4 huéspedes · 2 camas · 1 baño · Vista al bosque; fechas; huéspedes; botón “Reservar”.
- **Pasos (`#flujo`):** lista ordenada con línea vertical de 1px `#D3D8C7` a la izquierda (31px) y círculos sage de 62px con el número en serif de 22px.
  - 01 Descubrir y reservar: “El huésped consulta alojamientos y fechas.”
  - 02 Preparar la llegada: “El equipo organiza la reserva y la bienvenida.”
  - 03 Acompañar la estadía: “Operación y seguimiento desde el mismo lugar.”
  - Nota: “Flujo previsto del producto.”

### E. El producto por dentro (`#producto`)
Eyebrow + h2 “Una vista clara de lo que pasa / en tu alojamiento.” + descripción.
- Grid: ≥1100px `2.3fr 1fr`; por debajo, una sola columna (los módulos se apilan bajo el dashboard).
- La lista de módulos tiene borde izquierdo de 1px y padding-left de 36px (solo en desktop). Cada módulo: círculo de 60px `#E3E6DA` con icono + h3 serif de 21px + descripción de 15px. Módulos: Calendario y reservas, Huéspedes y estadías, Operación diaria, Pagos y reportes.
- En móvil, el dashboard tiene escala mínima 0.6 y scroll horizontal, con la nota “Desliza para ver el calendario completo.”

### Componente: Dashboard (`BosviaDashboard`)
Lienzo de diseño de 1000px de ancho, escalado al contenedor. Prop `label` (“Vista conceptual” / “Diseño conceptual”) y prop `minScale`.
- **Sidebar** de 172px, forest, logo claro de 34px. Navegación de 12.5px en `#DCE5DD`, con el ítem activo en `rgba(255,255,255,.1)`: Inicio, Calendario, Reservas, Alojamientos, Huéspedes, Operación, Pagos, Reportes, Ajustes.
- **Topbar:** selector de propiedad (“Bosque Alto” / Propiedad); “Sábado, 3 octubre 2026”; avatar “LJ” + Laura; botón “+ Nueva reserva”.
- **Saludo:** “Buen día, Laura” en serif de 27px; debajo, “Así va la operación de Bosque Alto hoy.”
- **KPIs** (4 columnas): Ocupación 7 de 10 (barra al 70%) · Llegadas 3 (hoy · sáb 3 oct) · Salidas 2 · Por cobrar $840.000 (3 reservas pendientes).
- **Calendario:** “Disponibilidad y reservas”, leyenda (Reservada, Llegada, Salida, Mantenimiento) y navegación “3 – 9 octubre 2026”. Grid `170px repeat(7,1fr)` con filas de 48px. Columnas: Sáb 3 … Vie 9. Los bloques ocupan columnas mediante `grid-column`:
  - Domo Niebla: Ana Torres 3–5 oct (llegada, cols 2/4); Carlos Mejía 5–8 oct (teal, 4/7).
  - Cabaña Roble: María López 2–4 oct (teal, 2/4); Diego Ramírez 6–9 oct (salida, 6/9).
  - Domo Luna: Sofía Vargas 6–8 oct (teal, 5/7).
  - Finca Río: Mantenimiento 5–6 oct (terracota, 4/6); Juan Pablo Silva 8–10 oct (teal, 7/9).
  - Las celdas vacías muestran “—” en `#C9C5BB`.
- Etiqueta inferior derecha con `label`.
- En el código final conviene definir los bloques con datos tipados (`{alojamiento, huesped, inicio, fin, tipo}`) y calcular las columnas a partir de las fechas.

### F. Personalización
Fondo sage-bg. Grid ≥900px `0.85fr 1.15fr`.
- Izquierda: h2 “Tu alojamiento tiene / personalidad. / Su experiencia digital / también.”; descripción; 5 muestras de 44px: `#103C34`, `#9DB094`, `#D9CAB7`, `#B65330`, `#8E6240`.
- Derecha: lienzo de 780×380 escalado.
  - “Domo Niebla”: 420px, `rotate(-1.5deg)`, delante, nav forest.
  - “Cabaña Roble”: 400px, left 370, top 34, `rotate(2.5deg)`, detrás, nav `#8E4A2C`.
  - Estructura común de los dos sitios: nav, hero fotográfico con título serif + subtítulo + botón “Ver disponibilidad →”, y una fila de 4 amenidades.

### G. De la idea al producto (`#desarrollo`)
- Foto de montañas arriba a la derecha (36% de ancho, 460px de alto) recortada con `clipPath` en `objectBoundingBox`: `M1 0 V1 C0.93 0.86 0.82 0.7 0.62 0.62 C0.4 0.54 0.12 0.6 0.03 0.45 C-0.04 0.3 0.12 0.08 0.36 0.02 C0.6 -0.03 0.8 0.01 1 0 Z`. En móvil, la foto va dentro del flujo con radio `120px 0 120px 0`.
- Texto con max-width del 64%: eyebrow, h2 y descripción.
- 3 tarjetas en grid `auto-fit minmax(270px,1fr)`, gap 18. Cada tarjeta: borde 1px, radio 6, padding 28×26, fondo `rgba(251,250,246,.94)`. Contenido: Visión de producto, Diseño de experiencia, Desarrollo progresivo.
- Nota: “Estado actual: definición y diseño del producto.”

### H. Cierre y footer
Fondo forest. La foto panorámica ocupa el 70% derecho (100% en móvil). Overlay `linear-gradient(90deg, #103C34 0%, #103C34 32%, rgba(16,60,52,.55) 62%, rgba(16,60,52,.25) 100%)`.
- Logo claro + h2 “Construyendo una forma más simple / de gestionar la hospitalidad.” + “Conoce mi trabajo y el proceso detrás de Bosvia.”
- Botones: “Ver mi portafolio →” (fondo ivory, texto forest; en hover, sage) y “Contactar al creador” (delineado ivory).
- Footer: línea superior de 1px `rgba(248,245,238,.22)`; logo pequeño de 34px; “Reservas y operación en naturaleza.”; a la derecha, “Proyecto en desarrollo · 2026”.

---

## Interactions & Behavior
- **Scroll suave** a anclas (`scroll-behavior: smooth`, desactivado con `prefers-reduced-motion`).
- **URLs configurables:** `PORTFOLIO_URL` y `CONTACT_URL` (en el prototipo, `#` y `mailto:hola@ejemplo.com`). Ponerlas en un archivo de configuración.
- **Animación de entrada:** los elementos `[data-reveal]` que están fuera de pantalla empiezan con opacity 0 y translateY(18px). Al entrar en el viewport (IntersectionObserver, threshold 0.12) pasan a opacity 1 y transform none en 0.8s con `cubic-bezier(.2,.7,.2,1)`. Se omite con movimiento reducido.
- **Hover/focus:** botones con transición de 0.2s; el CTA sube 1px. Todos los enlaces y botones llevan `outline: 2px solid` (terracota, o ink/ivory según el fondo) con offset de 3–4px en focus.
- **Escalado de mockups:** los mockups se diseñan a un ancho fijo y se escalan con `transform: scale(w/base)`, con un contenedor que reserva la altura escalada (ver `fit.js`). En Next.js se puede resolver con un hook `useFitScale(ref, baseWidth, {min, max})` basado en ResizeObserver, o con CSS container queries + `zoom`.
- **Breakpoints:** <860px quita los separadores de beneficios; <900px cambia personalización a una columna; <1080px muestra el header y el hero móviles; <1100px pone experiencia y producto en una columna.

## State Management
Solo estado de UI: `menuOpen` (menú móvil). No hay backend; todos los datos del dashboard y de los mockups son de demostración y estáticos.

## Accessibility
- Mockups con `role="img"` y `aria-label` descriptivo. Fotos decorativas con `alt=""`; fotos de contenido con alt en español.
- `aria-expanded` y `aria-controls` en el botón del menú.
- Las muestras de color incluyen el nombre en texto oculto.
- Los pasos usan `<ol>` y los módulos `<ul>`.

## Assets
Las fotos y el logo de `assets/` son **recortes de baja resolución de las imágenes de referencia**. Reemplazarlos por los originales en alta resolución:
- `logo-light-t.png` (logo sobre fondo claro) y `logo-dark-t.png` (logo sobre fondo oscuro). **Usar el SVG original del logo** (ave + “bosvia”) cuando esté disponible.
- `hero-v5.png`: glamping con domo al amanecer (la zona central está difuminada porque la cubre el dashboard; conviene usar una foto limpia).
- `p-laptop.png`, `p-cabana.png`, `p-domo.png`, `p-mont.png`, `panorama.png`, `card-domo.png`, `card-cabana.png`, `card-luna.png`, `phone-cabana.png`: fotografías.
- `leaves-t.png`: hojas decorativas.
- Iconos: trazos estilo Lucide (calendar, users, leaf, square-check, bar-chart, palette, settings, home, credit-card, log-in, log-out, dollar-sign, tree-pine, mountain, arrow-right). Se recomienda `lucide-react` con stroke 1.4–1.8.

## Files
- `Bosvia Landing.dc.html`: la página completa (template + lógica).
- `Bosvia Dashboard.dc.html`: el componente de dashboard, reutilizado en el hero y en el producto.
- `fit.js`: el script de escalado de mockups.
- `assets/`: imágenes.
- `reference/`: las dos imágenes originales de dirección visual.

Para abrir el prototipo, sirve la carpeta con un servidor estático y abre `Bosvia Landing.dc.html` (necesita `support.js` en la misma carpeta).

### Estructura sugerida en Next.js
```
app/page.tsx
components/{SiteHeader,Hero,Benefits,ConnectedExperience,ProductInside,Personalization,FromIdea,ClosingFooter}.tsx
components/mockups/{Dashboard,LaptopSite,PhoneBooking,PropertyPreview}.tsx
components/ui/{Button,Eyebrow,IconCircle,NoteLine,Logo}.tsx
lib/content.ts   // textos, módulos, pasos, datos demo del calendario
lib/config.ts    // PORTFOLIO_URL, CONTACT_URL
hooks/useFitScale.ts
```
