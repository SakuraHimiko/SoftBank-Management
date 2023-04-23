import { IsEmail, IsNotEmpty, IsBoolean } from 'class-validator';

export class getUser {
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
