import { modelOptions, prop } from "@typegoose/typegoose"

@modelOptions({
    schemaOptions: { // 给这个模型添加 添加过后不管是 跟新还是创建 就会有 这两个字段
        timestamps: true // 添加时会多一个 创建时间 和 一个 最近跟新的时间 的字段
    }
})
export class UserModul{
    @prop()
    name: string // 用户名字
    @prop()
    avatat: string // 用户头像
    @prop()
    account: string // 用户账号
    @prop()
    password: string // 用户密码
}