'use client';

import { TechDetails } from '@/lib/types';
import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import ImageWrapper from '@/components/data-display/image-wrapper';

const TechDetails = ({ url, logo, darkModeLogo, label }: TechDetails) => {
  return (
    <div className="flex w-full min-w-0 max-w-[9rem] flex-col items-center gap-2 sm:max-w-none">
      <Link noCustomization href={url} externalLink className="shrink-0">
        <ImageWrapper
          src={logo}
          srcForDarkMode={darkModeLogo}
          alt={label}
          width={56}
          height={56}
          className="h-12 w-12 object-contain sm:h-14 sm:w-14 transition-transform duration-300 md:hover:scale-110"
        />
      </Link>
      <Typography
        variant="body3"
        className="w-full text-center text-[11px] leading-tight sm:text-sm md:text-lg"
      >
        {label}
      </Typography>
    </div>
  );
};

export default TechDetails;
