import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Board } from '../board/board.entity';

@Entity() // 해당 클래스는 엔티티임을 선언
export class User extends BaseEntity {
  @PrimaryGeneratedColumn() // primary key
  id: number;

  @Column()
  name: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  // User(1) <-> Board(*)
  @OneToMany((type) => Board, (board) => board.user)
  boards!: Board[];
}
