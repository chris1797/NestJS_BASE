import { DataSource, getConnection, Repository, UpdateResult } from 'typeorm';
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
}
