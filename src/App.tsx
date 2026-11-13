import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { AcademicOfferSection } from './components/AcademicOfferSection';
import { DocumentaryImage } from './components/DocumentaryImage';
import { Header } from './components/Header';
import { QuickAccessFab } from './components/QuickAccessFab';
import { Reveal } from './components/Reveal';
import {
  ADVANTAGES,
  DOCUMENTARY_STORIES,
  HERO_DOCUMENTARY_MEDIA,
} from './data/unadContent';

export default function App() {
  const [leadStory, secondStory, thirdStory] = DOCUMENTARY_STORIES;

  return (
    <div className="min-h-screen bg-[#FAF8F4] text-[#1C1917] flex flex-col">
      <Header />

      <main className="flex-1">
        {/* B. HERO SECTION: Impacto Emocional y Dignidad Territorial */}
        <section
          id="inicio"
          className="relative overflow-hidden pt-12 pb-16 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28"
        >
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-stretch lg:gap-12">
              {/* Columna editorial izquierda */}
              <div className="flex flex-col justify-between lg:col-span-6">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#8C3B2B]">
                    Educación superior virtual · Pueblos indígenas de Colombia
                  </p>

                  <h1 className="mt-5 font-serif text-[clamp(2.25rem,4.3vw,3.85rem)] font-medium leading-[1.08] tracking-[-0.02em] text-[#1C1917]">
                    El conocimiento de la tierra, conectado con el futuro del mundo.
                  </h1>

                  <p className="mt-6 max-w-xl text-base leading-relaxed text-[#57534E] sm:text-lg">
                    Estudia en la UNAD 100% de forma virtual. Transforma tu realidad profesional sin tener que marcharte de tu comunidad.
                  </p>
                </div>

                <div className="mt-9 flex flex-wrap items-center gap-5 pt-2">
                  <a
                    href="#oferta"
                    className="group inline-flex items-center gap-3 rounded-md bg-[#1F3B32] px-6 py-3.5 text-sm font-medium text-[#FAF8F4] whitespace-nowrap shrink-0 transition-all duration-200 hover:bg-[#8C3B2B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8C3B2B]"
                  >
                    <span>Explora los programas virtuales</span>
                    <ArrowRight
                      className="h-4 w-4 text-[#E3B562] transition-transform duration-200 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </a>

                  <a
                    href="#modelo"
                    className="text-sm font-medium text-[#57534E] underline decoration-[#D8CEBE] underline-offset-4 transition-colors duration-200 hover:text-[#1C1917] hover:decoration-[#8C3B2B] whitespace-nowrap shrink-0"
                  >
                    Leer el manifiesto
                  </a>
                </div>
              </div>

              {/* Columna visual derecha: Fotografía documental real estilo ONIC / UNAD */}
              <div className="lg:col-span-6 flex flex-col">
                <DocumentaryImage
                  src={HERO_DOCUMENTARY_MEDIA.imageSrc}
                  alt={HERO_DOCUMENTARY_MEDIA.imageAlt}
                  caption={HERO_DOCUMENTARY_MEDIA.caption}
                  aspectClass="aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[430px]"
                  className="flex-1 flex flex-col"
                  priority
                />
              </div>
            </div>

            {/* Franja territorial de respaldo institucional */}
            <div className="mt-14 grid grid-cols-1 gap-6 border-t border-[#E3DCCF] pt-8 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <p className="font-serif text-2xl font-medium text-[#1C1917] tabular-nums">
                  100% Virtual
                </p>
                <p className="mt-1 text-xs leading-relaxed text-[#57534E]">
                  Sin traslado obligatorio ni gastos de vivienda en grandes ciudades
                </p>
              </div>
              <div>
                <p className="font-serif text-2xl font-medium text-[#1C1917] tabular-nums">
                  32 Departamentos
                </p>
                <p className="mt-1 text-xs leading-relaxed text-[#57534E]">
                  Cobertura nacional desde la Sierra Nevada hasta el Trapecio Amazónico
                </p>
              </div>
              <div>
                <p className="font-serif text-2xl font-medium text-[#1C1917] tabular-nums">
                  65 Lenguas
                </p>
                <p className="mt-1 text-xs leading-relaxed text-[#57534E]">
                  Diálogo respetuoso con los planes de vida y culturas propias
                </p>
              </div>
              <div>
                <p className="font-serif text-2xl font-medium text-[#1C1917] tabular-nums">
                  24 / 7
                </p>
                <p className="mt-1 text-xs leading-relaxed text-[#57534E]">
                  Campus universitario abierto al ritmo de la vida comunitaria
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* C. MANIFIESTO: El Desafío del Desarraigo vs. La Oportunidad Virtual */}
        <section
          id="modelo"
          className="border-t border-[#E3DCCF] bg-[#F2EDE3]/60 py-24 sm:py-32"
        >
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <Reveal>
              <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
                {/* Columna principal de lectura editorial (70%) */}
                <div className="lg:col-span-7">
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#8C3B2B]">
                    Manifiesto por la soberanía educativa
                  </p>
                  <h2 className="mt-4 font-serif text-3xl font-medium leading-[1.18] text-[#1C1917] sm:text-4xl lg:text-[2.65rem]">
                    Formarse como profesional nunca debería exigir el precio de abandonar el territorio.
                  </h2>

                  <div className="mt-10 max-w-2xl space-y-6 text-base leading-[1.8] text-[#292524] sm:text-[1.0625rem]">
                    <p className="editorial-dropcap">
                      Durante décadas, para miles de jóvenes y líderes de los pueblos indígenas de Colombia, acceder a un título universitario significó partir hacia las capitales. Esa migración forzada conlleva un costo profundo: el desarraigo de la familia, el silenciamiento cotidiano de la lengua materna, el choque frente a alquileres impagables y la distancia de las asambleas donde se teje el futuro del resguardo.
                    </p>
                    <p>
                      La metodología 100% virtual de la Universidad Nacional Abierta y a Distancia (UNAD) invierte esa ecuación histórica. En lugar de que la juventud abandone la tierra para buscar conocimiento, es la universidad pública la que llega al corazón del territorio, integrándose con respeto a la vida comunitaria.
                    </p>
                    <p>
                      Estudiar desde la maloca, el cabildo o la vereda convierte cada semestre en un ejercicio vivo: lo aprendido en ingeniería, etnoeducación, gestión o ciencias agrarias se aplica el mismo día en las necesidades reales del propio pueblo.
                    </p>
                  </div>
                </div>

                {/* Columna de notas al margen (30%) */}
                <aside
                  aria-label="Contraste entre migración presencial y soberanía virtual"
                  className="lg:col-span-5 flex flex-col justify-center space-y-8"
                >
                  <div className="border-t border-b border-[#D8CEBE] py-6">
                    <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#57534E]">
                      El costo del desarraigo presencial
                    </p>
                    <p className="mt-2.5 font-serif text-xl text-[#1C1917]">
                      Ruptura del vínculo comunitario y sobrecostos urbanos
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-[#57534E]">
                      Transporte interdepartamental, sostenimiento en ciudad, aislamiento cultural y fuga de talentos que la comunidad necesita presentes.
                    </p>
                  </div>

                  <div className="border-b border-[#D8CEBE] pb-6">
                    <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#1F3B32]">
                      La respuesta virtual UNAD
                    </p>
                    <p className="mt-2.5 font-serif text-xl text-[#1C1917]">
                      Soberanía educativa desde el propio hogar
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-[#57534E]">
                      Acompañamiento tutorial continuo, recursos digitales descargables para zonas de conectividad intermitente y titulación nacional de alta calidad.
                    </p>
                  </div>
                </aside>
              </div>
            </Reveal>
          </div>
        </section>

        {/* D. VENTAJAS COMPETITIVAS: Grid de 3 columnas con cristal translúcido cálido */}
        <section id="ventajas" className="py-24 sm:py-32">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <Reveal>
              <div className="max-w-2xl">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#8C3B2B]">
                  Pilares del modelo virtual
                </p>
                <h2 className="mt-3 font-serif text-3xl font-medium leading-tight text-[#1C1917] sm:text-4xl">
                  Educación superior diseñada para dialogar con la vida comunitaria
                </h2>
              </div>
            </Reveal>

            <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
              {ADVANTAGES.map((item, idx) => (
                <Reveal key={item.index} delayMs={idx * 90}>
                  <article className="flex h-full flex-col justify-between rounded-lg border border-[#DFD7C8] bg-[#FFFDF9]/80 p-8 backdrop-blur-md transition-[border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-[#8C3B2B]/50">
                    <div>
                      <div className="flex items-baseline justify-between border-b border-[#E3DCCF] pb-4">
                        <span className="font-serif text-3xl font-medium text-[#8C3B2B] tabular-nums">
                          {item.index}
                        </span>
                        <span className="text-xs font-medium text-[#57534E]">
                          {item.subtitle}
                        </span>
                      </div>

                      <h3 className="mt-6 font-serif text-2xl font-medium leading-snug text-[#1C1917]">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm leading-relaxed text-[#57534E] sm:text-[0.95rem]">
                        {item.description}
                      </p>
                    </div>

                    <p className="mt-8 border-t border-[#E3DCCF] pt-4 text-xs font-medium text-[#1F3B32]">
                      {item.territorialAnchor}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* E. GALERÍA DE HISTORIAS DE VIDA: Enfoque Artístico y Documental Asimétrico */}
        <section
          id="inspiracion"
          className="border-t border-[#E3DCCF] bg-[#FAF8F4] py-24 sm:py-32"
        >
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <Reveal>
              <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between border-b border-[#E3DCCF] pb-10">
                <div className="max-w-2xl">
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#8C3B2B]">
                    Galería documental de territorios
                  </p>
                  <h2 className="mt-3 font-serif text-3xl font-medium leading-tight text-[#1C1917] sm:text-4xl">
                    Rostros que transforman sus comunidades sin dejar atrás sus raíces
                  </h2>
                </div>
                <p className="max-w-md text-xs leading-relaxed text-[#57534E]">
                  Inspirado en la memoria visual de los archivos documentales de la ONIC y la vida estudiantil real de la UNAD en los territorios indígenas de Colombia.
                </p>
              </div>
            </Reveal>

            {/* Historia Principal Destacada (Asimetría Editorial) */}
            <Reveal delayMs={60}>
              <article className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center lg:gap-12">
                <div className="lg:col-span-5">
                  <DocumentaryImage
                    src={leadStory.imageSrc}
                    alt={leadStory.imageAlt}
                    aspectClass={leadStory.aspectClass}
                  />
                </div>
                <div className="lg:col-span-6 lg:col-start-7">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-[#57534E]">
                    <span className="font-medium text-[#8C3B2B]">
                      {leadStory.archiveCode}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{leadStory.pueblo}</span>
                    <span aria-hidden="true">·</span>
                    <span>{leadStory.program}</span>
                  </div>

                  <blockquote className="mt-5 font-serif text-2xl font-normal italic leading-snug text-[#1C1917] sm:text-3xl lg:text-[2.15rem]">
                    “{leadStory.quote}”
                  </blockquote>

                  <p className="mt-6 max-w-xl text-base leading-relaxed text-[#57534E]">
                    {leadStory.impactDetail}
                  </p>

                  <div className="mt-7 border-t border-[#E3DCCF] pt-4">
                    <p className="text-sm font-semibold text-[#1C1917]">
                      {leadStory.name}
                    </p>
                    <p className="text-xs text-[#57534E]">
                      {leadStory.pueblo} · {leadStory.territory}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>

            {/* Díptico Asimétrico de Galería (Historias 02 y 03 con ritmo vertical escalonado) */}
            <div className="mt-20 grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10">
              <Reveal delayMs={80} className="lg:col-span-5">
                <article>
                  <DocumentaryImage
                    src={secondStory.imageSrc}
                    alt={secondStory.imageAlt}
                    aspectClass={secondStory.aspectClass}
                  />
                  <div className="mt-6">
                    <div className="flex flex-wrap items-center gap-2 text-xs text-[#57534E]">
                      <span className="font-medium text-[#8C3B2B]">
                        {secondStory.archiveCode}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{secondStory.program}</span>
                    </div>
                    <blockquote className="mt-3 font-serif text-2xl italic leading-snug text-[#1C1917]">
                      “{secondStory.quote}”
                    </blockquote>
                    <p className="mt-3 text-sm leading-relaxed text-[#57534E]">
                      {secondStory.impactDetail}
                    </p>
                    <p className="mt-4 text-xs font-medium text-[#1C1917]">
                      {secondStory.name} ·{' '}
                      <span className="font-normal text-[#57534E]">
                        {secondStory.pueblo}, {secondStory.territory}
                      </span>
                    </p>
                  </div>
                </article>
              </Reveal>

              <Reveal delayMs={160} className="lg:col-span-5 lg:col-start-8 lg:mt-20">
                <article>
                  <DocumentaryImage
                    src={thirdStory.imageSrc}
                    alt={thirdStory.imageAlt}
                    aspectClass={thirdStory.aspectClass}
                  />
                  <div className="mt-6">
                    <div className="flex flex-wrap items-center gap-2 text-xs text-[#57534E]">
                      <span className="font-medium text-[#8C3B2B]">
                        {thirdStory.archiveCode}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{thirdStory.program}</span>
                    </div>
                    <blockquote className="mt-3 font-serif text-2xl italic leading-snug text-[#1C1917]">
                      “{thirdStory.quote}”
                    </blockquote>
                    <p className="mt-3 text-sm leading-relaxed text-[#57534E]">
                      {thirdStory.impactDetail}
                    </p>
                    <p className="mt-4 text-xs font-medium text-[#1C1917]">
                      {thirdStory.name} ·{' '}
                      <span className="font-normal text-[#57534E]">
                        {thirdStory.pueblo}, {thirdStory.territory}
                      </span>
                    </p>
                  </div>
                </article>
              </Reveal>
            </div>
          </div>
        </section>

        {/* OFERTA ACADÉMICA VIRTUAL INTERACTIVA */}
        <AcademicOfferSection />
      </main>

      {/* F. FOOTER DE CIERRE: Llamado a la Acción Profundo */}
      <footer
        id="inscripcion"
        className="bg-[#152922] text-[#FAF8F4] pt-20 pb-12 sm:pt-28 sm:pb-14"
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end pb-16 border-b border-[#FAF8F4]/15">
              <div className="lg:col-span-8">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#E3B562]">
                  Educación superior pública y virtual en Colombia
                </p>
                <h2 className="mt-4 font-serif text-3xl font-medium leading-[1.15] text-[#FAF8F4] sm:text-5xl">
                  Tu voz, tu cultura y tus saberes ahora en la educación superior.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#D8D3C8]">
                  Da el primer paso hacia tu formación profesional sin dejar tu tierra, tu familia ni las luchas de tu pueblo. Conoce el calendario de matrículas, homologaciones y acompañamiento intercultural de la UNAD.
                </p>
              </div>

              <div className="lg:col-span-4 lg:flex lg:justify-end">
                <a
                  href="https://www.unad.edu.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 rounded-md bg-[#C2882B] px-7 py-4 text-sm font-semibold text-[#1C1917] whitespace-nowrap shrink-0 transition-all duration-200 hover:bg-[#D49B3E] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E3B562]"
                >
                  <span>Inscríbete en la UNAD</span>
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Reveal>

          <div className="mt-10 flex flex-col gap-6 text-xs text-[#C7C1B5] sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-1">
              <p className="font-medium text-[#FAF8F4]">
                UNAD Territorio · Iniciativa de divulgación para el acceso intercultural a la educación superior virtual
              </p>
              <p>
                Dirección visual inspirada en los archivos documentales de la ONIC y la comunidad académica de la Universidad Nacional Abierta y a Distancia.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-6 shrink-0">
              <a
                href="#modelo"
                className="hover:text-[#FAF8F4] transition-colors whitespace-nowrap"
              >
                Modelo Virtual
              </a>
              <a
                href="#ventajas"
                className="hover:text-[#FAF8F4] transition-colors whitespace-nowrap"
              >
                Ventajas
              </a>
              <a
                href="#inspiracion"
                className="hover:text-[#FAF8F4] transition-colors whitespace-nowrap"
              >
                Historias
              </a>
              <a
                href="https://www.unad.edu.co/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#E3B562] hover:text-[#FAF8F4] transition-colors whitespace-nowrap"
              >
                <span>unad.edu.co</span>
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      <QuickAccessFab />
    </div>
  );
}
