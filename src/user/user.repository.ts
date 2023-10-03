import {
  DataSource,
  getConnection,
  Repository,
  UpdateResult,
  InsertResult,
} from 'typeorm';
import { User } from './user.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository extends Repository<User> {
  constructor(private dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }

  async updateUser(id: number, name: string): Promise<UpdateResult> {
    return await this.dataSource
      .createQueryBuilder()
      .update(User)
      .set({ name: name })
      .where('id = :id', { id: id })
      .execute();
  }

  async saveUser(user: User): Promise<InsertResult> {
    return await this.dataSource
      .createQueryBuilder()
      .insert()
      .into(User)
      .execute();
  }
}
