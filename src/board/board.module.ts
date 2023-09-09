/**
 * $ nest g module board 로 모듈 생성 가능
 */

import { Module } from '@nestjs/common';
import { CreateBoardDto, BoardEntity } from './board.dto';

@Module({
    imports: [CreateBoardDto, BoardEntity]
})
export class BoardModule { }
