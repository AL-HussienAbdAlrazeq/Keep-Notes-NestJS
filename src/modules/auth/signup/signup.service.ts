import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/Core/schemas/user.schema';
import { SignupDto } from '../DTO/auth.dto';

@Injectable()
export class SignupService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}
  signup = async (user: SignupDto) => {
    await this.userModel.insertMany(user);
    return { message: 'Created Successfully', user };
  };
}
