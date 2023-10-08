import {
  Body,
  Controller,
  Delete,
  Injectable,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { BoardService } from './board.service';
import { Board } from './board.entity';
import { DeleteResult } from 'typeorm';

@Controller('board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Post('save')
  async save(@Body() board: Board) {
    return await this.boardService.insert(board);
  }

  @Delete('/:id')
  async delete(@Param('id', ParseIntPipe) id: number): Promise<DeleteResult> {
    return await this.boardService.delete(id);
  }
}
