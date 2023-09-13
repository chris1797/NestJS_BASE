import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserEntity {

  @PrimaryGeneratedColumn()
  private id: number;

  @Column()
  private name: string;

  @Column()
  private created_at: string;

  get getId(): number {
    return this.id;
  }

  get getName(): string {
    return this.name;
  }
}
