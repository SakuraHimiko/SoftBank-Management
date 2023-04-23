import { IsEmail, IsNotEmpty, IsBoolean, IsNumber } from 'class-validator';

export class updateUserDto {
  @IsNumber()
  id: number;
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsBoolean()
  isActive: boolean;
}
