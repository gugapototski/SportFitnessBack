import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { TreinoDiaDto } from './treinodia.dto';

@Injectable()
export class TreinoDiaService {
  constructor(private prisma: PrismaService) {}

  async create(treinodiaData: TreinoDiaDto) {
    const newTreino = await this.prisma.treinodia.create({
      data: {
        ...treinodiaData
      }
    });

    return newTreino;
  }

  async findByTreinoDia(idtreinos: number) {
    return this.prisma.treinodia.findMany({
      where: {idtreinos}
    });
  }

  async findAll() {
    return this.prisma.treinodia.findMany();
  }

  async updateTreino(idtreinodia: number, treinosData: TreinoDiaDto) {
    const treinosExists = await this.prisma.treinodia.findUnique({
      where: {
        idtreinodia
      },
    });

    if (!treinosExists) {
      throw new Error('Treino Dia does not exists!');
    }

    const updateTreino = await this.prisma.treinodia.update({
      data: {
        ...treinosData
      },
      where: {
        idtreinodia
      },
    });
    return updateTreino
  }
}