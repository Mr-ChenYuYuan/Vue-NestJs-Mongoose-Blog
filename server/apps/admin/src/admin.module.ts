import { DbModule } from '@libs/db';
import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { CommentsModule } from './comments/comments.module';
import { CommentPostsModule } from './comment-posts/comment-posts.module';
import { MulterModule } from '@nestjs/platform-express';

const mao = require('multer-aliyun-oss')

@Module({
  imports: [
    MulterModule.register({
      // dest: 'uploads' // 表示目标地址
      storage: mao({
          config: {
              region: 'oss-cn-hangzhou',
              accessKeyId: 'LTAI5t7DJt1no4sYVptpSE4U',
              accessKeySecret: 'HJCabntwCVWWje0iXzcOrbCZwgn8gu',
              bucket: 'vue-cyy-blog',
          }
      })
    }),
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
