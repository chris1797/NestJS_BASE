// $ nest g module board 로 모듈 생성 가능
import { Module } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { DatabaseModule } from 'src/configs/database.module';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { userProviders } from './user.providers';
import { UserRepository } from './user.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService]
})
export class UserModule { }
