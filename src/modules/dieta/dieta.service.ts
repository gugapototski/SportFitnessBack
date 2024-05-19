import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { DietaDto } from './dieta.dto';

@Injectable()
export class DietaService {
  constructor(private prisma: PrismaService) {}

  async create(dietaData: DietaDto) {
    const newTreino = await this.prisma.dieta.create({
      data: {
        ...dietaData
      }
    });

    return newTreino;
  }

  async findByUser(iduser: number) {
    return this.prisma.dieta.findMany({
      where: {iduser}
    });
  }

  async findAll() {
    return this.prisma.dieta.findMany();
  }

  async updateDieta(iddieta: number, dietaData: DietaDto) {
    const dietaExists = await this.prisma.dieta.findUnique({
      where: {
        iddieta
      },
    });

    if (!dietaExists) {
      throw new Error('Treino Dia does not exists!');
    }

    const updateDieta = await this.prisma.dieta.update({
      data: {
        ...dietaData
      },
      where: {
        iddieta
      },
    });
    return updateDieta
  }
}