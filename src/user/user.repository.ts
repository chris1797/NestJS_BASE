import { DataSource, getConnection, Repository, UpdateResult } from 'typeorm';
import { UserEntity } from './user.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository extends Repository<UserEntity> {
  constructor(private dataSource: DataSource) {
    super(UserEntity, dataSource.createEntityManager());
  }

  async updateUser(id: number, name: string): Promise<UpdateResult> {
    return await this.dataSource
      .createQueryBuilder()
      .update(UserEntity)
      .set({ name: name })
      .where('id = :id', { id: id })
      .execute();
  }
}
