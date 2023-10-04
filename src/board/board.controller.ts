import { Body, Controller, Injectable, Post } from '@nestjs/common';
import { BoardService } from './board.service';
import { Board } from './board.entity';

@Controller('board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Post('save')
  async save(@Body() board: Board) {}
}
