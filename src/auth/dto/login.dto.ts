import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
    @ApiProperty({ example: 'moj@test.pl' })
    @IsEmail({}, { message: 'Niepoprawny format adresu e-mail.' })
    @IsNotEmpty()
    email: string;

    @ApiProperty({ example: 'mojehaslo123' })
    @IsString()
    @IsNotEmpty()
    password: string;
}