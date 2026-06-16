import { ExternalLink } from 'lucide-react';

import { ProjectDetails as ProjectDetailsType } from '@/lib/types';
import { mergeClasses } from '@/lib/utils';
import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import Card from '@/components/layout/card';
import ImageLightbox from '@/components/data-display/image-lightbox';

type ProjectDetailsProps = ProjectDetailsType & {
  layoutType: 'default' | 'reverse';
};

const ProjectDetails = ({
  name,
  summary,
  previewImages,
  url,
  layoutType = 'default',
}: ProjectDetailsProps) => {
  return (
    <Card className="mx-auto flex w-full max-w-7xl flex-col md:flex-row">
      <div
        className={mergeClasses(
          'flex flex-col gap-4 border-gray-100 bg-gray-50 p-6 dark:bg-gray-200 max-md:rounded-t-xl md:w-1/2 lg:p-8',
          layoutType === 'default'
            ? 'md:rounded-l-xl md:border-r'
            : 'md:order-last md:rounded-r-xl md:border-l'
        )}
      >
        {previewImages?.map((image, index) => (
          <ImageLightbox
            key={index}
            src={image}
            alt={`${name} preview ${index + 1}`}
          />
        ))}
      </div>

      <div
        className={mergeClasses(
          'flex flex-col gap-4 p-6 md:w-1/2 lg:p-8',
          layoutType === 'default' ? '' : 'md:order-first'
        )}
      >
        <div className="flex flex-col gap-2">
          <Typography variant="subtitle" className="font-semibold text-gray-900">
            {name}
          </Typography>
          {url && (
            <Link
              href={url}
              externalLink
              noCustomization
              className="inline-flex w-fit items-center gap-1.5 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900"
            >
              <span>
                {url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')}
              </span>
              <ExternalLink className="h-3.5 w-3.5 shrink-0 opacity-70" />
            </Link>
          )}
        </div>
        <ul className="flex list-disc flex-col gap-2 md:gap-1">
          {summary?.map((sentence, index) => (
            <Typography component="li" key={index}>
              {sentence}
            </Typography>
          ))}
        </ul>
      </div>
    </Card>
  );
};

export default ProjectDetails;
