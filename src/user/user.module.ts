// $ nest g module board 로 모듈 생성 가능
import { Module } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])], // 외부 모듈을 가져와 현재 모듈에 포함시킴
  controllers: [UserController], // 현재 모듈에 속한 controller 클래스들
  providers: [UserService, UserRepository], // DI에 사용, service, repository 등
  // exports: [UserService], // 현재 모듈에 선언된 providers, controllers, imports들 일부를 외부로 공개
})
export class UserModule {}
