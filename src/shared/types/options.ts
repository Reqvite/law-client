import {ReactNode} from 'react';

export interface LabelOptionsI {
  label: ReactNode;
  value: number | string;
}

export type LabelOptionsWithId = LabelOptionsI & {
  _id: string;
};

export interface TabOptionsI {
  label: string;
  value: string;
  count?: number;
}
