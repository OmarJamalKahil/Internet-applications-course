import { Module } from '@nestjs/common';
import { ImageService } from './image.service';
import { ImageController } from './image.controller';
import { TypeOrmModule } from 'node_modules/@nestjs/typeorm/dist/typeorm.module';
import {Image} from "src/image/entities/image.entity";


@Module({
  controllers: [ImageController],
  providers: [ImageService],
    imports: [TypeOrmModule.forFeature([Image])],
  
})
export class ImageModule {}
