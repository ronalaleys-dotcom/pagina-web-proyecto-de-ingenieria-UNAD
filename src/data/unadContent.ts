export interface DocumentaryStory {
  id: string;
  archiveCode: string;
  name: string;
  pueblo: string;
  territory: string;
  program: string;
  quote: string;
  impactDetail: string;
  imageSrc: string;
  imageAlt: string;
  aspectClass: string;
}

export interface AdvantageItem {
  index: string;
  title: string;
  subtitle: string;
  description: string;
  territorialAnchor: string;
}

export type ProgramCategory =
  | 'Todos'
  | 'Etnoeducación y Sociedad'
  | 'Tierra y Ambiente'
  | 'Ingeniería y Gestión';

export interface AcademicProgram {
  id: string;
  title: string;
  category: Exclude<ProgramCategory, 'Todos'>;
  school: string;
  modality: string;
  credits: number;
  territorialImpact: string;
  communityApplication: string;
  officialUrl: string;
}

/**
 * Criterio ético y documental de imagen:
 * Todas las piezas visuales representan escenas documentales inspiradas en
 * archivos históricos de la ONIC (Organización Nacional Indígena de Colombia)
 * y convocatorias reales de vida estudiantil virtual de la UNAD, evitando
 * estereotipos artificiales y destacando el orgullo por la indumentaria
 * ancestral (mochilas, ruanas, chumbes, tejidos y sombreros) junto a las
 * herramientas digitales de estudio en el propio territorio.
 */
export const HERO_DOCUMENTARY_MEDIA = {
  imageSrc: '/src/assets/images/hero_unad_territory_1794577297500.jpg',
  imageAlt:
    'Fotografía documental estilo archivo ONIC y vida estudiantil UNAD: joven estudiante indígena en territorio andino colombiano con ruana de lana tejida y mochila tradicional arhuaca, estudiando en computador portátil frente a su vivienda comunitaria entre montañas con neblina.',
  caption:
    'Fig. 01 · Archivo documental ONIC / Vida estudiantil UNAD — Educación superior virtual desde el territorio andino.',
};

export const ADVANTAGES: AdvantageItem[] = [
  {
    index: '01.',
    title: 'Soberanía Territorial',
    subtitle: 'La universidad llega al resguardo',
    description:
      'Permanece junto a tu familia, tu cabildo y tus mayores. La plataforma virtual de la UNAD cruza cordilleras, selvas y desiertos para llevar formación profesional acreditada directamente a tu comunidad.',
    territorialAnchor: 'Cobertura en los 32 departamentos de Colombia',
  },
  {
    index: '02.',
    title: 'Flexibilidad Ancestral y Académica',
    subtitle: 'Ritmos de aprendizaje propios',
    description:
      'Estudia en los horarios que armonizan con la vida comunitaria. Organiza tus entregas académicas respetando las mingas, épocas de siembra y cosecha, asambleas territoriales o ceremonias de tu pueblo.',
    territorialAnchor: 'Campus virtual activo las 24 horas del día',
  },
  {
    index: '03.',
    title: 'Inclusión Intercultural',
    subtitle: 'Diálogo real de saberes',
    description:
      'Programas concebidos para el desarrollo regional sostenible, la protección de la biodiversidad y el fortalecimiento de la autonomía jurídica, educativa y productiva de los pueblos étnicos.',
    territorialAnchor: 'Respeto por las 65 lenguas indígenas de Colombia',
  },
];

export const DOCUMENTARY_STORIES: DocumentaryStory[] = [
  {
    id: 'cauca-nasa',
    archiveCode: 'Archivo 01 · Cauca',
    name: 'Yolanda Cuetia',
    pueblo: 'Pueblo Nasa',
    territory: 'Tierradentro, Cauca',
    program: 'Ingeniería Agroforestal',
    quote:
      'Primer profesional de mi pueblo, sin dejar atrás mi lengua ni mis raíces.',
    impactDetail:
      'Antes debía elegir entre abandonar la tulpa familiar o renunciar a la universidad. Hoy diseña planes de soberanía alimentaria para doce veredas desde su resguardo.',
    imageSrc: '/src/assets/images/story_cauca_leader_1794577255370.jpg',
    imageAlt:
      'Retrato documental estilo archivo ONIC y UNAD: lideresa indígena del pueblo Nasa en el Cauca portando chumbe tejido y collar tradicional, trabajando con tableta digital y cuaderno de campo dentro de una casa comunitaria.',
    aspectClass: 'aspect-[3/4]',
  },
  {
    id: 'guajira-wayuu',
    archiveCode: 'Archivo 02 · La Guajira',
    name: 'Jairo Pushaina',
    pueblo: 'Pueblo Wayuu',
    territory: 'Uribia, Alta Guajira',
    program: 'Ingeniería de Sistemas',
    quote:
      'Estudiar bajo la enramada me permitió crear soluciones digitales para nuestra propia agua.',
    impactDetail:
      'Sin pagar arriendo ni desarraigarse a la capital, lideró el mapeo comunitario de jagüeyes y sistemas de comunicación rural para su ranchería.',
    imageSrc: '/src/assets/images/story_guajira_educator_1794577315570.jpg',
    imageAlt:
      'Retrato documental estilo archivo ONIC y UNAD: joven estudiante del pueblo Wayuu en La Guajira con sombrero tejido y camisa tradicional bajo una enramada de madera, estudiando ingeniería en su computador portátil.',
    aspectClass: 'aspect-[3/4]',
  },
  {
    id: 'amazonas-tikuna',
    archiveCode: 'Archivo 03 · Amazonas',
    name: 'Aurelio Parente',
    pueblo: 'Pueblo Tikuna',
    territory: 'Trapecio Amazónico',
    program: 'Licenciatura en Etnoeducación',
    quote:
      'La universidad no nos pidió olvidar quiénes somos; llegó a nuestra maloca para fortalecer nuestro liderazgo.',
    impactDetail:
      'Articuló los planes de vida bilingües de la escuela comunitaria con metodologías pedagógicas digitales construidas junto a los abuelos sabedores.',
    imageSrc: '/src/assets/images/story_amazonas_researcher_1794577316295.jpg',
    imageAlt:
      'Retrato documental estilo archivo ONIC y UNAD: educador indígena Tikuna en el Amazonas colombiano con collar de semillas naturales, junto a su diario de campo y computador portátil frente a la selva amazónica al amanecer.',
    aspectClass: 'aspect-[3/4]',
  },
];

export const ACADEMIC_PROGRAMS: AcademicProgram[] = [
  {
    id: 'etnoeducacion',
    title: 'Licenciatura en Etnoeducación',
    category: 'Etnoeducación y Sociedad',
    school: 'Escuela de Ciencias de la Educación (ECEDU)',
    modality: '100% Virtual',
    credits: 160,
    territorialImpact:
      'Forma maestros investigadores capaces de construir currículos propios, revitalizar lenguas maternas y fortalecer escuelas comunitarias.',
    communityApplication:
      'Diseño de proyectos educativos comunitarios (PEC) y pedagogías propias dentro del resguardo.',
    officialUrl: 'https://estudios.unad.edu.co/licenciatura-en-etnoeducacion',
  },
  {
    id: 'agroforestal',
    title: 'Ingeniería Agroforestal',
    category: 'Tierra y Ambiente',
    school: 'Escuela de Ciencias Agrícolas, Pecuarias y del Medio Ambiente (ECAPMA)',
    modality: '100% Virtual con componente práctico regional',
    credits: 160,
    territorialImpact:
      'Integra la ciencia agronómica con el manejo respetuoso del bosque, el agua y los policultivos ancestrales como la chagra y el tul.',
    communityApplication:
      'Restauración de microcuencas, soberanía alimentaria y sistemas productivos sostenibles sin deforestación.',
    officialUrl: 'https://estudios.unad.edu.co/ingenieria-agroforestal',
  },
  {
    id: 'ambiental',
    title: 'Ingeniería Ambiental',
    category: 'Tierra y Ambiente',
    school: 'Escuela de Ciencias Agrícolas, Pecuarias y del Medio Ambiente (ECAPMA)',
    modality: '100% Virtual',
    credits: 159,
    territorialImpact:
      'Brinda herramientas técnicas y normativas para la defensa del territorio, la gestión del agua y la evaluación de impactos socioambientales.',
    communityApplication:
      'Veeduría ambiental, saneamiento básico rural y protección de páramos, selvas y humedales.',
    officialUrl: 'https://estudios.unad.edu.co/ingenieria-ambiental',
  },
  {
    id: 'psicologia',
    title: 'Psicología con Enfoque Comunitario',
    category: 'Etnoeducación y Sociedad',
    school: 'Escuela de Ciencias Sociales, Artes y Humanidades (ECSAH)',
    modality: '100% Virtual',
    credits: 160,
    territorialImpact:
      'Prepara profesionales sensibles al tejido social, la salud mental colectiva, la reconstrucción de memoria y el buen vivir comunitario.',
    communityApplication:
      'Acompañamiento psicosocial a juventudes, familias y procesos organizativos indígenas.',
    officialUrl: 'https://estudios.unad.edu.co/psicologia',
  },
  {
    id: 'sistemas',
    title: 'Ingeniería de Sistemas',
    category: 'Ingeniería y Gestión',
    school: 'Escuela de Ciencias Básicas, Tecnología e Ingeniería (ECBTI)',
    modality: '100% Virtual',
    credits: 149,
    territorialImpact:
      'Desarrolla capacidades en software, redes comunitarias y gestión de datos para cerrar la brecha de conectividad en zonas rurales.',
    communityApplication:
      'Sistemas de información territorial, radios y redes comunitarias y herramientas digitales bilingües.',
    officialUrl: 'https://estudios.unad.edu.co/ingenieria-de-sistemas',
  },
  {
    id: 'administracion',
    title: 'Administración de Empresas',
    category: 'Ingeniería y Gestión',
    school: 'Escuela de Ciencias Administrativas, Contables, Económicas y de Negocios (ECACEN)',
    modality: '100% Virtual',
    credits: 149,
    territorialImpact:
      'Fortalece la gestión de cooperativas, asociaciones de productores, artesanías y emprendimientos solidarios desde el territorio.',
    communityApplication:
      'Administración de recursos propios del cabildo, comercio justo y economía solidaria territorial.',
    officialUrl: 'https://estudios.unad.edu.co/administracion-de-empresas',
  },
];
