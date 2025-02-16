import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ProductResolver } from '../resolvers/product.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      playground: true,
    }),
  ],
  providers: [ProductResolver],
})
export class AppModule {} 