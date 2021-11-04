import { ProductDto, IProduct } from './product.model';
import { Product } from './product.schema';

export default {
  async getAll(): Promise<ProductDto[]> {
    const products: IProduct[] | void = await Product.find().catch(console.log);
    return (products || []).map((product: IProduct) => ({
      id: product.id,
      name: product.name,
      description: product.description,
      categories: product.categories,
      coverImage: product.coverImage,
      inventory: product.inventory,
    }));
  },
};
