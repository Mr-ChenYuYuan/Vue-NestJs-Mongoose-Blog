import { PostModel } from '@libs/db/models/post.model';
import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { InjectModel } from 'nestjs-typegoose';
import { Crud } from 'nestjs-mongoose-crud'

@Crud({
    model: PostModel
})
@Controller('posts')
@ApiTags('帖子')
export class PostsController {
    constructor(@InjectModel(PostModel) private readonly model: ModelType<PostModel>){}

    @Get('/option')
    option(){
        return {
            title: '帖子管理',
            column: [
                { prop: 'title', label: '帖子标题' },
                { prop: 'cover', label: '帖子封面图' },
            ]
        }
    }
}
