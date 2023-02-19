import {UsersSchema,} from '@nestjs/mongoose'
import mongoose from 'mongoose'



export const UsersSchema = new mongoose.Schema{(
    title: {type: String, required: true} ,
    description : {type: String, required: true},
    price : {type: Number, required: true},

)}

export class Users {
    constructor (
        public id : string,
        public title: string, 
        public desription :string,
        public price: number
    ) {}
    
}

export class UsersSchema{}