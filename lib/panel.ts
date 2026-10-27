/* Datos de demostración del panel operativo del hero. */

export type PriorityKind = "checkin" | "checkout" | "limpieza" | "pago";

export const priorities: { kind: PriorityKind; title: string; place: string; time: string; detail: string }[] = [
  { kind: "checkin", title: "Check-in", place: "Domo Niebla", time: "15:00", detail: "Ana Torres\n2 huéspedes" },
  { kind: "checkin", title: "Check-in", place: "Finca Río", time: "16:00", detail: "Valentina Ruiz\n4 huéspedes" },
  { kind: "checkout", title: "Check-out", place: "Cabaña Roble", time: "11:00", detail: "María López\n4 huéspedes" },
  { kind: "limpieza", title: "Limpieza", place: "Domo Luna", time: "11:30", detail: "Después de check-out" },
  { kind: "pago", title: "Pago pendiente", place: "", time: "12:00", detail: "Diego Ramírez · Cabaña Roble\n$320.000" },
];

export type EstadoReserva = "Confirmada" | "Por cobrar" | "En curso" | "Completada";

export const recentBookings: {
  fecha: string;
  huesped: string;
  alojamiento: string;
  fechas: string;
  fuente: string;
  estado: EstadoReserva;
  total: string;
}[] = [
  { fecha: "2 oct 2026", huesped: "Camila Soto", alojamiento: "Domo Luna", fechas: "5 – 7 oct", fuente: "Web propia", estado: "Confirmada", total: "$480.000" },
  { fecha: "1 oct 2026", huesped: "Diego Ramírez", alojamiento: "Cabaña Roble", fechas: "6 – 9 oct", fuente: "WhatsApp", estado: "Por cobrar", total: "$320.000" },
  { fecha: "30 sep 2026", huesped: "Juan Pablo Silva", alojamiento: "Finca Río", fechas: "7 – 9 oct", fuente: "Airbnb", estado: "Confirmada", total: "$760.000" },
  { fecha: "28 sep 2026", huesped: "Ana Torres", alojamiento: "Domo Niebla", fechas: "3 – 5 oct", fuente: "Web propia", estado: "En curso", total: "$640.000" },
  { fecha: "27 sep 2026", huesped: "María López", alojamiento: "Cabaña Roble", fechas: "2 – 4 oct", fuente: "WhatsApp", estado: "Completada", total: "$480.000" },
];

/** Ventas directas por semana, en millones de pesos. */
export const directSales = {
  max: 4,
  weeks: [
    { label: "24 ago", range: "– 30 ago", value: 1.4 },
    { label: "31 ago", range: "– 6 sep", value: 1.75 },
    { label: "7 sep", range: "– 13 sep", value: 2.3 },
    { label: "14 sep", range: "– 20 sep", value: 2.15 },
    { label: "21 sep", range: "– 27 sep", value: 2.6 },
    { label: "28 sep", range: "– 3 oct", value: 3.4 },
  ],
};
