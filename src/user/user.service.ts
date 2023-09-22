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
    if (!id) throw new Error('Can not find User data.');
    return await this.userRepository.delete(id);
  }

  async save() {
    const user = new UserEntity();
    // const today = dayjs();
    user.name = 'chris'
    user.created_at = '2023-09-21'
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
