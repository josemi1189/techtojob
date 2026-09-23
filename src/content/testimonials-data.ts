import { Testimonial } from "@/types/testimonials.vm";

export const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Laura Gómez",
    socialLink: "https://linkedin.com/in/lauragomez-dev",
    platform: "linkedin",
    es: {
      role: "Backend & Cloud Engineer",
      testimonial:
        "Gracias a los debates en los canales de voz y las revisiones de código en comunidad, conseguí dar el salto a un puesto remoto en DevOps.",
    },
    en: {
      role: "Backend & Cloud Engineer",
      testimonial:
        "Thanks to the voice channel debates and community code reviews, I successfully made the jump to a remote DevOps role.",
    },
  },
  {
    id: 2,
    name: "Carlos Mendoza",
    socialLink:
      "https://discord.com/channels/123456789012345678/987654321098765432/112233445566778899",
    platform: "discord",
    es: {
      role: "AI Research Enthusiast",
      testimonial:
        "El servidor de Discord es el mejor sitio para estar al día con agentes autónomos y LLMs. El nivel técnico de la comunidad es brutal.",
    },
    en: {
      role: "AI Research Enthusiast",
      testimonial:
        "The Discord server is the best place to stay up to date with autonomous agents and LLMs. The technical level of the community is outstanding.",
    },
  },
  {
    id: 3,
    name: "Sofía Valenzuela",
    socialLink: "https://x.com/DevCommunity_es/status/1834567890123456789",
    platform: "X",
    es: {
      role: "Senior Frontend Developer",
      testimonial:
        "Participar en los retos semanales y compartir feedback en el canal de proyectos me ha ayudado a mentorizar a otros y seguir creciendo.",
    },
    en: {
      role: "Senior Frontend Developer",
      testimonial:
        "Participating in the weekly challenges and sharing feedback in the projects channel has helped me mentor others and keep growing.",
    },
  },
  {
    id: 4,
    name: "Alejandro Ruiz",
    socialLink: "https://www.instagram.com/p/C9XyZ1vA2b_/",
    platform: "instagram",
    es: {
      role: "Cybersecurity Analyst",
      testimonial:
        "Encontré mi actual empleo gracias a la sección de ofertas exclusivas del servidor. La red de contactos que se crea aquí no tiene precio.",
    },
    en: {
      role: "Cybersecurity Analyst",
      testimonial:
        "I found my current job thanks to the server's exclusive job board section. The networking here is priceless.",
    },
  },
  {
    id: 5,
    name: "Lucía Fernández",
    socialLink:
      "https://www.techtutoriales.dev/opiniones/comunidad-desarrolladores-2026",
    platform: "other",
    es: {
      role: "Fullstack Junior Developer",
      testimonial:
        "Entré sin saber por dónde empezar en mi transición a tech y el apoyo de los canales de ayuda mutua cambió por completo mi rumbo.",
    },
    en: {
      role: "Fullstack Junior Developer",
      testimonial:
        "I joined not knowing where to start my transition into tech, and the support from the mutual aid channels completely changed my path.",
    },
  },
];
