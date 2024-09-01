import { Model } from 'mongoose';
import { User } from 'src/Core/schemas/user.schema';
import { SignupDto } from '../DTO/auth.dto';
export declare class SignupService {
    private userModel;
    constructor(userModel: Model<User>);
    signup: (user: SignupDto) => Promise<{
        message: string;
        user: SignupDto;
    }>;
}
