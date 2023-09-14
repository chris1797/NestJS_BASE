import { EntityRepository, DataSource, Repository } from "typeorm";
import { UserEntity } from "./user.entity";
import { Injectable } from "@nestjs/common";

@Injectable()
export class UserRepository extends Repository<UserEntity> {

    constructor(private dataSource: DataSource) {
        super(UserEntity, dataSource.createEntityManager())
    }
}