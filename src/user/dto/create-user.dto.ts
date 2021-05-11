import { IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  readonly userId;
  @IsString()
  readonly userPw;
  @IsString()
  @IsOptional()
  readonly userEmail;
}
