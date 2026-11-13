import { useState } from 'react';
import { Mountain } from 'lucide-react';

interface DocumentaryImageProps {
  src: string;
  alt: string;
  caption?: string;
  aspectClass?: string;
  className?: string;
  priority?: boolean;
}

export function DocumentaryImage({
  src,
  alt,
  caption,
  aspectClass = 'aspect-[4/3]',
  className = '',
  priority = false,
}: DocumentaryImageProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <figure className={`group ${className}`}>
      <div
        className={`relative w-full overflow-hidden rounded-lg bg-[#EAE3D5] border border-[#DFD7C8] ${aspectClass}`}
      >
        {!hasError ? (
          <img
            src={src}
            alt={alt}
            referrerPolicy="no-referrer"
            loading={priority ? 'eager' : 'lazy'}
            decoding={priority ? 'sync' : 'async'}
            onError={() => setHasError(true)}
            className="h-full w-full object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02]"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#EAE3D5] via-[#E2D7C3] to-[#D4C5AE] p-6 text-center">
            <Mountain className="h-8 w-8 text-[#8C3B2B] mb-3" aria-hidden="true" />
            <p className="font-serif text-base text-[#1C1917] max-w-xs">
              Archivo documental intercultural UNAD
            </p>
            <p className="mt-1 text-xs text-[#57534E] max-w-xs">
              {caption || alt}
            </p>
          </div>
        )}
      </div>
      {caption && (
        <figcaption className="mt-3 text-xs leading-relaxed text-[#57534E]">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
