import { useState } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import {
  ACADEMIC_PROGRAMS,
  type AcademicProgram,
  type ProgramCategory,
} from '../data/unadContent';
import { Reveal } from './Reveal';

const CATEGORIES: ProgramCategory[] = [
  'Todos',
  'Etnoeducación y Sociedad',
  'Tierra y Ambiente',
  'Ingeniería y Gestión',
];

export function AcademicOfferSection() {
  const [selectedCategory, setSelectedCategory] = useState<ProgramCategory>('Todos');
  const [activeProgram, setActiveProgram] = useState<AcademicProgram | null>(null);

  const filteredPrograms =
    selectedCategory === 'Todos'
      ? ACADEMIC_PROGRAMS
      : ACADEMIC_PROGRAMS.filter((p) => p.category === selectedCategory);

  return (
    <section
      id="oferta"
      className="border-t border-[#E3DCCF] bg-[#F2EDE3]/55 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#8C3B2B]">
                Oferta académica pertinente
              </p>
              <h2 className="mt-3 font-serif text-3xl font-medium leading-tight text-[#1C1917] sm:text-4xl">
                Carreras virtuales pensadas para fortalecer la vida en el territorio
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-[#57534E]">
              Programas profesionales acreditados de la Universidad Nacional Abierta y a Distancia, accesibles desde cualquier resguardo o municipio de Colombia.
            </p>
          </div>
        </Reveal>

        {/* Interactive category filter bar */}
        <div
          role="tablist"
          aria-label="Filtrar programas por área"
          className="mt-10 flex flex-wrap items-center gap-2 border-b border-[#E3DCCF] pb-4"
        >
          {CATEGORIES.map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <button
                key={category}
                role="tab"
                type="button"
                aria-selected={isSelected}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-md px-3.5 py-2 text-sm font-medium whitespace-nowrap shrink-0 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8C3B2B] ${
                  isSelected
                    ? 'bg-[#1F3B32] text-[#FAF8F4]'
                    : 'bg-transparent text-[#57534E] hover:bg-[#E7E0D2] hover:text-[#1C1917]'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Programs architectural grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredPrograms.map((program) => (
            <article
              key={program.id}
              className="flex flex-col justify-between rounded-lg border border-[#DFD7C8] bg-[#FAF8F4] p-7 transition-[border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-[#8C3B2B]/50"
            >
              <div>
                <div className="flex items-center gap-2 text-xs text-[#57534E]">
                  <span>{program.category}</span>
                  <span aria-hidden="true">·</span>
                  <span className="tabular-nums">{program.credits} créditos</span>
                </div>

                <h3 className="mt-3 font-serif text-2xl font-medium leading-snug text-[#1C1917]">
                  {program.title}
                </h3>

                <p className="mt-2 text-xs font-medium text-[#8C3B2B]">
                  {program.modality}
                </p>

                <p className="mt-4 text-sm leading-relaxed text-[#57534E]">
                  {program.territorialImpact}
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-[#E3DCCF] pt-4">
                <button
                  type="button"
                  onClick={() => setActiveProgram(program)}
                  className="text-sm font-medium text-[#1C1917] underline decoration-[#C2882B] decoration-2 underline-offset-4 transition-colors hover:text-[#8C3B2B] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8C3B2B]"
                >
                  Ver enfoque territorial
                </button>
                <a
                  href={program.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Consultar ${program.title} en el portal de la UNAD`}
                  className="inline-flex items-center gap-1 text-xs font-medium text-[#57534E] hover:text-[#1F3B32] whitespace-nowrap shrink-0"
                >
                  <span>Sitio UNAD</span>
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Program territorial focus modal */}
      {activeProgram && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#1C1917]/60 p-4 backdrop-blur-xs"
          onClick={() => setActiveProgram(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="program-modal-title"
            className="w-full max-w-lg rounded-lg border border-[#D8CEBE] bg-[#FAF8F4] p-7 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-[#E3DCCF] pb-4">
              <div>
                <p className="text-xs text-[#57534E]">
                  {activeProgram.school} ·{' '}
                  <span className="tabular-nums">{activeProgram.credits} créditos</span>
                </p>
                <h3
                  id="program-modal-title"
                  className="mt-1.5 font-serif text-2xl font-medium text-[#1C1917]"
                >
                  {activeProgram.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveProgram(null)}
                aria-label="Cerrar detalle del programa"
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-[#E3DCCF] text-[#57534E] hover:bg-[#F2EDE3] hover:text-[#1C1917]"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-5 space-y-4">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8C3B2B]">
                  Impacto en el territorio
                </h4>
                <p className="mt-1.5 text-sm leading-relaxed text-[#1C1917]">
                  {activeProgram.territorialImpact}
                </p>
              </div>
              <div className="rounded-md bg-[#F2EDE3] p-4">
                <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-[#1F3B32]">
                  Aplicación comunitaria directa
                </h4>
                <p className="mt-1.5 text-sm leading-relaxed text-[#57534E]">
                  {activeProgram.communityApplication}
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-end gap-3 border-t border-[#E3DCCF] pt-5">
              <button
                type="button"
                onClick={() => setActiveProgram(null)}
                className="rounded-md border border-[#D8CEBE] px-4 py-2 text-sm font-medium text-[#57534E] hover:bg-[#F2EDE3] hover:text-[#1C1917]"
              >
                Cerrar
              </button>
              <a
                href={activeProgram.officialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-[#8C3B2B] px-5 py-2 text-sm font-medium text-[#FAF8F4] transition-colors hover:bg-[#6E2A1E]"
              >
                <span>Ver pensum en UNAD</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
