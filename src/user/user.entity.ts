import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity() // 해당 클래스는 엔티티임을 선언
export class User extends BaseEntity {
  @PrimaryGeneratedColumn() // primary key
  id: number;

  @Column()
  name: string;

  @Column()
  created_at: string;

  setCreated_at(created_at: string): void {
    this.created_at = created_at;
  }
}
