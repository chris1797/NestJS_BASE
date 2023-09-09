import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { BoardService } from './board/board.service';

@Controller('/')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly boardService: BoardService) { }

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('board')
  getBoard(): void {
    return this.boardService.getBoard();
  }
}
