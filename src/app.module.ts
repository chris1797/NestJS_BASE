import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataSource } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormconfig from './ormconfig';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config'

// 프로젝트의 Root Module
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(ormconfig),

    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) { }
}
