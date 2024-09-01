import { IsEmail, IsInt, IsString, IsStrongPassword, MaxLength, MinLength } from "class-validator";


export class SignupDto {
  @MaxLength(20)
  @MinLength(3)
  name: string;

  @IsEmail()
  email: string;

  @IsStrongPassword()
  password: string;

  @IsStrongPassword()
  rePassword:string

  @IsInt()
  age:number
  @IsString()
  gender:string
}


export class SigninDto {
  @IsEmail()
  email: string;

  @IsStrongPassword()
  password: string;
}