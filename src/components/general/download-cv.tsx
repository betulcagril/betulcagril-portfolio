'use client';

import Button from '@/components/general/button';
import { CV_FILENAME, CV_PUBLIC_PATH, getPublicFileUrl } from '@/lib/site-config';

const DownloadCV = () => {
  const cvUrl = getPublicFileUrl(CV_PUBLIC_PATH);

  return (
    <Button asChild>
      <a href={cvUrl} download={CV_FILENAME}>
        Download CV
      </a>
    </Button>
  );
};

export default DownloadCV;
