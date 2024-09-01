import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';
import { jwtConstants } from 'src/modules/auth/constants/constants';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private _JwtService: JwtService) {}
  async canActivate(
    context: ExecutionContext,
  ):  Promise<boolean> {
    const request = context.switchToHttp().getRequest()
    const {token} = request.headers
    if(!token){
       throw new UnauthorizedException()
    }
    try {
      const payload = this._JwtService.verify(token , {secret:jwtConstants.secret})
      request.user = payload
    } catch (error) {
      throw new UnauthorizedException();
    }
    return true;
  }
}
