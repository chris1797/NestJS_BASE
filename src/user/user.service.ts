import { Injectable, Inject } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>) {

  }

  update(userEntity: UserEntity) {

  }

  async delete(id: number) {
    throw new Error('Method not implemented.');
  }

  async save(userEntity: UserEntity) {
    const today = new Date()
    const formatToday = today.toString
    const user: UserEntity = {
      name: 'chris',
      // created_at: formatToday
    }
    await this.userRepository.save(user);
  } x


  async getUser(id: number): Promise<UserEntity> {
    const user = await this.userRepository.findOneBy({ id: id });
    return user;
  }

  async fildAll(): Promise<UserEntity[]> {
    return this.userRepository.find()
  }

}
