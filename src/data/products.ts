export interface Product {
  id: "app" | "web";
  name: string;
  audience: string;
  description: string;
  features: string[];
  href: string;
  cta: string;
}

/**
 * URLs de acceso a cada producto.
 * Se pueden sobreescribir sin tocar código con las variables de entorno
 * PUBLIC_LUMEN_APP_URL y PUBLIC_LUMEN_WEB_URL (ver .env.example).
 */
export const productUrls = {
  app: import.meta.env.PUBLIC_LUMEN_APP_URL || "https://app.lumen-soft.app",
  web: import.meta.env.PUBLIC_LUMEN_WEB_URL || "https://panel.lumen-soft.app",
} as const;

export const products: Product[] = [
  {
    id: "app",
    name: "Lumen App",
    audience: "Para tutores",
    description:
      "Todo el cuidado de tu mascota en el bolsillo: turnos, vacunas, historia clínica y recordatorios.",
    features: [
      "Ficha de cada mascota",
      "Turnos y recordatorios",
      "Historia clínica compartida",
      "Contacto directo con la clínica",
    ],
    href: productUrls.app,
    cta: "Abrir Lumen App",
  },
  {
    id: "web",
    name: "Lumen Web",
    audience: "Para clínicas",
    description:
      "El CRM que ordena la operación diaria y conecta a tu equipo con cada tutor.",
    features: [
      "Agenda y turnos",
      "Pacientes e historia clínica",
      "Tutores y comunicación",
      "Inventario, especialistas y reportes",
    ],
    href: productUrls.web,
    cta: "Abrir Lumen Web",
  },
];
