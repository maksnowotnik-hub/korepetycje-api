import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ description: 'Adres e-mail nauczyciela', example: 'jan.kowalski@wroclaw.pl' })
  @IsEmail({}, { message: 'Niepoprawny format adresu e-mail.' })
  @IsNotEmpty({ message: 'E-mail nie może być pusty. ' })
  email: string;

  @ApiProperty({ description: 'Hasło do konta', example: 'mojehaslo123' })
  @IsString()
  @MinLength(6, { message: 'Haslo musi miec co najmniej 6 znakow.' })
  password: string;
}