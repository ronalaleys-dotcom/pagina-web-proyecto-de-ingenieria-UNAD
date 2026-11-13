import { useEffect, useState } from 'react';
import { ArrowUpRight, Compass, X } from 'lucide-react';

export function QuickAccessFab() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      {isOpen && (
        <div
          role="dialog"
          aria-label="Acceso rápido UNAD"
          className="mb-3 w-72 sm:w-80 rounded-lg border border-[#D8CEBE] bg-[#FFFDF9] p-5 shadow-lg"
        >
          <div className="flex items-center justify-between border-b border-[#E3DCCF] pb-3">
            <span className="font-serif text-base font-medium text-[#1C1917]">
              Acceso rápido UNAD
            </span>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Cerrar panel de acceso rápido"
              className="inline-flex h-8 w-8 items-center justify-center rounded-md text-[#57534E] hover:bg-[#F2EDE3] hover:text-[#1C1917]"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-3 flex flex-col gap-1.5">
            <a
              href="https://www.unad.edu.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-md px-3 py-2.5 text-sm font-medium text-[#1C1917] transition-colors hover:bg-[#F2EDE3]"
            >
              <span>Portal Institucional UNAD</span>
              <ArrowUpRight className="h-4 w-4 text-[#8C3B2B]" aria-hidden="true" />
            </a>
            <a
              href="https://campus0a.unad.edu.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-md px-3 py-2.5 text-sm font-medium text-[#1C1917] transition-colors hover:bg-[#F2EDE3]"
            >
              <span>Campus Virtual 100% Online</span>
              <ArrowUpRight className="h-4 w-4 text-[#8C3B2B]" aria-hidden="true" />
            </a>
            <a
              href="#oferta"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between rounded-md px-3 py-2.5 text-sm font-medium text-[#1C1917] transition-colors hover:bg-[#F2EDE3]"
            >
              <span>Explorar carreras virtuales</span>
              <span className="text-xs text-[#57534E]">Ver lista</span>
            </a>
            <a
              href="https://estudios.unad.edu.co/inscripciones-y-matriculas"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-[#C2882B] px-4 py-2.5 text-sm font-semibold text-[#1C1917] transition-colors hover:bg-[#B07A23]"
            >
              <span>Iniciar inscripción oficial</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-label="Abrir menú de acceso rápido"
        className="inline-flex h-11 items-center gap-2 rounded-md border border-[#1F3B32]/20 bg-[#1F3B32] px-4 text-sm font-medium text-[#FAF8F4] shadow-md transition-all duration-200 hover:bg-[#8C3B2B] active:scale-[0.98] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C2882B]"
      >
        <Compass className="h-4 w-4 text-[#E3B562]" aria-hidden="true" />
        <span>Acceso rápido</span>
      </button>
    </div>
  );
}
