import { Module } from '@nestjs/common';
import { TreinosController } from './treinos.controller';
import { TreinosService } from './treinos.service';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [TreinosController],
  providers: [TreinosService, PrismaService],
})
export class TreinosModule {}
