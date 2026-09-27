import { Controller, Get, Post, Body, UseGuards, Req } from '@nestjs/common';
import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('students')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
@Controller('students')
export class StudentsController {
    constructor(private readonly studentsService: StudentsService) { }

    @Post()
    @ApiOperation({ summary: 'Dodaj nowego ucznia dla zalogowanego nauczyciela' })
    @ApiResponse({ status: 201, description: 'Uczeń został pomyślnie utworzony.' })
    create(@Body() createStudentDto: CreateStudentDto, @Req() req: any) {
        const userId = req.user.userId;
        return this.studentsService.create(createStudentDto, userId);
    }

    @Get()
    @ApiOperation({ summary: 'Pobierz listę uczniów zalogowanego nauczyciela' })
    @ApiResponse({ status: 200, description: 'Zwraca tablicę uczniów wraz z lekcjami.' })
    findAll(@Req() req: any) {
        const userId = req.user.userId;
        return this.studentsService.findAll(userId);
    }
}