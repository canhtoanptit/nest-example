import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserRepository } from './user.repository';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { NextFunction } from 'express';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [UserModule, ProductModule, DatabaseModule],
  controllers: [AppController, UserController],
  providers: [AppService, UserRepository, UserService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes(AppController)
      .apply((req: Request, res: Response, next: NextFunction) => {
        console.log('other function');
        next();
      })
      .forRoutes('*');
  }
}
