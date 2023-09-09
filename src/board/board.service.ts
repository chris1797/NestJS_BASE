import { Injectable } from '@nestjs/common';
import { BoardEntity, CreateBoardDto } from './board.dto';
import { log } from 'console';

@Injectable()
export class BoardService {

    getBoard(): any {

        const title = 'test title'
        const content = 'test'
        const board = new CreateBoardDto(title, content);
        // log('board :::', board)

        board.setContent = '123'
        board.getBoardNo
    }
}