import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import * as dayjs from 'dayjs';
import { isEmpty } from '@nestjs/common/utils/shared.utils';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository,
  ) {}

  async fildAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async getUser(id: number): Promise<User> {
    return await this.userRepository.findOneBy({ id: id });
  }

  async update(id: number, name: string) {
    const result = await this.userRepository.updateUser(id, name);
    if (result.affected < 1) throw new Error('Update fail.');

    return 'Update success';
  }

  async delete(id: number): Promise<string> {
    const result = await this.userRepository.delete(id);
    if (result.affected < 1) throw new Error('User data not found');

    return 'Delete success';
  }

  async insert(user: User) {
    if (isEmpty(user)) throw new Error('Can not find User data');

    // user.name = 'chris';
    // user.createdAt = dayjs().format('YYYY-MM-DD');

    const result = await this.userRepository.insert(user);
    if (!result) throw new Error('Save fail');
    return 'Save success';
  }
}
