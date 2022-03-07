import { ApiProperty } from "@nestjs/swagger";
import { modelOptions, prop } from "@typegoose/typegoose";
import { CommentPostModel } from "./commentPost.model";
import { UserModul } from "./user.model";

@modelOptions({
    schemaOptions: {
        timestamps: true
    }
})
export class CommentModel{
    @ApiProperty({ description: '评论用户', example: UserModul })
    @prop({type: ()=> UserModul})
    user: UserModul
    @ApiProperty({ description: '评论内容', example: '评论内容' })
    @prop()
    content: string
}