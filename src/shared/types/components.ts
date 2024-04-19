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

export interface ButtonLink {
  id: number;
  href?: string;
  newTab?: boolean;
  label: string;
  variant: string;
  isAnchor?: boolean;
}

export interface ButtonType {
  id: string;
  href?: string;
  text: string;
  variant: string;
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
