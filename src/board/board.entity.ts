import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../user/user.entity';

@Entity()
export class Board extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column() title: string;
  @Column() content: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  // Board(*) <-> User(1)
  @ManyToOne(() => User, (user) => user.boards, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  user: User;
}
