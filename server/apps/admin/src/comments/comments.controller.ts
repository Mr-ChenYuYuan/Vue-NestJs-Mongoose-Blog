import { CommentModel } from '@libs/db/models/comment.model';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { InjectModel } from 'nestjs-typegoose';
import { Crud } from 'nestjs-mongoose-crud'

@Crud({
    model: CommentModel
})
@Controller('comments')
@ApiTags('评论')
export class CommentsController {
    constructor(@InjectModel(CommentModel) private readonly model: ModelType<CommentModel>){}
}