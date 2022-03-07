import { Global, Module } from '@nestjs/common';
import { DbService } from './db.service';
import { TypegooseModule } from 'nestjs-typegoose'
import { UserModul } from './models/user.model';
import { PostModel } from './models/post.model';
import { CommentModel } from './models/comment.model';
import { CommentPostModel } from './models/commentPost.model';

const models = TypegooseModule.forFeature([
  UserModul,PostModel,CommentModel,CommentPostModel
])


@Global()
@Module({
  imports: [
    TypegooseModule.forRoot('mongodb://localhost:27017/vnm-blog'),
    models
  ],
  providers: [DbService],
  exports: [DbService,models],
})
export class DbModule {}
