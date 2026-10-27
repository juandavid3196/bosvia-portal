/*
 * Datos que no dependen del idioma: tipos, imágenes, cifras y fechas de demostración.
 * Todos los textos viven en lib/dictionaries/{es,en}.ts.
 */

export type IconName =
  | "calendar"
  | "users"
  | "leaf"
  | "square-check"
  | "bar-chart"
  | "palette"
  | "settings";

export const navAnchors = ["#producto", "#experiencia", "#desarrollo"] as const;

/* ---------- Mockups del sitio de reservas ---------- */

export const propertySiteCardImages = ["/assets/card-domo.png", "/assets/card-cabana.png", "/assets/card-luna.png"];

export const personalizationSwatches = ["#103C34", "#9DB094", "#D9CAB7", "#B65330", "#8E6240"];

export const personalizationSites = {
  niebla: { img: "/assets/site-niebla.png", width: 1457, height: 1079 },
  roble: { img: "/assets/site-roble.png", width: 1457, height: 1080 },
};

/* ---------- Panel operativo (datos de demostración) ---------- */

export type ReservaTipo = "reservada" | "llegada" | "salida" | "mantenimiento";

export interface Bloque {
  alojamiento: string;
  /** Vacío en mantenimiento: el texto sale del diccionario. */
  huesped: string;
  /** Día de octubre 2026 */
  inicio: number;
  fin: number;
  tipo: ReservaTipo;
  /** Líneas de grid (inicio / fin) fijadas por el diseño; si se omiten se calculan de las fechas. */
  cols?: [number, number];
}

/** Siete días desde el sábado 3 de octubre de 2026. */
export const dashboardWeek = {
  firstDay: 3,
  days: [3, 4, 5, 6, 7, 8, 9],
};

export const panelNavKeys = [
  "home",
  "calendar",
  "bookings",
  "lodgings",
  "guests",
  "operations",
  "payments",
  "reports",
  "settings",
] as const;
export type PanelNavKey = (typeof panelNavKeys)[number];

export const dashboardProperties = [
  { name: "Domo Niebla", capacity: 2, img: "/assets/card-domo.png" },
  { name: "Cabaña Roble", capacity: 4, img: "/assets/card-cabana.png" },
  { name: "Domo Luna", capacity: 2, img: "/assets/card-luna.png" },
  { name: "Finca Río", capacity: 6, img: "/assets/p-cabana.png" },
];

export const dashboardBlocks: Bloque[] = [
  { alojamiento: "Domo Niebla", huesped: "Ana Torres", inicio: 3, fin: 5, tipo: "llegada" },
  { alojamiento: "Domo Niebla", huesped: "Carlos Mejía", inicio: 5, fin: 8, tipo: "reservada" },
  { alojamiento: "Cabaña Roble", huesped: "María López", inicio: 2, fin: 4, tipo: "reservada", cols: [2, 4] },
  { alojamiento: "Cabaña Roble", huesped: "Diego Ramírez", inicio: 6, fin: 9, tipo: "salida", cols: [6, 9] },
  { alojamiento: "Domo Luna", huesped: "Sofía Vargas", inicio: 5, fin: 7, tipo: "reservada", cols: [5, 7] },
  { alojamiento: "Finca Río", huesped: "", inicio: 4, fin: 5, tipo: "mantenimiento", cols: [4, 6] },
  { alojamiento: "Finca Río", huesped: "Juan Pablo Silva", inicio: 7, fin: 9, tipo: "reservada", cols: [7, 9] },
];

export const occupancyPct = 70;

export type PriorityKind = "checkin" | "checkout" | "limpieza" | "pago";
export type EstadoReserva = "confirmed" | "toCollect" | "inProgress" | "completed";

/** Ventas directas por semana, en millones de pesos. */
export const directSales = {
  max: 4,
  values: [1.4, 1.75, 2.3, 2.15, 2.6, 3.4],
};
