import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT || 4000;
  await app.listen(PORT);
  Logger.log(`Product Catalog Service is running on port ${PORT}`);
}

bootstrap(); 