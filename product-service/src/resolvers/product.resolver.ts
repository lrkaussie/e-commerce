import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ProductService } from '../services/product.service';
import { Product } from '../entities/product.entity';

@Resolver(() => Product)
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  @Query(() => [Product])
  async products(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @Query(() => Product, { nullable: true })
  async product(@Args('id') id: number): Promise<Product> {
    return this.productService.findOne(id);
  }

  @Mutation(() => Product)
  async createProduct(@Args('product') product: Product): Promise<Product> {
    return this.productService.create(product);
  }

  @Mutation(() => Product)
  async updateProduct(@Args('id') id: number, @Args('product') product: Product): Promise<Product> {
    return this.productService.update(id, product);
  }

  @Mutation(() => Boolean)
  async deleteProduct(@Args('id') id: number): Promise<boolean> {
    await this.productService.remove(id);
    return true;
  }
} 