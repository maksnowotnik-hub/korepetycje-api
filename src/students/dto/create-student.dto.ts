import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateStudentDto {
    @ApiProperty({ example: 'Jan Kowalski' })
    @IsString()
    @IsNotEmpty({ message: 'Imię i nazwisko ucznia jest wymagane.' })
    name: string;

    @ApiProperty({ example: 'Matematyka', required: false })
    @IsString()
    @IsOptional()
    subject?: string;
}