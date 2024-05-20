import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { DicasDto } from './dicas.dto';

@Injectable()
export class DicasService {
  constructor(private prisma: PrismaService) {}

  async create(DicasData: DicasDto) {
    const newDica = await this.prisma.dicas.create({
      data: {
        ...DicasData,
      },
    });
    return newDica;
  }

  async findAll() {
    return this.prisma.dicas.findMany();
  }

  async findRandom() {
    const randomDicas = await this.prisma
      .$queryRaw`SELECT * FROM dicas ORDER BY RANDOM() LIMIT 5`;
    return randomDicas;
  }
}
