import { Injectable } from '@nestjs/common'
import {InjectModel} from '@nestjs/mongoose'
import { Users } from './users.schema';
import { Model } from 'mongoose';



@Injectable()
export class UsersService{
private users: Users[] = [];

constructor(
    @InjectModel('Users')private readonly usersModel: Model<Users>) {}

 async insertUsers(title: string, desc: string, price:number){
    const newUsers = new this.usersModel({
        title,
        description: desc,
        price,



    });
    const result = await newUsers.save();
    console.log(result);
    return 'usersID';

}
}





