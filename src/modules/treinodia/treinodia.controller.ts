import { Controller, Get, Post, Body, Param, Put } from '@nestjs/common';
import { TreinoDiaService } from './treinodia.service';
import { TreinoDiaDto } from './treinodia.dto';
import { parse } from 'path';

@Controller('treinodia')
export class TreinoDiaController {
  constructor(private readonly treinodiaService: TreinoDiaService) {}

  @Post('criar') // http://localhost:3000/treinodia/criar
  async create(@Body() data: TreinoDiaDto) {
    return this.treinodiaService.create(data);
  }

  @Get('findByTreino/:idtreino') // http://localhost:3000/treinodia/findByTreino/1
  async findById(@Param('idtreino')idtreino: string) {
    return this.treinodiaService.findByTreinoDia(parseInt(idtreino));
  }

  @Get('alltreinosdia') // http://localhost:3000/treinodia/alltreinosdia
  async findAll() {
    return this.treinodiaService.findAll();
  }

  @Put('updateTreinoDia/:idtreinodia') // http://localhost:3000/treinodia/updateTreinoDia/1
  async update(@Param('idtreinodia') idtreinodia: string, @Body() data: TreinoDiaDto) {
    return this.treinodiaService.updateTreino(parseInt(idtreinodia), data);
  }
}

