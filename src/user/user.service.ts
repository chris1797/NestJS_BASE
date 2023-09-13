import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,) { }

  update(userEntity: UserEntity) {

  }

  delete(id: number) {
    throw new Error('Method not implemented.');
  }

  save(userEntity: UserEntity) { }

  getUser(): any {
    const name = 'chris';
    const userEntity = new UserEntity();

    userEntity.getId;
  }
}
