import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import * as dotenv from 'dotenv'

dotenv.config()

export const ormconfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'ijaehun',
    password: '',
    database: 'do_develop',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,

}
