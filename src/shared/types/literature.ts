export interface LiteratureI {
  id: string;
  title: string;
  description: string;
  href: {
    data: {
      id: number;
      attributes: {
        name: string;
        url: string;
      };
    };
  };
  image: any;
}
