'use client';

import Image, { StaticImageData } from 'next/image';
import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';

import { mergeClasses } from '@/lib/utils';
import IconButton from '@/components/general/icon-button';

type ImageLightboxProps = {
  src: string | StaticImageData;
  alt: string;
  className?: string;
};

const getImageDimensions = (src: string | StaticImageData) => {
  if (typeof src === 'string') {
    return { width: 1920, height: 1080 };
  }

  return { width: src.width, height: src.height };
};

const ImageLightbox = ({ src, alt, className }: ImageLightboxProps) => {
  const { width, height } = getImageDimensions(src);

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button
          type="button"
          className={mergeClasses(
            'block w-full cursor-zoom-in overflow-hidden rounded-xl border border-gray-100 shadow-md transition-transform duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 md:hover:scale-[1.02]',
            className
          )}
          aria-label={`View larger: ${alt}`}
        >
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            quality={100}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="h-auto w-full"
            style={{ objectFit: 'contain' }}
          />
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-gray-900/80 backdrop-blur-sm" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 flex max-h-[95vh] w-[min(1400px,96vw)] -translate-x-1/2 -translate-y-1/2 flex-col outline-none">
          <div className="relative w-full overflow-hidden rounded-xl bg-gray shadow-2xl">
            <Dialog.Close asChild>
              <IconButton
                className="absolute right-3 top-3 z-10 bg-gray/90 hover:bg-gray-100 [&_svg]:stroke-gray-700"
                aria-label="Close preview"
              >
                <X />
              </IconButton>
            </Dialog.Close>
            <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              quality={100}
              unoptimized
              sizes="96vw"
              className="h-auto max-h-[90vh] w-full"
              style={{ objectFit: 'contain' }}
            />
          </div>
          <Dialog.Title className="sr-only">{alt}</Dialog.Title>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default ImageLightbox;
