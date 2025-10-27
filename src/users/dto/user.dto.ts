import { OmitType, PartialType } from '@nestjs/mapped-types';
import { Type } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength, ValidateNested } from 'class-validator';
import { CreateProfileDto, UpdateProfileDto } from './profile.dto';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  password: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ValidateNested()
  @Type(() => CreateProfileDto)
  @IsNotEmpty()
  profile: CreateProfileDto;
}

export class UpdateUserDto extends PartialType(OmitType(CreateUserDto, ['profile'])) {
  @ValidateNested()
  @Type(() => UpdateProfileDto)
  @IsOptional()
  profile: UpdateProfileDto;
}
