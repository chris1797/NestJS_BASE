import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import * as dayjs from 'dayjs';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository,
  ) {}

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

  async save() {
    const user = new User();
    let today = dayjs().format('YYYY-MM-DD');
    user.name = 'chris';
    user.created_at = today;

    const result = await this.userRepository.save(user);
    if (!result) throw new Error('Save fail');
    return 'Save success';
  }

  async getUser(id: number): Promise<User> {
    return await this.userRepository.findOneBy({ id: id });
  }

  async fildAll(): Promise<User[]> {
    return await this.userRepository.find();
  }
}
