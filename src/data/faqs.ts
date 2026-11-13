export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: "¿Lumen es una app o un CRM?",
    answer:
      "Las dos cosas. Lumen App está pensada para tutores y Lumen Web es el CRM para clínicas veterinarias. Ambos comparten la misma historia clínica, así que la información viaja con cada mascota.",
  },
  {
    question: "¿Cómo abro Lumen App?",
    answer:
      "Desde los botones de esta página. Lumen App está pensada para iOS y Android; si todavía no está publicada en tu tienda, escribinos y te avisamos en cuanto esté disponible.",
  },
  {
    question: "¿Cómo empieza mi clínica a usar Lumen Web?",
    answer:
      "Ingresá a Lumen Web o escribinos a sanfelipe@gmail.com. Coordinamos una demo, configuramos la cuenta del equipo y migramos la información que ya tenés.",
  },
  {
    question: "¿La información se comparte entre la app y el CRM?",
    answer:
      "Sí. Cuando la clínica registra una consulta, una vacuna o un turno en Lumen Web, el tutor lo ve en Lumen App. Los recordatorios y las indicaciones también se sincronizan.",
  },
  {
    question: "¿Qué módulos incluye Lumen Web?",
    answer:
      "Agenda y turnos, pacientes e historia clínica, tutores, especialistas, inventario y tratamientos, y reportes de gestión. Todo en un mismo panel para todo el equipo.",
  },
  {
    question: "¿Cómo protegen los datos de las mascotas y las familias?",
    answer:
      "El acceso está separado por roles: cada persona ve solo lo que necesita. La información viaja cifrada y se respalda de forma periódica en la nube.",
  },
];
