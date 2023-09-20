import { StaticImageData } from "next/image";
import productThumbnail1 from "../../../assets/images/image-product-1-thumbnail.jpg";

export type ProductType = {
  id: number;
  image: StaticImageData;
  name: string;
  price: number;
  quantity: number;
  totalPrice: number;
};
export const products: ProductType[] = [
  {
    id: 1,
    image: productThumbnail1,
    name: "Fall Limited Edition Sneakers",
    price: 125.0,
    quantity: 1,
    totalPrice: 125.0,
  },
];
