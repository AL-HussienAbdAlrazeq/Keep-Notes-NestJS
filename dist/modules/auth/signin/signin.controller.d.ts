import { SigninService } from './signin.service';
import { SigninDto } from '../DTO/auth.dto';
export declare class SigninController {
    private _SigninService;
    constructor(_SigninService: SigninService);
    signin(body: SigninDto): Promise<{
        message: string;
        token: string;
    }>;
}
