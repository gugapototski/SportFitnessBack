import { Controller, Get, Post, Body, Param, Put } from '@nestjs/common';
import { DietaService } from './dieta.service';
import { DietaDto } from './dieta.dto';
import { parse } from 'path';

@Controller('dieta')
export class DietaController {
  constructor(private readonly dietaService: DietaService) {}

  @Post('criar') // http://localhost:3000/dieta/criar
  async create(@Body() data: DietaDto) {
    return this.dietaService.create(data);
  }

  @Get('findByUser/:iduser') // http://localhost:3000/dieta/findByUser/1
  async findById(@Param('iduser')iduser: string) {
    return this.dietaService.findByUser(parseInt(iduser));
  }

  @Get('alldietas') // http://localhost:3000/dieta/alldietas
  async findAll() {
    return this.dietaService.findAll();
  }

  @Put('updateDieta/:iddieta') // http://localhost:3000/dieta/updateDieta/1
  async update(@Param('iddieta') iddieta: string, @Body() data: DietaDto) {
    return this.dietaService.updateDieta(parseInt(iddieta), data);
  }
}

