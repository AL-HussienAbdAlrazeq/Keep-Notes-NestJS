import { Body, Controller, Post } from '@nestjs/common';
import { SigninService } from './signin.service';
import { SigninDto } from '../DTO/auth.dto';

@Controller('auth/signin')
export class SigninController {
  constructor(private _SigninService: SigninService) {}

  @Post()
  signin(@Body() body: SigninDto) {
    return this._SigninService.signin(body);
  }
}
