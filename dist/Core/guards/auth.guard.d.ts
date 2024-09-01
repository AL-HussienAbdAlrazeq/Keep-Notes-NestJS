import { CanActivate, ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
export declare class AuthGuard implements CanActivate {
    private _JwtService;
    constructor(_JwtService: JwtService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
