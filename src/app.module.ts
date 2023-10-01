import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { typeOrmConfig } from './configs/typeorm.config';

// Application Root Module
@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), UserModule],
  // controllers: [UserController],
  // providers: [...userProviders],
})
export class AppModule {
  // constructor(private dataSource: DataSource) { }
}
