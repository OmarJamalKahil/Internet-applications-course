import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { TypeOrmModule } from 'node_modules/@nestjs/typeorm/dist/typeorm.module';
import { Category } from './entities/category.entity';

@Module({
  controllers: [CategoryController],
  providers: [CategoryService],
    imports: [TypeOrmModule.forFeature([Category])],

})
export class CategoryModule {}
