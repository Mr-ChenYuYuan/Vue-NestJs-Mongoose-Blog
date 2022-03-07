import { CommentPostModel } from '@libs/db/models/commentPost.model';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { InjectModel } from 'nestjs-typegoose';
import { Crud } from 'nestjs-mongoose-crud'

@Crud({
    model: CommentPostModel
})
@Controller('comment-posts')
@ApiTags('帖子评论管理')
export class CommentPostsController {
    constructor(@InjectModel(CommentPostModel) private readonly model: ModelType<CommentPostModel>){}
}
