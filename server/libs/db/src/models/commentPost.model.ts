import { ApiProperty } from "@nestjs/swagger";
import { modelOptions, prop } from "@typegoose/typegoose";
import { CommentModel } from "./comment.model";
import { PostModel } from "./post.model";

@modelOptions({
    schemaOptions: {
        timestamps: true
    }
})
export class CommentPostModel{
    @ApiProperty({ description: '帖子', example: PostModel })
    @prop({ type: ()=> PostModel })  // @typegoose/typegoose 跟新之后 弃用了 arrayProp
    post: PostModel
    @ApiProperty({ description: '评论', example: CommentModel })
    @prop({ type: ()=> CommentModel })
    comment: CommentModel[]
}