import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreatePostDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'The title of the post' })
  title: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ description: 'The content of the post' })
  content?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ description: 'The cover image of the post' })
  coverImage?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ description: 'The summary of the post' })
  summary?: string;

  @IsArray()
  @IsNumber({}, { each: true })
  @IsOptional()
  @ApiProperty({ description: 'The category ids of the post' })
  categoryIds?: number[];
}
