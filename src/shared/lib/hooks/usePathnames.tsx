import {usePathname} from 'next/navigation';

export const usePathnames = (): {
  path: string;
  isMainPage: boolean;
  isArticlePage: boolean;
  pathNames: string[];
} => {
  const path = usePathname();
  const pathNames = path.split('/').filter((path) => path);
  const isArticlePage =
    (pathNames.length === 3 && pathNames.includes('articles')) ||
    (pathNames.length === 2 && pathNames.includes('create'));

  return {path, isMainPage: pathNames.length === 0, isArticlePage, pathNames};
};
