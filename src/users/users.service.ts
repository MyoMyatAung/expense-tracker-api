import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dtos/create-user.dto';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UsersService {
     constructor(
          @InjectModel(User.name) private userModel: Model<UserDocument>
     ) { }

     async findAll(): Promise<User[]> {
          return this.userModel.find().exec();
     }

     async findOne(email: string): Promise<User> {
          return this.userModel.findOne({ email: email }).exec();
     }

     async create(user: CreateUserDto): Promise<User> {
          const createdUser = new this.userModel(user);
          return createdUser.save();
     }

     async update(id: string, user: CreateUserDto): Promise<User> {
          return this.userModel.findByIdAndUpdate(id, user);
     }

     async remove(id: string): Promise<User> {
          return this.userModel.remove({ _id: id });
     }
}
