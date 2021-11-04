import { model, Schema, Model } from 'mongoose';
import { IProduct } from './product.model';

const ProductSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: false },
  categories: { type: [String], required: true },
  coverImage: { type: [String], required: false },
  inventory: {
    type: [
      {
        size: { type: String, required: true },
        quantity: { type: Number, required: true },
        price: { type: Number, required: true },
        availableColors: {
          type: [
            {
              color: { type: String, required: true },
              imageUrls: { type: [String], required: false },
            },
          ],
          required: true,
        },
      },
    ],
    required: false,
  },
});

export const Product: Model<IProduct> = model('Product', ProductSchema);
