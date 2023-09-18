import { Module } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { userProviders } from './user/user.providers';
import { UserEntity } from './user/user.entity';
import { typeOrmConfig } from './configs/typeorm.config';
import { UserController } from './user/user.controller';

// 프로젝트의 Root Module
@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig), UserModule,
  ],
  // controllers: [UserController],
  // providers: [...userProviders],
})
export class AppModule {
  // constructor(private dataSource: DataSource) { }
}
