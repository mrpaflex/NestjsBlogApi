import { Module } from '@nestjs/common';
import { BlogController } from './blog.controller';
import { BlogService } from './blog.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { blogEntity } from 'src/entity/blog.entity';

@Module({
  imports: [TypeOrmModule.forFeature([blogEntity])],
  controllers: [BlogController],
  providers: [BlogService]
})
export class BlogModule {}
