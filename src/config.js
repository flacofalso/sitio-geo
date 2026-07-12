// ============================================================
// CONFIGURACIÓN CENTRAL DE ENTIDAD
// ------------------------------------------------------------
// Principio GEO: la descripción de tu marca debe ser IDÉNTICA
// en todo el sitio, el schema, llms.txt, LinkedIn y directorios.
// Edita este archivo y todo el sitio se actualiza.
// ============================================================

export const SITE = {
  // Cambia por tu dominio real antes de desplegar
  url: 'https://tudominio.cl',

  // Nombre de la marca / consultor (entidad principal)
  brand: 'Ale — Consultoría SEO & GEO',

  // Descripción canónica de entidad (usar SIEMPRE esta misma frase)
  description:
    'Consultoría de SEO y visibilidad en motores de IA (GEO) para pymes chilenas. Auditorías técnicas, contenido optimizado para citación y medición mensual de Share of Voice en ChatGPT, Claude, Gemini y Perplexity.',

  locale: 'es_CL',
  language: 'es',

  author: {
    name: 'Ale',                       // ← nombre completo real
    jobTitle: 'Consultor SEO & GEO',
    // Credenciales verificables: E-E-A-T. Completa con datos reales.
    description:
      'Especialista en marketing digital y desarrollo web con experiencia en SEO técnico, WordPress y estrategia de contenidos para pymes en Chile.',
    sameAs: [
      // Perfiles públicos que verifican la entidad. Completa:
      'https://www.linkedin.com/in/TU-PERFIL',
      // 'https://github.com/TU-USUARIO',
    ],
  },

  organization: {
    name: 'Ale — Consultoría SEO & GEO',
    areaServed: 'Chile',
    addressLocality: 'Santiago',
    addressRegion: 'Región Metropolitana',
    addressCountry: 'CL',
    email: 'hola@tudominio.cl',
  },
};
