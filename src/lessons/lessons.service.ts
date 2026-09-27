import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateLessonDto } from './dto/create-lesson.dto';

@Injectable()
export class LessonsService {
    constructor(private prisma: PrismaService) { }

    async create(createLessonDto: CreateLessonDto) {
        return this.prisma.lesson.create({
            data: {
                date: new Date(createLessonDto.date),
                topic: createLessonDto.topic,
                isPaid: createLessonDto.isPaid ?? false,
                studentId: createLessonDto.studentId,
            },
        });
    }

    async findAll() {
        return this.prisma.lesson.findMany({
            include: { student: true },
        });
    }
}