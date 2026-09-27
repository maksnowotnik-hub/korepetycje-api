import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsDateString, IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateLessonDto {
    @ApiProperty({ example: '2026-10-01T15:00:00.000Z' })
    @IsDateString({}, { message: 'Data lekcji musi być poprawną datą w formacie ISO.' })
    @IsNotEmpty()
    date: string;

    @ApiProperty({ example: 'Przygotowanie do matury z ciągów' })
    @IsString()
    @IsNotEmpty({ message: 'Temat lekcji jest wymagany.' })
    topic: string;

    @ApiProperty({ example: false, required: false })
    @IsBoolean()
    @IsOptional()
    isPaid?: boolean;

    @ApiProperty({ example: 1 })
    @IsInt()
    @IsNotEmpty({ message: 'ID ucznia jest wymagane.' })
    studentId: number;
}