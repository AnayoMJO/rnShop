import { ImageSourcePropType } from 'react-native';
import { Category } from './category';

export type Product = {
  id: number;
  title: string;
  slug: string;
  imagesUrl: (ImageSourcePropType | string)[];
  price: number;
  heroImage: ImageSourcePropType | string;
  category: Omit<Category, 'products'>;
  maxQuantity: number;
};
