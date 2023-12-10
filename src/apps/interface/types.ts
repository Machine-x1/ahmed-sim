export interface ProductType {
  length: number;
  map(arg0: (item: { _id: import("react").Key | null | undefined; }) => import("react").JSX.Element): import("react").ReactNode;
  _id: string;
  name: string;
  description: string;
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
