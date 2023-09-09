import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoardModule } from './board/board.module';
import { BoardService } from './board/board.service';

// 프로젝트의 Root Module
@Module({
  imports: [BoardModule],
  controllers: [AppController],
  providers: [AppService, BoardService],
})
export class AppModule { }
