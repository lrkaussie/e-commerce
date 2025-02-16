import { Test, TestingModule } from '@nestjs/testing';
import { ProductResolver } from '../src/resolvers/product.resolver';

describe('ProductResolver', () => {
  let resolver: ProductResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductResolver],
    }).compile();

    resolver = module.get<ProductResolver>(ProductResolver);
  });

  it('should return "Product Catalog Service is running"', () => {
    expect(resolver.getProduct()).toBe('Product Catalog Service is running');
  });
}); 