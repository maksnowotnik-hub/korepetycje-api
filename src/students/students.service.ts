import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateStudentDto } from './dto/create-student.dto';

@Injectable()
export class StudentsService {
    constructor(private prisma: PrismaService) { }

    async create(createStudentDto: CreateStudentDto, userId: number) {
        return this.prisma.student.create({
            data: {
                ...createStudentDto,
                userId,
            },
        });
    }

    async findAll(userId: number) {
        return this.prisma.student.findMany({
            where: { userId },
            include: { lessons: true },
        });
    }
}