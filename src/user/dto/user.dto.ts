import { IsEmail, IsNotEmpty } from 'class-validator';

export class getUser {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}
