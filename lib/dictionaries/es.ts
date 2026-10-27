import type { EstadoReserva, IconName, PanelNavKey, PriorityKind } from "@/lib/content";

type ActivityKind = "done" | "mail" | "clock";
type ChargeIcon = "bed" | "flame";

export const es = {
  lang: "es",
  meta: {
    title: "Bosvia · Reservas y operación en naturaleza",
    description:
      "Bosvia es una plataforma en construcción para conectar reservas, huéspedes y operación en glampings, ecohoteles y pequeños alojamientos.",
  },
  ui: {
    logoAlt: "bosvia",
    emblemAlt: "Emblema del creador",
  },

  header: {
    homeLabel: "Bosvia, inicio",
    navLabel: "Principal",
    links: ["El proyecto", "Experiencia", "Desarrollo"],
    status: "Producto en desarrollo",
    statusNote: "Emprendimiento propio",
    portfolio: "Volver al portafolio",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    languageLabel: "Idioma",
    languages: { es: "Español", en: "English" },
  },

  hero: {
    titleLines: ["La naturaleza", "inspira."],
    titleAccent: "Bosvia organiza.",
    description:
      "Una plataforma en construcción para conectar reservas, huéspedes y operación en alojamientos de naturaleza.",
    primaryCta: "Explorar el proyecto",
    secondaryCta: "Ver cómo funcionará",
    note: "SaaS para glampings, ecohoteles y pequeños alojamientos.",
    imageAlt: "Glamping con domo entre montañas colombianas al amanecer",
  },

  benefits: {
    label: "Beneficios",
    items: [
      { icon: "calendar", title: "Reservas conectadas", text: "Disponibilidad y estadías en un mismo lugar." },
      { icon: "users", title: "Operación coordinada", text: "Llegadas, salidas y tareas del equipo." },
      { icon: "leaf", title: "Identidad propia", text: "Una experiencia alineada con cada alojamiento." },
    ] as { icon: IconName; title: string; text: string }[],
  },

  experience: {
    eyebrow: "UNA EXPERIENCIA CONECTADA",
    title: ["Del primer clic a una", "estadía bien organizada."],
    mockupLabel: "Laptop y teléfono mostrando el sitio de reservas de Bosque Alto",
    steps: [
      { n: "01", title: "Descubrir y reservar", text: "El huésped consulta alojamientos y fechas." },
      { n: "02", title: "Preparar la llegada", text: "El equipo organiza la reserva y la bienvenida." },
      { n: "03", title: "Acompañar la estadía", text: "Operación y seguimiento desde el mismo lugar." },
    ],
    note: "Flujo previsto del producto.",
  },

  site: {
    name: "Bosque Alto",
    tagline: "Naturaleza que se vive",
    nav: ["Inicio", "Alojamientos", "Experiencias", "Galería", "Contacto"],
    book: "Reservar",
    chooseLodging: "Elegir alojamiento",
    arrival: "Llegada",
    departure: "Salida",
    guests: "Huéspedes",
    arrivalDate: "3 oct 2026",
    departureDate: "5 oct 2026",
    guestsValue: "2 personas",
    cards: [
      { name: "Domo Niebla", price: "Desde $320.000 / noche" },
      { name: "Cabaña Roble", price: "Desde $480.000 / noche" },
      { name: "Domo Luna", price: "Desde $360.000 / noche" },
    ],
    phone: { name: "Cabaña Roble", features: ["4 huéspedes", "2 camas · 1 baño", "Vista al bosque"] },
  },

  product: {
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
  },

  personalization: {
    title: ["Tu alojamiento tiene", "personalidad.", "Su experiencia digital", "también."],
    description: "La personalización visual forma parte de la visión de Bosvia.",
    paletteLabel: "Paleta de ejemplo",
    swatchNames: ["Verde bosque", "Salvia", "Arena", "Terracota", "Marrón cálido"],
    mockupLabel:
      "Dos sitios de alojamiento con identidades distintas: Domo Niebla en verde bosque y Cabaña Roble en terracota",
  },

  fromIdea: {
    eyebrow: "DE LA IDEA AL PRODUCTO",
    title: ["Un proyecto que conecta", "diseño, tecnología y naturaleza."],
    description:
      "Bosvia nace de mi interés por crear software útil y experiencias cuidadas para negocios vinculados con la naturaleza.",
    mountainsAlt: "Montañas al atardecer",
    cards: [
      { icon: "leaf", title: "Visión de producto", text: "Definir el problema, los usuarios y los flujos." },
      { icon: "palette", title: "Diseño de experiencia", text: "Construir una identidad y una interfaz coherentes." },
      { icon: "settings", title: "Desarrollo progresivo", text: "Convertir la propuesta en un producto funcional." },
    ] as { icon: IconName; title: string; text: string }[],
    note: "Estado actual: definición y diseño del producto.",
  },

  closing: {
    title: ["Construyendo una forma más simple", "de gestionar la hospitalidad."],
    text: "Conoce mi trabajo y el proceso detrás de Bosvia.",
    portfolioCta: "Ver mi portafolio",
    contactCta: "Contactar al creador",
    footerTagline: "Reservas y operación en naturaleza.",
    footerStatus: "Proyecto en desarrollo · 2026",
  },

  panel: {
    ariaLabel:
      "Vista conceptual del panel operativo de Bosque Alto: indicadores del día, calendario de reservas, prioridades, reservas recientes y ventas directas",
    nav: {
      home: "Inicio",
      calendar: "Calendario",
      bookings: "Reservas",
      lodgings: "Alojamientos",
      guests: "Huéspedes",
      operations: "Operación",
      payments: "Pagos",
      reports: "Reportes",
      settings: "Ajustes",
    } as Record<PanelNavKey, string>,
    property: "Propiedad",
    propertyName: "Bosque Alto",
    today: "Sábado, 3 octubre 2026",
    user: "Laura",
    newBooking: "Nueva reserva",
    greeting: "Buen día, Laura",
    subtitle: "Así va la operación de Bosque Alto hoy.",
    kpis: {
      occupancy: { title: "Ocupación", value: "7 de 10" },
      arrivals: { title: "Llegadas", value: "3", sub: "hoy · sáb 3 oct" },
      departures: { title: "Salidas", value: "2", sub: "hoy · sáb 3 oct" },
      pending: { title: "Por cobrar", value: "$840.000", sub: "3 reservas pendientes" },
    },
    calendar: {
      title: "Disponibilidad y reservas",
      legend: { reserved: "Reservada", arrival: "Llegada", departure: "Salida", maintenance: "Mantenimiento" },
      weekLabel: "3 – 9 octubre 2026",
      lodging: "Alojamiento",
      days: ["Sáb", "Dom", "Lun", "Mar", "Mié", "Jue", "Vie"],
      month: "oct",
      range: "{from} – {to} oct",
      maintenance: "Mantenimiento",
      people: "{n} personas",
    },
    priorities: {
      title: "Prioridades de hoy",
      items: [
        { kind: "checkin", title: "Check-in", place: "Domo Niebla", time: "15:00", detail: ["Ana Torres", "2 huéspedes"] },
        { kind: "checkin", title: "Check-in", place: "Finca Río", time: "16:00", detail: ["Valentina Ruiz", "4 huéspedes"] },
        { kind: "checkout", title: "Check-out", place: "Cabaña Roble", time: "11:00", detail: ["María López", "4 huéspedes"] },
        { kind: "limpieza", title: "Limpieza", place: "Domo Luna", time: "11:30", detail: ["Después de check-out"] },
        { kind: "pago", title: "Pago pendiente", place: "", time: "12:00", detail: ["Diego Ramírez · Cabaña Roble", "$320.000"] },
      ] as { kind: PriorityKind; title: string; place: string; time: string; detail: string[] }[],
    },
    bookings: {
      title: "Reservas recientes",
      viewAll: "Ver todas",
      heads: ["Fecha", "Huésped", "Alojamiento", "Fechas", "Fuente", "Estado", "Total", ""],
      statuses: {
        confirmed: "Confirmada",
        toCollect: "Por cobrar",
        inProgress: "En curso",
        completed: "Completada",
      } as Record<EstadoReserva, string>,
      rows: [
        { date: "2 oct 2026", guest: "Camila Soto", lodging: "Domo Luna", dates: "5 – 7 oct", source: "Web propia", status: "confirmed", total: "$480.000" },
        { date: "1 oct 2026", guest: "Diego Ramírez", lodging: "Cabaña Roble", dates: "6 – 9 oct", source: "WhatsApp", status: "toCollect", total: "$320.000" },
        { date: "30 sep 2026", guest: "Juan Pablo Silva", lodging: "Finca Río", dates: "7 – 9 oct", source: "Airbnb", status: "confirmed", total: "$760.000" },
        { date: "28 sep 2026", guest: "Ana Torres", lodging: "Domo Niebla", dates: "3 – 5 oct", source: "Web propia", status: "inProgress", total: "$640.000" },
        { date: "27 sep 2026", guest: "María López", lodging: "Cabaña Roble", dates: "2 – 4 oct", source: "WhatsApp", status: "completed", total: "$480.000" },
      ] as {
        date: string;
        guest: string;
        lodging: string;
        dates: string;
        source: string;
        status: EstadoReserva;
        total: string;
      }[],
    },
    sales: {
      title: "Ventas directas",
      period: "Últimas 6 semanas",
      ticks: ["$4M", "$3M", "$2M", "$1M", "$0"],
      weeks: [
        { label: "24 ago", range: "– 30 ago" },
        { label: "31 ago", range: "– 6 sep" },
        { label: "7 sep", range: "– 13 sep" },
        { label: "14 sep", range: "– 20 sep" },
        { label: "21 sep", range: "– 27 sep" },
        { label: "28 sep", range: "– 3 oct" },
      ],
      legend: { direct: "Web propia", whatsapp: "WhatsApp" },
    },
  },

  reservation: {
    ariaLabel:
      "Vista conceptual del detalle de una reserva en Bosvia: huésped, alojamiento, servicios y cargos, resumen de pago y actividad reciente",
    conceptLabel: "Diseño conceptual",
    property: "Propiedad",
    propertyName: "Bosque Alto",
    today: "Miércoles, 14 octubre 2026",
    user: "Laura",
    newBooking: "Nueva reserva",
    breadcrumb: "Reservas",
    code: "RSV-0248",
    title: "Detalle de reserva",
    status: "Confirmada",
    created: "Creada el 12 oct 2026",
    source: "Web propia",
    edit: "Editar reserva",
    registerPayment: "Registrar pago",
    tabs: ["Resumen", "Pagos", "Comunicación", "Historial"],
    stay: {
      arrival: "Llegada",
      arrivalDate: "16 oct 2026",
      arrivalTime: "15:00",
      departure: "Salida",
      departureDate: "18 oct 2026",
      departureTime: "11:00",
      label: "Estadía",
      summary: "2 noches · 2 adultos",
    },
    guest: {
      title: "Huésped principal",
      initials: "AT",
      name: "Ana Torres",
      tag: "Cliente recurrente",
      email: "ana.torres@example.com",
      phone: "+57 300 555 0182",
      history: "2 reservas anteriores",
      contact: "Contactar",
    },
    lodging: {
      title: "Alojamiento",
      name: "Domo Niebla",
      capacity: "2 personas · Cama queen",
      included: "Desayuno incluido",
      view: "Ver alojamiento",
    },
    charges: {
      title: "Servicios y cargos",
      heads: { concept: "Concepto", qty: "Cantidad", unit: "Valor unitario", subtotal: "Subtotal" },
      rows: [
        { icon: "bed", name: "Domo Niebla", detail: "16 – 18 oct", kind: "Alojamiento", qty: "2 noches", unit: "$320.000", subtotal: "$640.000" },
        { icon: "flame", name: "Fogata privada", detail: "", kind: "Experiencia adicional", qty: "1", unit: "$90.000", subtotal: "$90.000" },
      ] as { icon: ChargeIcon; name: string; detail: string; kind: string; qty: string; unit: string; subtotal: string }[],
      add: "Agregar servicio",
      taxes: "Impuestos incluidos",
      totalLabel: "Total de la reserva",
      total: "$730.000",
      currency: "COP",
    },
    notes: {
      title: "Notas de la estadía",
      tag: "Nota interna",
      text: "Celebran su aniversario. Preparar bienvenida y confirmar horario de la fogata.",
    },
    checklist: {
      title: "Preparación de llegada",
      items: [
        { done: true, title: "Confirmación enviada", who: "", when: "12 oct · 10:45" },
        { done: false, title: "Preparar alojamiento", who: "Asignado a: Equipo de limpieza", when: "15 oct" },
        { done: false, title: "Coordinar fogata", who: "Asignado a: Laura", when: "15 oct" },
      ],
    },
    payment: {
      title: "Resumen de pago",
      badge: "Saldo pendiente",
      toCollect: "Por cobrar",
      pending: "$365.000",
      pct: 50,
      total: "Total",
      totalValue: "$730.000",
      paid: "Pagado",
      paidValue: "$365.000",
      pendingLabel: "Pendiente",
      advance: { title: "Anticipo recibido", date: "12 oct", method: "Transferencia bancaria", amount: "$365.000" },
      link: "Enviar enlace de pago",
    },
    activity: {
      title: "Actividad reciente",
      viewAll: "Ver historial completo",
      items: [
        { kind: "done", title: "Reserva confirmada", extra: "", meta: "12 oct 2026 · 10:42", side: "Web propia" },
        { kind: "done", title: "Anticipo registrado", extra: "$365.000 · Laura", meta: "12 oct 2026 · 10:43", side: "Transferencia bancaria" },
        { kind: "mail", title: "Correo de confirmación enviado", extra: "", meta: "12 oct 2026 · 10:45", side: "Web propia" },
        { kind: "clock", title: "Recordatorio programado", extra: "", meta: "15 oct 2026 · 09:00", side: "Sistema" },
      ] as { kind: ActivityKind; title: string; extra: string; meta: string; side: string }[],
    },
    communication: {
      title: "Comunicación con el huésped",
      email: "Enviar correo",
      whatsapp: "Enviar WhatsApp",
      last: "Último mensaje:",
      lastValue: "hace 2 horas",
    },
  },
};

export type Dictionary = typeof es;
