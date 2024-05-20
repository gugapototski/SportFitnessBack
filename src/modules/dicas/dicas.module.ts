import { Module } from '@nestjs/common';

import { PrismaService } from 'src/database/prisma.service';
import { DicasService } from './dicas.service';
import { DicasController } from './dicas.controller';

@Module({
  controllers: [DicasController],
  providers: [DicasService, PrismaService],
})
export class DicasModule {}
