import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { UserDto } from './user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(userData: UserDto) {
    const userExist = await this.prisma.user.findFirst({
      where: {
        email: userData.email,
      },
    });

    if (userExist) {
      throw new Error('Email já cadastrado');
    }

    const newUser = await this.prisma.user.create({
      data: {
        ...userData,
        flagpersonal: userData.flagpersonal ?? false,
      },
    });

    return newUser;
  }

  async findAll() {
    return this.prisma.user.findMany();
  }
}
