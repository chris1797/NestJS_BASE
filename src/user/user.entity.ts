import { readonly, setLog } from './user.decorators';
import { Column, Entity, PrimaryGeneratedColumn, Timestamp } from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  @readonly(true)
  private id: number;

  @Column()
  private name: string;

  @Column()
  private created_at: Timestamp;

  get getId(): number {
    return this.id;
  }

  get getName(): string {
    return this.name;
  }
}
