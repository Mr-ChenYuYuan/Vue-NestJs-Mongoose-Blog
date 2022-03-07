import { DbModule } from '@libs/db';
import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { CommentsModule } from './comments/comments.module';
import { CommentPostsModule } from './comment-posts/comment-posts.module';

@Module({
  imports: [
    DbModule,
    UsersModule,
    PostsModule,
    CommentsModule,
    CommentPostsModule
  ],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
