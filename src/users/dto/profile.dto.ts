import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsOptional, IsString, IsUrl } from 'class-validator';

export class CreateProfileDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsString()
  @IsUrl()
  @IsOptional()
  avatar: string;
}

export class UpdateProfileDto extends PartialType(CreateProfileDto) {}
