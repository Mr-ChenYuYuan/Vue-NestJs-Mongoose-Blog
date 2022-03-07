import { Module } from '@nestjs/common';
import { CommentPostsController } from './comment-posts.controller';

@Module({
  controllers: [CommentPostsController]
})
export class CommentPostsModule {}
