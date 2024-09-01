import { SignupDto } from '../DTO/auth.dto';
import { SignupService } from './signup.service';
export declare class SignupController {
    private _SignupService;
    constructor(_SignupService: SignupService);
    signup(body: SignupDto): Promise<{
        message: string;
        user: SignupDto;
    }>;
}
