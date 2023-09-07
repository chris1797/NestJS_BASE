/**
 * $ nest g module board 로 모듈 생성 가능
 */

import { Module } from '@nestjs/common';
import { CreateBoardDto } from './board.dto';

@Module({
    imports: [CreateBoardDto]
})
export class BoardModule { }
