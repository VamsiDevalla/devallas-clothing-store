import { Document } from 'mongoose';

export interface ProductDto {
  id: string;
  name: string;
  description?: string;
  categories: string[];
  coverImage: string;
  inventory: IProductVariant[];
}

export interface IProduct extends Document {
  name: string;
  description?: string;
  categories: string[];
  coverImage: string;
  inventory: IProductVariant[];
}

export interface IProductVariant {
  size: string;
  quantity: number;
  price: 9.99;
  availableColors: [
    {
      color: color;
      imageUrls: string[];
    },
  ];
}
