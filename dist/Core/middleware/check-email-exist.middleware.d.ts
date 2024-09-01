import { NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { User } from '../schemas/user.schema';
import { Model } from 'mongoose';
export declare class CheckEmailExistMiddleware implements NestMiddleware {
    private userModel;
    constructor(userModel: Model<User>);
    use(req: Request, res: Response, next: () => void): Promise<void>;
}
