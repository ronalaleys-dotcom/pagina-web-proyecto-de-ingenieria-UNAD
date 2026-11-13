import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { href: '#modelo', label: 'Modelo Virtual' },
  { href: '#ventajas', label: 'Ventajas' },
  { href: '#inspiracion', label: 'Inspiración' },
  { href: '#oferta', label: 'Oferta Académica' },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#E3DCCF] bg-[#FAF8F4]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-8 px-5 sm:px-8">
        {/* Zone 1: Single-line institutional wordmark */}
        <a
          href="#inicio"
          className="flex items-center gap-2.5 text-lg font-medium tracking-tight text-[#1C1917] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8C3B2B]"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            className="shrink-0 text-[#8C3B2B]"
          >
            <path
              d="M12 2L20 10L12 18L4 10L12 2Z"
              stroke="currentColor"
              strokeWidth="1.6"
            />
            <path
              d="M12 6.5L15.5 10L12 13.5L8.5 10L12 6.5Z"
              fill="#C2882B"
            />
            <path
              d="M4 19.5H20"
              stroke="#1F3B32"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
          <span className="font-serif text-xl tracking-tight">UNAD Territorio</span>
        </a>

        {/* Zone 2: 4 concise single-line navigation links */}
        <nav
          aria-label="Navegación principal"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#57534E]"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-1 whitespace-nowrap shrink-0 transition-colors duration-200 hover:text-[#1C1917] after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-[#8C3B2B] after:transition-[width] after:duration-200 hover:after:w-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8C3B2B]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary action + mobile toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#inscripcion"
            className="hidden sm:inline-flex items-center justify-center rounded-md bg-[#1F3B32] px-4 py-2 text-sm font-medium text-[#FAF8F4] whitespace-nowrap shrink-0 transition-colors duration-200 hover:bg-[#8C3B2B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8C3B2B]"
          >
            Inscribirse
          </a>
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[#E3DCCF] text-[#1C1917] md:hidden hover:bg-[#F2EDE3] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8C3B2B]"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileOpen && (
        <div className="border-t border-[#E3DCCF] bg-[#FAF8F4] px-5 py-4 md:hidden">
          <nav aria-label="Navegación móvil" className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-2 text-base font-medium text-[#1C1917] border-b border-[#E3DCCF]/60 last:border-b-0"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#inscripcion"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-md bg-[#1F3B32] px-4 py-2.5 text-sm font-medium text-[#FAF8F4]"
            >
              Inscribirse en la UNAD
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
