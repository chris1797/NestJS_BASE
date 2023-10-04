import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Board extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column() title: string;
  @Column() content: string;
  @Column() regDate: Date;
  @Column() user_id: User;
}
