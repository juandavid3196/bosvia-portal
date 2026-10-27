/* Datos de demostración del detalle de reserva. */

export const reservation = {
  code: "RSV-0248",
  status: "Confirmada",
  created: "Creada el 12 oct 2026",
  source: "Web propia",
  today: "Miércoles, 14 octubre 2026",
  tabs: ["Resumen", "Pagos", "Comunicación", "Historial"],
  stay: {
    arrival: { date: "16 oct 2026", time: "15:00" },
    departure: { date: "18 oct 2026", time: "11:00" },
    summary: "2 noches · 2 adultos",
  },
  guest: {
    initials: "AT",
    name: "Ana Torres",
    tag: "Cliente recurrente",
    email: "ana.torres@example.com",
    phone: "+57 300 555 0182",
    history: "2 reservas anteriores",
  },
  lodging: {
    name: "Domo Niebla",
    capacity: "2 personas · Cama queen",
    included: "Desayuno incluido",
    img: "/assets/card-domo.png",
  },
  charges: {
    rows: [
      { icon: "bed", name: "Domo Niebla", detail: "16 – 18 oct", kind: "Alojamiento", qty: "2 noches", unit: "$320.000", subtotal: "$640.000" },
      { icon: "flame", name: "Fogata privada", detail: "", kind: "Experiencia adicional", qty: "1", unit: "$90.000", subtotal: "$90.000" },
    ],
    total: "$730.000",
  },
  notes: "Celebran su aniversario. Preparar bienvenida y confirmar horario de la fogata.",
  checklist: [
    { done: true, title: "Confirmación enviada", who: "", when: "12 oct · 10:45" },
    { done: false, title: "Preparar alojamiento", who: "Asignado a: Equipo de limpieza", when: "15 oct" },
    { done: false, title: "Coordinar fogata", who: "Asignado a: Laura", when: "15 oct" },
  ],
  payment: {
    pending: "$365.000",
    pct: 50,
    total: "$730.000",
    paid: "$365.000",
    advance: { title: "Anticipo recibido", date: "12 oct", method: "Transferencia bancaria", amount: "$365.000" },
  },
  activity: [
    { kind: "done", title: "Reserva confirmada", meta: "12 oct 2026 · 10:42", side: "Web propia" },
    { kind: "done", title: "Anticipo registrado", extra: "$365.000 · Laura", meta: "12 oct 2026 · 10:43", side: "Transferencia bancaria" },
    { kind: "mail", title: "Correo de confirmación enviado", meta: "12 oct 2026 · 10:45", side: "Web propia" },
    { kind: "clock", title: "Recordatorio programado", meta: "15 oct 2026 · 09:00", side: "Sistema" },
  ] as { kind: "done" | "mail" | "clock"; title: string; extra?: string; meta: string; side: string }[],
};
