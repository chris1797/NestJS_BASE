import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BoardRepository } from './board.repository';
import { isEmpty } from '@nestjs/common/utils/shared.utils';
import * as dayjs from 'dayjs';
import { Board } from './board.entity';

@Injectable()
export class BoardService {
  constructor(
    @InjectRepository(BoardRepository)
    private readonly boardRepository: BoardRepository,
  ) {}

  async insert(board: Board) {
    if (isEmpty(board)) throw new Error('Can not find User data');

    if (board.id) {
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
}
