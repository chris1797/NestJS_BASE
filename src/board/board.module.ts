// $ nest g module board 로 모듈 생성 가능
import { Module } from '@nestjs/common';
import { CreateBoardDto, BoardEntity } from './board.dto';
import { BoardService } from './board.service';

@Module({
    imports: [CreateBoardDto, BoardEntity],
    controllers: [BoardService],
    providers: []
})
export class BoardModule { }
