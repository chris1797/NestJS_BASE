import { Module } from '@nestjs/common';
import { Board } from './board.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Board])],
})
export class BoardModule {}
