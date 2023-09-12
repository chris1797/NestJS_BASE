import { UserService } from './user.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserEntity } from './user.entity';

@Controller('board')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getBoard(): string {
    return this.userService.getUser();
  }

  @Post()
  save(@Body() userEntity: UserEntity) {
    this.userService.save(userEntity);
  }
}
