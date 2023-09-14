import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(UserRepository)
    private userRepository: Repository<UserEntity>) { }

  update(userEntity: UserEntity) {

  }

  delete(id: number) {
    throw new Error('Method not implemented.');
  }

  async save(userEntity: UserEntity) {
    const user = {
      name: 'test'
    }
    await this.userRepository.save(user);
  }


  async getUser(id: number): Promise<UserEntity> {
    const user = await this.userRepository.findOneBy({ id: id });
    return user;
  }
}
