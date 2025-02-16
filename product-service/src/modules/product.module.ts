import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductService } from '../services/product.service';
import { ProductResolver } from '../resolvers/product.resolver';
import { Product } from '../entities/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  providers: [ProductService, ProductResolver],
})
export class ProductModule {} 