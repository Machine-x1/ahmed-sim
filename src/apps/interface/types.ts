export interface Product {
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
  item: Product;
}
export interface StateProps {
  shopping: {
    productData: [];
    userInfo: {};
    orderData: {
      order: Product[];
    };
  };
}
