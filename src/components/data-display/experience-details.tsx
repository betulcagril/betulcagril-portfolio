import { ExternalLink } from 'lucide-react';

import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import Card from '@/components/layout/card';
import { ExperienceDetails as ExperienceDetailsProps } from '@/lib/types';

const dateFormatOptions: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'short',
};

const ExperienceDetails = ({
  position,
  company,
  location,
  websiteUrl,
  websiteLabel,
  currentlyWorkHere,
  startDate,
  endDate,
  summary,
}: ExperienceDetailsProps) => {
  return (
    <Card className="mx-auto flex w-full max-w-4xl flex-col justify-between gap-4 p-8 md:flex-row md:gap-8">
      <div className="flex flex-col gap-4 max-md:order-3 md:w-3/4">
        <div className="flex flex-col gap-2">
          <Typography variant="subtitle" className="font-semibold text-gray-900">
            {position}
          </Typography>
          {(company || location) && (
            <Typography className="text-gray-600">
              {[company, location].filter(Boolean).join(' · ')}
            </Typography>
          )}
          {websiteUrl && (
            <Link
              href={websiteUrl}
              externalLink
              noCustomization
              className="inline-flex w-fit items-center gap-1.5 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900"
            >
              <span>{websiteLabel ?? websiteUrl.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')}</span>
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
      <div className="max-md:order-2 md:w-1/4">
        <Typography className="text-gray-700 md:text-right">
          {new Intl.DateTimeFormat('en-US', dateFormatOptions).format(
            startDate
          )}{' '}
          -{' '}
          {currentlyWorkHere
            ? 'Present'
            : endDate
            ? new Intl.DateTimeFormat('en-US', dateFormatOptions).format(
                endDate
              )
            : 'NA'}
        </Typography>
      </div>
    </Card>
  );
};

export default ExperienceDetails;
