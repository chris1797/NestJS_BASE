import { log } from 'console';
import { CreateBoardDto } from './user/user.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
