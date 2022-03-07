import { UserModul } from '@libs/db/models/user.model';
import { Controller } from '@nestjs/common';
import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { IsNotEmpty } from 'class-validator';
import { Crud } from 'nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose';

class userDto{
    @ApiProperty({ description: '用户名', example: '用户名' })
    name: string // 用户名字
    @ApiProperty({ description: '用户头像', example: '用户头像' })
    avatat: string // 用户头像
    @ApiProperty({ description: '用户账号', example: '用户账号' })
    account: string // 用户账号
    @ApiProperty({ description: '用户密码', example: '用户密码' })
    password: string // 用户密码
}


@Crud({
    model: UserModul,
    routes: {
        create: {
            dto: userDto
        },
        update: {
            dto: userDto
        }
    }
})
@ApiTags('用户')
@Controller('users')
export class UsersController {
    constructor(
        @InjectModel(UserModul) private readonly model: ModelType<UserModul>
    ){}
}

