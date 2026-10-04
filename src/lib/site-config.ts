export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
export const SITE_URL = 'https://betulcagril.github.io/betulcagril-portfolio';
/** Path under public/ — change only this when you rename the file on disk. */
export const CV_PUBLIC_PATH = '/files/Betul-Cagril-CV.pdf';
export const CV_FILENAME = CV_PUBLIC_PATH.split('/').pop()!;

export const withBasePath = (path: string) => `${basePath}${path}`;

/** Absolute URL to a file under public/ (works on localhost and GitHub Pages). */
export const getPublicFileUrl = (relativePath: string) => {
  const path = relativePath.startsWith('/') ? relativePath : `/${relativePath}`;

  if (typeof window !== 'undefined') {
    const prefix = window.location.pathname.includes('/betulcagril-portfolio')
      ? '/betulcagril-portfolio'
      : basePath;
    return `${window.location.origin}${prefix}${path}`;
  }

  return `${SITE_URL}${path}`;
};
