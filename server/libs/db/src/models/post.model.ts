import { ApiProperty } from "@nestjs/swagger";
import { modelOptions, prop, Ref } from "@typegoose/typegoose";
import { CommentPostModel } from "./commentPost.model";

// 给这个模型添加 两个字段 创建字段 的时间 和 跟新字段的 时间 
@modelOptions({
    schemaOptions: {
        timestamps: true // 为 true 才会开启 这两个字段
    }
})
export class PostModel{
    @ApiProperty({ description: '帖子标题', example: '帖子标题' })
    @prop() // 只有加上了  @prop() 代码执行 是才会吧 这个赋值到数据库中 会告诉 title 为数据库字段名称
    title: string // 帖子标题
    @ApiProperty({ description: '帖子内容', example: '帖子内容' })
    @prop()
    body: string // 帖子内容
    @ApiProperty({ description: '帖子封面图', example: '帖子封面图' })
    @prop()
    cover: string // 帖子封面图
}