// $ nest g module board 로 모듈 생성 가능
import { Module } from '@nestjs/common';
import { CreateBoardDto, BoardEntity } from './user.entity';
import { UserService } from './user.service';

@Module({
  imports: [CreateBoardDto, BoardEntity],
  controllers: [UserService],
  providers: [],
})
export class UserModule {}
