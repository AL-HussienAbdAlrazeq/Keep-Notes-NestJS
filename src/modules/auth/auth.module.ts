import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { SigninService } from './signin/signin.service';
import { SignupService } from './signup/signup.service';
import { SigninController } from './signin/signin.controller';
import { SignupController } from './signup/signup.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/Core/schemas/user.schema';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { jwtConstants } from './constants/constants';
import { CheckEmailExistMiddleware } from 'src/Core/middleware/check-email-exist.middleware';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '5m' },
    }),
  ],
  providers: [SigninService, SignupService, JwtService],
  controllers: [SigninController, SignupController],
})
export class AuthModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
      consumer.apply(CheckEmailExistMiddleware).exclude().forRoutes(SignupController)
  }
}
