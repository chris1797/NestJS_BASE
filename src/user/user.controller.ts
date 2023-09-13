import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get()
  getBoard(): string {
    return this.userService.getUser();
  }

  @Post()
  save(@Body() userEntity: UserEntity) {
    this.userService.save(userEntity);
  }

  @Put()
  update(@Body() userEntity: UserEntity) {
    this.userService.update(userEntity);
  }

  @Delete()
  delete(@Body() id: number) {
    this.userService.delete(id);
  }
}
