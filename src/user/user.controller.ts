import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get()
  async getBoard(): Promise<UserEntity[]> {

    return await this.userService.fildAll();
  }

  @Post('save')
  save(@Body() userEntity: UserEntity) {
    this.userService.save();
  }

  @Put()
  update(@Body() userEntity: UserEntity) {
    this.userService.update(userEntity);
  }

  @Delete(':id')
  delete(@Body() id: number) {
    this.userService.delete(id);
  }
}
