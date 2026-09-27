import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) { }

  async createUser(email: string, haslo: string) {
    const newUser = await this.prisma.user.create({
      data: {
        email: email,
        password: haslo,
      },
    });
    return newUser;
  }

  async findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }
}