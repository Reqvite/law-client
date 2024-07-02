export interface NavLink {
  id: number;
  href?: string;
  newTab?: boolean;
  label: string;
  children: SubLink[];
  variant: string;
}

export interface SubLink {
  label: string;
  subLabel?: string;
  href: string;
  variant: string;
}

export interface ButtonType {
  id: string;
  href?: string;
  label: string;
  variant: string;
  newTab?: boolean;
}

export interface InputType {
  id: string;
  htmlFor: string;
  label: string;
  type: string;
  placeholder?: string;
  variant: string;
}

export interface CheckboxType {
  id: string;
  label: string;
  href: string;
  hrefText: string;
}

type variantCardTypes = 'medium' | 'large';

export type CardPropsType = {
  id: string;
  styleVariant?: variantCardTypes;
  image?: ImgDataAttributesType;
  title?: string;
  description?: string;
  href?: string;
  list?: any;
  createdAt: string;
  button?: any;
};

export type ImgDataAttributesType = {
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: any;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: any | null;
  createdAt: string;
  updatedAt: string;
};

export type ImgDataType = {
  id: number;
  attributes: ImgDataAttributesType;
};
