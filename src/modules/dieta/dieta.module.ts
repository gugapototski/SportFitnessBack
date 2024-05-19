import { Module } from '@nestjs/common';
import { DietaController } from './dieta.controller';
import { DietaService } from './dieta.service';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [DietaController],
  providers: [DietaService, PrismaService],
})
export class DietaModule {}
