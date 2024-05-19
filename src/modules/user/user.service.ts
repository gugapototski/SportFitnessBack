import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { UserDto } from './user.dto';
import { error } from 'console';

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

  async login(email: string, senha: string) {
    const user = await this.prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (!user) {
      throw new Error('Usuário não encontrado');
    }

    if (user.senha !== senha) {
      throw new Error('Senha incorreta');
    }

    return user;
  }

  async findByPersonal(codpersonal: string) {
    return this.prisma.user.findMany({
      where: {
        codpersonal,
      },
    });
  }

  async findById(iduser: number) {
    return this.prisma.user.findUnique({
      where: { iduser },
    });
  }
}
