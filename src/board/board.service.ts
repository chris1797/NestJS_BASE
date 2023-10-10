import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BoardRepository } from './board.repository';
import { isEmpty } from '@nestjs/common/utils/shared.utils';
import * as dayjs from 'dayjs';
import { Board } from './board.entity';
import { DeleteResult } from 'typeorm';

@Injectable()
export class BoardService {
  constructor(
    @InjectRepository(BoardRepository)
    private readonly boardRepository: BoardRepository,
  ) {}

  async insert(board: Board) {
    if (!board) throw new Error('Can not find Board data');

    if (board.user) {
      const { id, ...newBoard } = board;
      const result = await this.boardRepository.update(
        { id: board.id },
        { ...newBoard },
      );
      return !!result.affected;
    }

    return await this.boardRepository.insert(board);
  }

  async detail(id: number): Promise<Board> {
    if (!id || id < 1) throw new Error('Can not find Id');
    return await this.boardRepository.findOneBy({ id: id });
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.boardRepository.delete(id);
  }
}
