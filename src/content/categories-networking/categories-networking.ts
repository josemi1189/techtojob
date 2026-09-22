import { CategoriesVM } from "@/types";

export const CategoriesNetworking: CategoriesVM = {
  es: {
    sectionTitle: "Networking",
    sectionSubtitle: "Las mejores oportunidades no se publican, se comparten.",
    categories: [
      {
        id: "comunidad",
        title: "COMUNIDAD Y CONEXIÓN",
        description:
          "El punto de encuentro principal para conocernos y compartir novedades de la industria.",
        icon: "🚀",
        channels: [
          { name: "#general", description: "Conversaciones generales" },
          { name: "#networking", description: "Haz contactos" },
          { name: "#off-topic", description: "Charlas distendidas" },
        ],
      },
      {
        id: "desarrollo",
        title: "DESARROLLO Y TECNOLOGÍA",
        description:
          "El núcleo técnico. Debates, dudas y colaboración en software y sistemas.",
        icon: "💻",
        channels: [
          { name: "#desarrollo", description: "Dudas de código" },
          { name: "#datos-e-ia", description: "IA, Data Science" },
          { name: "#infraestructura-y-devops", description: "Cloud, CI/CD" },
        ],
      },
      {
        id: "especialidades",
        title: "ESPECIALIDADES IT",
        description:
          "Seguridad, gestión de productos, diseño y resolución de incidencias.",
        icon: "🛡️",
        channels: [
          { name: "#ciberseguridad", description: "Hacking ético, defensa" },
          { name: "#producto-y-diseño", description: "UX/UI, Metodologías" },
          { name: "#soporte-it", description: "Ayuda técnica" },
        ],
      },
      {
        id: "recursos",
        title: "RECURSOS Y OPORTUNIDADES",
        description:
          "Empleo, foros de debate, herramientas y crecimiento profesional.",
        icon: "🧭",
        channels: [
          { name: "#empleo", description: "Ofertas laborales" },
          { name: "#foro", description: "Debates estructurados" },
          { name: "#comandos", description: "Bot interaction, guías" },
        ],
      },
    ],
  },
  en: {
    sectionTitle: "Networking",
    sectionSubtitle: "The best opportunities aren't posted, they're shared.",
    categories: [
      {
        id: "comunidad",
        title: "COMMUNITY & CONNECTION",
        description:
          "The main meeting point to get to know each other and share industry news.",
        icon: "🚀",
        channels: [
          { name: "#general", description: "General conversations" },
          { name: "#networking", description: "Make connections" },
          { name: "#off-topic", description: "Casual chats" },
        ],
      },
      {
        id: "desarrollo",
        title: "DEVELOPMENT & TECH",
        description:
          "The technical core. Debates, questions, and collaboration on software and systems.",
        icon: "💻",
        channels: [
          { name: "#desarrollo", description: "Code questions" },
          { name: "#datos-e-ia", description: "AI, Data Science" },
          { name: "#infraestructura-y-devops", description: "Cloud, CI/CD" },
        ],
      },
      {
        id: "especialidades",
        title: "IT SPECIALTIES",
        description:
          "Security, product management, design, and incident troubleshooting.",
        icon: "🛡️",
        channels: [
          { name: "#ciberseguridad", description: "Ethical hacking, defense" },
          { name: "#producto-y-diseño", description: "UX/UI, Methodologies" },
          { name: "#soporte-it", description: "Technical support" },
        ],
      },
      {
        id: "recursos",
        title: "RESOURCES & OPPORTUNITIES",
        description: "Jobs, discussion forums, tools, and professional growth.",
        icon: "🧭",
        channels: [
          { name: "#empleo", description: "Job offers" },
          { name: "#foro", description: "Structured debates" },
          { name: "#comandos", description: "Bot interaction, guides" },
        ],
      },
    ],
  },
};
