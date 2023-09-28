import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { UserEntity } from './user.entity';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getUsersAll(): Promise<UserEntity[]> {
    return await this.userService.fildAll();
  }

  @Get('/:id')
  async getUser(@Param('id') id: number) {
    return await this.userService.getUser(id);
  }

  // @HttpCode(300) 상태코드 추가
  @Post('save')
  async save(@Body() userEntity: UserEntity): Promise<string> {
    return await this.userService.save();
  }

  @Put('/:id/:name')
  async update(
    @Param('id') id: number,
    @Param('name') name: string,
  ): Promise<string> {
    console.log('id :::', id);
    console.log('name :::', name);
    return await this.userService.update(id, name);
  }

  @Delete('/:id')
  async delete(@Param('id', ParseIntPipe) id: number): Promise<string> {
    return await this.userService.delete(id);
  }
}
