/* eslint-disable @typescript-eslint/consistent-type-imports */
export interface ProductType {
  length: number;
  map(
    arg0: (item: {
      _id: import('react').Key | null | undefined;
    }) => import('react').JSX.Element
  ): import('react').ReactNode;
  _id: string;
  name: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
  price: number;
  images: string[];
  category: string;
  __v: number;
  createdAt: string;
  updatedAt: string;
  slug: string;
}

export interface ItemProps {
  item: ProductType;
}
export interface StateProps {
  shopping: {
    productData: [];
    userInfo: {};
    orderData: {
      order: ProductType[];
    };
  };
}
