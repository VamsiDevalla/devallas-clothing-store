import { model, Schema, Model, Document } from 'mongoose';

export type IProduct = Document;

const ProductSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: false },
  categories: { type: [String], required: true },
});

export const Product: Model<IProduct> = model('Product', ProductSchema);
