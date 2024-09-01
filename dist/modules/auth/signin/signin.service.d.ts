import { Model } from 'mongoose';
import { User } from 'src/Core/schemas/user.schema';
import { JwtService } from '@nestjs/jwt';
import { SigninDto } from '../DTO/auth.dto';
export declare class SigninService {
    private userModel;
    private _jwtService;
    constructor(userModel: Model<User>, _jwtService: JwtService);
    signin: (user: SigninDto) => Promise<{
        message: string;
        token: string;
    }>;
}
