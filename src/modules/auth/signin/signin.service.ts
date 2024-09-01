import * as bcrypt from 'bcrypt';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/Core/schemas/user.schema';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from '../constants/constants';
import { SigninDto } from '../DTO/auth.dto';


@Injectable()
export class SigninService {
    constructor(@InjectModel(User.name) private userModel: Model<User> , private _jwtService: JwtService) {}
    signin=async (user:SigninDto)=>{
        let isUser:any = await this.userModel.findOne({email : user.email})
        if(!(isUser && bcrypt.compareSync(user.password , isUser.password))){
            throw new HttpException("Incorrect email or password" , HttpStatus.UNAUTHORIZED )
        }
        const token = this._jwtService.sign({name:isUser.name , userId : isUser._id} , jwtConstants)
        return {message:"Success" , token:token}
    }
}
