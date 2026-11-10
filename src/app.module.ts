import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './category/category.module';
import { RoleModule } from './role/role.module';
import { UserModule } from './user/user.module';
import { OrderModule } from './order/order.module';
import { ProductModule } from './product/product.module';
import { CartModule } from './cart/cart.module';
import { ImageModule } from './image/image.module';

@Module({
  imports: [CategoryModule, RoleModule, UserModule, OrderModule, ProductModule, CartModule, ImageModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
