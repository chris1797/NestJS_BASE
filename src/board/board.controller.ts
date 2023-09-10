import { CreateBoardDto } from './board.dto';
import { BoardService } from './board.service';
import { Body, Controller, Get, Post } from "@nestjs/common";


@Controller('board')
export class BoardController {
    constructor(
        private readonly boardService: BoardService
    ) { }

    @Get()
    getBoard(): string {
        return this.boardService.getBoard();
    }

    @Post()
    save(@Body() createBoardDto: CreateBoardDto) {
        this.boardService.save(createBoardDto);
    }
}