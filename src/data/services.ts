export interface Service {
  id: string;
  icon: "stethoscope" | "shield-check" | "syringe" | "scissors";
  title: string;
  badge: string;
  description: string;
  features: string[];
  accent: string;
  badgeTone: string;
}

export const services: Service[] = [
  {
    id: "consultas",
    icon: "stethoscope",
    title: "Consultas médicas",
    badge: "Más elegido",
    description:
      "Evaluaciones clínicas exhaustivas con profesionales altamente capacitados para un diagnóstico preciso y oportuno.",
    features: [
      "Revisión integral y preventiva",
      "Diagnóstico temprano",
      "Seguimiento digital de cada paciente",
    ],
    accent: "from-teal-50 to-teal-100 text-teal-700",
    badgeTone: "bg-teal-100 text-teal-800",
  },
  {
    id: "cirugia",
    icon: "shield-check",
    title: "Cirugía y laboratorio",
    badge: "Alta complejidad",
    description:
      "Procedimientos quirúrgicos seguros y análisis clínicos de alta precisión con tecnología de punta.",
    features: [
      "Protocolos quirúrgicos seguros",
      "Análisis clínicos de precisión",
      "Acompañamiento pre y post operatorio",
    ],
    accent: "from-ink-50 to-ink-100 text-ink-700",
    badgeTone: "bg-ink-100 text-ink-800",
  },
  {
    id: "vacunacion",
    icon: "syringe",
    title: "Vacunación y prevención",
    badge: "Esencial",
    description:
      "Planes de inmunización completos y medidas profilácticas para la protección continua de la salud.",
    features: [
      "Calendario de vacunas personalizado",
      "Recordatorios automáticos",
      "Prevención de enfermedades",
    ],
    accent: "from-brand-50 to-brand-100 text-brand-700",
    badgeTone: "bg-brand-100 text-brand-800",
  },
  {
    id: "estetica",
    icon: "scissors",
    title: "Estética especializada",
    badge: "Nuevo",
    description:
      "Cuidado de imagen y tratamientos estéticos minuciosos adaptados a cada requerimiento específico.",
    features: [
      "Baño y peluquería profesional",
      "Cuidado de piel y pelaje",
      "Turnos cómodos y sin esperas",
    ],
    accent: "from-teal-50 to-teal-100 text-teal-700",
    badgeTone: "bg-teal-100 text-teal-800",
  },
];
