import { Module } from '@nestjs/common';
import { TreinoDiaController } from './treinodia.controller';
import { TreinoDiaService } from './treinodia.service';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [TreinoDiaController],
  providers: [TreinoDiaService, PrismaService],
})
export class TreinoDiaModule {}
