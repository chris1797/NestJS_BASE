import { log } from 'console';
import { CreateBoardDto } from './board/board.dto';
import { Injectable } from '@nestjs/common';



@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
