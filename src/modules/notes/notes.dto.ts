import {
  IsEmail,
  IsInt,
  IsMongoId,
  IsOptional,
  IsString,
  IsStrongPassword,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateNotesDto {
  @MaxLength(200)
  @MinLength(5)
  title: string;

  @MaxLength(2000)
  @MinLength(5)
  description: string;

  @IsMongoId()
  createdBy: string;
}

export class UpdateNotesDto {
  @MaxLength(200)
  @MinLength(5)
  @IsOptional()
  title: string;

  @MaxLength(2000)
  @MinLength(5)
  @IsOptional()
  description: string;

  @IsMongoId()
  @IsOptional()
  createdBy: string;
}

export class ParamsDto {
  @IsMongoId()
  id: string;
}
