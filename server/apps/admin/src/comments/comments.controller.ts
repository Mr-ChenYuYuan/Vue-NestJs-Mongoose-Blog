import { CommentModel } from '@libs/db/models/comment.model';
import { Controller, Get } from '@nestjs/common';
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

    @Get('/option')
    option(){
        return {
            title: '评论管理',
            column: [
                { prop: 'content', label: '评论内容' },
            ]
        }
    }
}