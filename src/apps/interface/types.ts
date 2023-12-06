export interface ProductType {
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
