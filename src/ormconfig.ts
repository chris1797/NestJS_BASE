import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import * as dotenv from 'dotenv'

dotenv.config()

const ormconfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    username: 'ijaehun',
    password: '',
    database: 'do_develop',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,

}

export default ormconfig