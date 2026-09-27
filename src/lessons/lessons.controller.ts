import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { LessonsService } from './lessons.service';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('lessons')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
@Controller('lessons')
export class LessonsController {
    constructor(private readonly lessonsService: LessonsService) { }

    @Post()
    @ApiOperation({ summary: 'Dodaj nową lekcję dla ucznia' })
    @ApiResponse({ status: 201, description: 'Lekcja została utworzona.' })
    create(@Body() createLessonDto: CreateLessonDto) {
        return this.lessonsService.create(createLessonDto);
    }

    @Get()
    @ApiOperation({ summary: 'Pobierz listę wszystkich lekcji wraz z danymi uczniów' })
    @ApiResponse({ status: 200, description: 'Zwraca listę lekcji.' })
    findAll() {
        return this.lessonsService.findAll();
    }
}