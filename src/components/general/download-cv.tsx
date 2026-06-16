'use client';

import Button from '@/components/general/button';
import { withBasePath } from '@/lib/site-config';

const DownloadCV = () => {
  return (
    <Button
      onClick={() => window?.open(withBasePath('/files/betul-cagril-cv.pdf'), '_blank')}
    >
      Download CV
    </Button>
  );
};

export default DownloadCV;
