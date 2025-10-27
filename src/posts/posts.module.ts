import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesController } from './controllers/categories.controller';
import { PostsController } from './controllers/posts.controller';
import { Category } from './entities/category.entity';
import { Post } from './entities/post.entity';
import { CategoriesService } from './services/categories.service';
import { PostsService } from './services/posts.service';

@Module({
  imports: [TypeOrmModule.forFeature([Post, Category])],
  controllers: [PostsController, CategoriesController],
  providers: [PostsService, CategoriesService],
  exports: [PostsService, CategoriesService],
})
export class PostsModule {}
