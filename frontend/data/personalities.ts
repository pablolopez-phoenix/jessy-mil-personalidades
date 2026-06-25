export interface Personality {
  id: number;
  year: string;
  title: string;
  image: string;
  alt: string;
  description: string;
  quote: string;
  /** Tailwind-friendly accent token used for badges and highlights */
  accent: "red" | "yellow" | "green" | "pink";
  /** Short label used for the dossier / gallery captions */
  tag: string;
}

export const personalities: Personality[] = [
  {
    id: 1,
    year: "2020",
    title: "Jessy, la cajera del Oxxo",
    image: "/images/jessy-oxxo.png",
    alt: "Jessy en su etapa como cajera del Oxxo",
    tag: "Comercio esencial",
    accent: "red",
    description:
      "Antes de convertirse en leyenda, Jessy vivió una etapa profundamente comercial: trabajó como cajera del Oxxo. Dicen que tenía una habilidad única para cobrar recargas, acomodar promociones y mirar al cliente con la autoridad suficiente como para hacerle entender, sin levantar la voz, que la segunda caja no iba a abrir. Fue una época de disciplina, terminal lenta y respuestas contundentes. Muchos salieron de ahí con un café, un chicle y una experiencia inolvidable.",
    quote: "La segunda caja está cerrada, joven.",
  },
  {
    id: 2,
    year: "2021",
    title: "Jessy y su etapa de celebridad",
    image: "/images/jessy-celebridad.png",
    alt: "Jessy durante su etapa de celebridad",
    tag: "Alta sociedad",
    accent: "yellow",
    description:
      "Hubo una temporada en la que Jessy dejó atrás la vida común y comenzó a frecuentar ambientes más exclusivos. Entre reuniones, fotos y apariciones memorables, empezó a construirse la teoría de que ya no era solo Jessy, sino una figura con conexiones de alto nivel en el mundo del espectáculo. Nadie sabe exactamente cómo llegó ahí. Algunos dicen que fue carisma. Otros, destino. Lo cierto es que desde entonces quedó claro que Jessy no conoce límites.",
    quote: "Uno es sencillo, pero también exclusivo.",
  },
  {
    id: 3,
    year: "2022",
    title: "Jessy, enfermera del IMSS",
    image: "/images/jessy-imss.png",
    alt: "Jessy como enfermera del IMSS",
    tag: "Sector salud",
    accent: "green",
    description:
      "Meses después, Jessy fue vista ejerciendo en el sector salud, específicamente como enfermera del IMSS. Su uniforme impecable y su expresión de absoluta experiencia inspiraban confianza… aunque también dejaban entrever que quizá el desayuno, el chisme y la pausa administrativa eran parte esencial del servicio. Se ganó el respeto del área por su presencia, su temple y su capacidad de atenderlo todo… después de terminar lo verdaderamente urgente.",
    quote: "Ahorita te atiendo, reina, nomás déjame acabar esto.",
  },
  {
    id: 8,
    year: "2022",
    title: "Jessy, la reina de los tamales de La Merced",
    image: "/images/jessy-tamales.png",
    alt: "Jessy vendiendo tamales en el mercado de La Merced",
    tag: "La tamalera",
    accent: "red",
    description:
      "En 2022, Jessy vivió una etapa profundamente tradicional y deliciosa: se dedicó a vender tamales en el mercado de La Merced. Entre canastas, vaporeras y el bullicio del mercado, se ganó la fama de atender con carisma, paciencia y una convicción absoluta de que siempre había un tamal perfecto para cada cliente. Dicen que dominaba el arte de recomendar rajas, pollo, verdes o dulces según el estado emocional de la persona. Su puesto no solo alimentaba el cuerpo, también levantaba el ánimo y dejaba claro que Jessy podía triunfar incluso entre pasillos, abarrotes y antojos mañaneros.",
    quote: "Llévele, llévele… que se acaban los de rajas.",
  },
  {
    id: 4,
    year: "2023",
    title: "Jessy, empresaria del Tupperware",
    image: "/images/jessy-tupperware.png",
    alt: "Jessy como empresaria del Tupperware",
    tag: "Emprendimiento",
    accent: "pink",
    description:
      "En el verano siguiente, Jessy descubrió su verdadero talento para las ventas y emprendió como distribuidora de Tupperware. Con una mezcla de carisma, estrategia y presión emocional perfectamente calculada, logró convencer a más de una persona de que su vida no estaba completa sin un recipiente hermético color morado. Su lema era simple: si organiza, conserva y está bonito, entonces lo necesitas.",
    quote: "Lleva más, paga menos, comadre.",
  },
  {
    id: 5,
    year: "2024",
    title: "Jessy, chola de respeto",
    image: "/images/jessy-chola.png",
    alt: "Jessy en su etapa de chola de respeto",
    tag: "Cultura de barrio",
    accent: "red",
    description:
      "Cuando todos creían haberlo visto todo, Jessy entró en una nueva etapa: la del barrio, el porte y la presencia. Con paliacate, actitud y mirada de autoridad moral, dejó claro que no hacía falta hablar fuerte cuando el respeto llega solo. Fue una era breve, pero intensa. Una etapa en la que Jessy no pedía atención: la imponía.",
    quote: "Yo no ando peleando… pero tampoco ando explicando.",
  },
  {
    id: 6,
    year: "2025",
    title: "Jessy, amiga del Dr. Simi",
    image: "/images/jessy-dr-simi.png",
    alt: "Jessy junto al Dr. Simi",
    tag: "Reconocimiento nacional",
    accent: "green",
    description:
      "Finalmente, una de las pruebas más contundentes de su impacto social fue documentada cuando apareció junto al Dr. Simi. Desde ese momento surgieron dos teorías: o Jessy alcanzó reconocimiento nacional, o ya era parte del sistema de salud alternativo más querido del país. Lo único seguro es que se trató de una colaboración histórica, probablemente médica, probablemente emocional, seguramente inolvidable.",
    quote: "Sí hay foto, así que sí pasó.",
  },
  {
    id: 7,
    year: "2026",
    title: "Jessy, la reclusa de noble corazón",
    image: "/images/jessy-prision.png",
    alt: "Jessy en su etapa como reclusa de noble corazón",
    tag: "La reclusa",
    accent: "yellow",
    description:
      "En 2026, Jessy vivió una de sus etapas más intensas. Después de ver demasiado Prison Break y Orange Is the New Black, se convenció de que su destino era ingresar a prisión para salvar a una amiga. Con uniforme color caqui, lágrima de aparente experiencia y el tatuaje “la vida es bella” como declaración filosófica, Jessy demostró que incluso tras las rejas podía mantener la frente en alto, el drama encendido y la lealtad intacta. Algunos dicen que fue una misión secreta. Otros aseguran que simplemente se metió demasiado en el papel. Lo único cierto es que convirtió una celda en otro capítulo histórico de su leyenda.",
    quote: "Entré por una amiga… y salí siendo leyenda.",
  },
];

export interface Testimonial {
  quote: string;
  author: string;
  accent: "red" | "yellow" | "green" | "pink";
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Yo la vi en el Oxxo y sí me dijo que la segunda caja estaba cerrada. Desde ahí supe que estaba frente a alguien grande.",
    author: "Cliente anónimo",
    accent: "red",
  },
  {
    quote:
      "A mí me ofreció Tupperware y terminé comprando tres recipientes que ni necesitaba. Gran poder de convencimiento.",
    author: "Compañera de oficina",
    accent: "pink",
  },
  {
    quote:
      "En el IMSS tenía cara de que sí resolvía, pero también de que primero iba a desayunar.",
    author: "Fuente reservada",
    accent: "green",
  },
  {
    quote:
      "No sé quién era la celebridad de la foto. Yo solo sé que Jessy salió igual o mejor.",
    author: "Testigo ocular",
    accent: "yellow",
  },
];

export const dossierFacts: { label: string; value: string; flag?: boolean }[] = [
  { label: "Nombre clave", value: "Jessy" },
  { label: "Nivel de versatilidad", value: "Crítico", flag: true },
  { label: "Profesiones detectadas", value: "Múltiples" },
  { label: "Riesgo de nueva transformación", value: "Alto", flag: true },
  { label: "Estado actual", value: "Bajo observación" },
];

export const accentMap: Record<
  string,
  { bg: string; text: string; border: string; soft: string }
> = {
  red: {
    bg: "bg-accentred",
    text: "text-accentred",
    border: "border-accentred",
    soft: "bg-accentred/10",
  },
  yellow: {
    bg: "bg-accentyellow",
    text: "text-accentyellow",
    border: "border-accentyellow",
    soft: "bg-accentyellow/15",
  },
  green: {
    bg: "bg-accentgreen",
    text: "text-accentgreen",
    border: "border-accentgreen",
    soft: "bg-accentgreen/10",
  },
  pink: {
    bg: "bg-accentpink",
    text: "text-accentpink",
    border: "border-accentpink",
    soft: "bg-accentpink/15",
  },
};

export const FORMSPREE_ENDPOINT = "https://formspree.io/f/REEMPLAZAR_ID";
