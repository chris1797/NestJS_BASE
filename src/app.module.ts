import { Module } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormconfig } from './configs/typeORMconfig';
import { UserModule } from './user/user.module';

// 프로젝트의 Root Module
@Module({
  imports: [
    TypeOrmModule.forRoot(ormconfig),

    UserModule
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) { }
}
