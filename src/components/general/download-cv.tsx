'use client';

import Button from '@/components/general/button';
import { withBasePath } from '@/lib/site-config';

export const CV_FILENAME = 'Betul-Cagril-CV.pdf';
const cvHref = withBasePath(`/files/${CV_FILENAME}`);

const DownloadCV = () => {
  return (
    <Button asChild>
      <a href={cvHref} download={CV_FILENAME}>
        Download CV
      </a>
    </Button>
  );
};

export default DownloadCV;
