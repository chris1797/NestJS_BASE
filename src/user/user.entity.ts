import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity() // 해당 클래스는 엔티티임을 선언
export class UserEntity extends BaseEntity {


  @PrimaryGeneratedColumn() // primary key
  id: number;

  @Column()
  name: string;

  @Column()
  created_at: string;

  // get getId(): number {
  //   return this.id;
  // }

  // get getName(): string {
  //   return this.name;
  // }
  setCreated_at(created_at: string): void {
    this.created_at = created_at
  }
}
