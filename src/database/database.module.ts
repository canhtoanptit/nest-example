import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from '../product/entities/product.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 33066,
      username: 'root',
      password: 'my-secret-pw',
      database: 'test',
      entities: [Product],
      synchronize: true,
    }),
  ],
})
export class DatabaseModule {}
