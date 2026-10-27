export type IconName =
  | "calendar"
  | "users"
  | "leaf"
  | "square-check"
  | "bar-chart"
  | "palette"
  | "settings";

export const navLinks = [
  { label: "El proyecto", href: "#producto" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Desarrollo", href: "#desarrollo" },
] as const;

export const hero = {
  titleLines: ["La naturaleza", "inspira."],
  titleAccent: "Bosvia organiza.",
  description:
    "Una plataforma en construcción para conectar reservas, huéspedes y operación en alojamientos de naturaleza.",
  primaryCta: "Explorar el proyecto",
  secondaryCta: "Ver cómo funcionará",
  note: "SaaS para glampings, ecohoteles y pequeños alojamientos.",
  imageAlt: "Glamping con domo entre montañas colombianas al amanecer",
};

export const benefits: { icon: IconName; title: string; text: string }[] = [
  { icon: "calendar", title: "Reservas conectadas", text: "Disponibilidad y estadías en un mismo lugar." },
  { icon: "users", title: "Operación coordinada", text: "Llegadas, salidas y tareas del equipo." },
  { icon: "leaf", title: "Identidad propia", text: "Una experiencia alineada con cada alojamiento." },
];

export const experience = {
  eyebrow: "UNA EXPERIENCIA CONECTADA",
  title: ["Del primer clic a una", "estadía bien organizada."],
  mockupLabel: "Laptop y teléfono mostrando el sitio de reservas de Bosque Alto",
  steps: [
    { n: "01", title: "Descubrir y reservar", text: "El huésped consulta alojamientos y fechas." },
    { n: "02", title: "Preparar la llegada", text: "El equipo organiza la reserva y la bienvenida." },
    { n: "03", title: "Acompañar la estadía", text: "Operación y seguimiento desde el mismo lugar." },
  ],
  note: "Flujo previsto del producto.",
};

export const propertySite = {
  name: "Bosque Alto",
  tagline: "Naturaleza que se vive",
  nav: ["Inicio", "Alojamientos", "Experiencias", "Galería", "Contacto"],
  arrival: "3 oct 2026",
  departure: "5 oct 2026",
  guests: "2 personas",
  cards: [
    { name: "Domo Niebla", price: "Desde $320.000 / noche", img: "/assets/card-domo.png" },
    { name: "Cabaña Roble", price: "Desde $480.000 / noche", img: "/assets/card-cabana.png" },
    { name: "Domo Luna", price: "Desde $360.000 / noche", img: "/assets/card-luna.png" },
  ],
  phone: { name: "Cabaña Roble", features: ["4 huéspedes", "2 camas · 1 baño", "Vista al bosque"] },
};

export const product = {
  eyebrow: "EL PRODUCTO POR DENTRO",
  title: ["Una vista clara de lo que pasa", "en tu alojamiento."],
  description: "Módulos previstos para conectar la experiencia del huésped con el trabajo del equipo.",
  scrollHint: "Desliza para ver el detalle completo.",
  modules: [
    { icon: "calendar", title: "Calendario y reservas", text: "Disponibilidad y estadías organizadas." },
    { icon: "users", title: "Huéspedes y estadías", text: "Información para acompañar cada visita." },
    { icon: "square-check", title: "Operación diaria", text: "Llegadas, salidas y tareas del equipo." },
    { icon: "bar-chart", title: "Pagos y reportes", text: "Seguimiento de cobros y actividad." },
  ] as { icon: IconName; title: string; text: string }[],
};

export const personalization = {
  title: ["Tu alojamiento tiene", "personalidad.", "Su experiencia digital", "también."],
  description: "La personalización visual forma parte de la visión de Bosvia.",
  swatches: [
    { name: "Verde bosque", color: "#103C34" },
    { name: "Salvia", color: "#9DB094" },
    { name: "Arena", color: "#D9CAB7" },
    { name: "Terracota", color: "#B65330" },
    { name: "Marrón cálido", color: "#8E6240" },
  ],
  mockupLabel:
    "Dos sitios de alojamiento con identidades distintas: Domo Niebla en verde bosque y Cabaña Roble en terracota",
  sites: {
    niebla: {
      name: "Domo Niebla",
      lines: ["Naturaleza, comodidad", "y momentos inolvidables."],
      amenities: ["Hasta 2 personas", "Cama queen", "Vista a la montaña", "Wi-Fi"],
      icons: ["leaf", "bed", "mountain", "wifi"],
    },
    roble: {
      name: "Cabaña Roble",
      lines: ["Un refugio entre árboles", "para desconectar."],
      amenities: ["Hasta 4 personas", "Cocina equipada", "Terraza privada", "Wi-Fi"],
      icons: ["leaf", "utensils", "armchair", "wifi"],
    },
    nav: ["Inicio", "Alojamiento", "Experiencias", "Contacto"],
    cta: "Ver disponibilidad →",
  },
};

export const fromIdea = {
  eyebrow: "DE LA IDEA AL PRODUCTO",
  title: ["Un proyecto que conecta", "diseño, tecnología y naturaleza."],
  description:
    "Bosvia nace de mi interés por crear software útil y experiencias cuidadas para negocios vinculados con la naturaleza.",
  cards: [
    { icon: "leaf", title: "Visión de producto", text: "Definir el problema, los usuarios y los flujos." },
    { icon: "palette", title: "Diseño de experiencia", text: "Construir una identidad y una interfaz coherentes." },
    { icon: "settings", title: "Desarrollo progresivo", text: "Convertir la propuesta en un producto funcional." },
  ] as { icon: IconName; title: string; text: string }[],
  note: "Estado actual: definición y diseño del producto.",
};

export const closing = {
  title: ["Construyendo una forma más simple", "de gestionar la hospitalidad."],
  text: "Conoce mi trabajo y el proceso detrás de Bosvia.",
  portfolioCta: "Ver mi portafolio",
  contactCta: "Contactar al creador",
  footerTagline: "Reservas y operación en naturaleza.",
  footerStatus: "Proyecto en desarrollo · 2026",
};

/* ---------- Dashboard (datos de demostración) ---------- */

export type ReservaTipo = "reservada" | "llegada" | "salida" | "mantenimiento";

export interface Bloque {
  alojamiento: string;
  huesped: string;
  /** Día de octubre 2026 */
  inicio: number;
  fin: number;
  tipo: ReservaTipo;
  /** Líneas de grid (inicio / fin) fijadas por el diseño; si se omiten se calculan de las fechas. */
  cols?: [number, number];
}

export const dashboardWeek = {
  firstDay: 3,
  label: "3 – 9 octubre 2026",
  days: [
    { name: "Sáb", n: 3 },
    { name: "Dom", n: 4 },
    { name: "Lun", n: 5 },
    { name: "Mar", n: 6 },
    { name: "Mié", n: 7 },
    { name: "Jue", n: 8 },
    { name: "Vie", n: 9 },
  ],
};

export const dashboardProperties = [
  { name: "Domo Niebla", cap: "2 personas", img: "/assets/card-domo.png" },
  { name: "Cabaña Roble", cap: "4 personas", img: "/assets/card-cabana.png" },
  { name: "Domo Luna", cap: "2 personas", img: "/assets/card-luna.png" },
  { name: "Finca Río", cap: "6 personas", img: "/assets/p-cabana.png" },
];

export const dashboardBlocks: Bloque[] = [
  { alojamiento: "Domo Niebla", huesped: "Ana Torres", inicio: 3, fin: 5, tipo: "llegada" },
  { alojamiento: "Domo Niebla", huesped: "Carlos Mejía", inicio: 5, fin: 8, tipo: "reservada" },
  { alojamiento: "Cabaña Roble", huesped: "María López", inicio: 2, fin: 4, tipo: "reservada", cols: [2, 4] },
  { alojamiento: "Cabaña Roble", huesped: "Diego Ramírez", inicio: 6, fin: 9, tipo: "salida", cols: [6, 9] },
  { alojamiento: "Domo Luna", huesped: "Sofía Vargas", inicio: 5, fin: 7, tipo: "reservada", cols: [5, 7] },
  { alojamiento: "Finca Río", huesped: "Mantenimiento", inicio: 4, fin: 5, tipo: "mantenimiento", cols: [4, 6] },
  { alojamiento: "Finca Río", huesped: "Juan Pablo Silva", inicio: 7, fin: 9, tipo: "reservada", cols: [7, 9] },
];

export const dashboardNav = [
  "Inicio",
  "Calendario",
  "Reservas",
  "Alojamientos",
  "Huéspedes",
  "Operación",
  "Pagos",
  "Reportes",
  "Ajustes",
] as const;

export const dashboardKpis = {
  occupancy: { value: "7 de 10", pct: 70 },
  arrivals: { value: "3", sub: "hoy · sáb 3 oct" },
  departures: { value: "2", sub: "hoy · sáb 3 oct" },
  pending: { value: "$840.000", sub: "3 reservas pendientes" },
};
