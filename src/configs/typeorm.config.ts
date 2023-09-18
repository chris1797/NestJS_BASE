import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'ijaehun',
    password: '',
    database: 'do_develop',
    entities: [__dirname + '/../**/*.entity{.ts,.js}',],
    synchronize: true,
};