import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { Cart } from './entities/cart.entity';
import { TypeOrmModule } from 'node_modules/@nestjs/typeorm/dist/typeorm.module';

@Module({
  controllers: [CartController],
  providers: [CartService],
    imports: [TypeOrmModule.forFeature([Cart])],

})
export class CartModule {}
