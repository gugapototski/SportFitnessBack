import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { TreinosDto } from './treinos.dto';

@Injectable()
export class TreinosService {
  constructor(private prisma: PrismaService) {}

  async create(treinosData: TreinosDto) {
    const newTreino = await this.prisma.treinos.create({
      data: {
        ...treinosData
      }
    });

    return newTreino;
  }

  async findUser(iduser: number) {
    return this.prisma.treinos.findMany({
      where: {iduser}
    });
  }

  async findAll() {
    return this.prisma.treinos.findMany();
  }

  async updateTreino(idtreinos: number, treinosData: TreinosDto) {
    const treinosExists = await this.prisma.treinos.findUnique({
      where: {
        idtreinos
      },
    });

    if (!treinosExists) {
      throw new Error('Treino does not exists!');
    }

    const updateTreino = await this.prisma.treinos.update({
      data: {
        ...treinosData
      },
      where: {
        idtreinos
      },
    });
    return updateTreino
  }
}