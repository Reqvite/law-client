export interface DataWithAttributesI<T> {
  data: {
    id: number;
    attributes: T;
  };
}
