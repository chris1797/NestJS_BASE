import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import { UserEntity } from 'src/user/user.entity'
import * as dotenv from 'dotenv'
import { DataSource } from 'typeorm'

dotenv.config()

export const databaseProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async () => {
            const dataSource = new DataSource({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'ijaehun',
                password: '',
                database: 'do_develop',
                entities: [__dirname + '/../**/*.entity{.ts,.js}',],
                synchronize: true, // don't use production env
            })
            return dataSource.initialize()
        }
    }
]
