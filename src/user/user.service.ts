import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';

@Injectable()
export class UserService {
  save(userEntity: UserEntity) {}

  getUser(): any {
    const name = 'chris';
    const userEntity = new UserEntity();

    userEntity.getId;
  }
}
