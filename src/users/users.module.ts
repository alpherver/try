import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import { UsersSchema } from "./users.schema";
import { UsersService } from './users.service';





 @Module({
    imports: [
        MongooseModule.forFeature([{name: 'Users', schema: UsersSchema}])
    ],
    controllers: [],
    providers: [UsersService],
 })

 export class UsersModule {}
