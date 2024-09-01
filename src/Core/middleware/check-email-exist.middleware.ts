import * as bcrypt from 'bcrypt';
import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Request, Response } from 'express';
import { User } from '../schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class CheckEmailExistMiddleware implements NestMiddleware {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}
   async use(req: Request, res: Response, next: () => void) {
    let isUserExist = await this.userModel.findOne({ email: req.body.email });
    if (isUserExist)
      throw new HttpException('Email already exist', HttpStatus.CONFLICT);
    req.body.password = bcrypt.hashSync(req.body.password, 8);
    req.body.rePassword = bcrypt.hashSync(req.body.password, 8);

    next();
  }
}
