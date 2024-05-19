import { Controller, Get, Post, Body, Param, Put } from '@nestjs/common';
import { TreinosService } from './treinos.service';
import { TreinosDto } from './treinos.dto';
import { parse } from 'path';

@Controller('treinos')
export class TreinosController {
  constructor(private readonly treinosService: TreinosService) {}

  @Post('criar')
  async create(@Body() data: TreinosDto) {
    return this.treinosService.create(data);
  }

  @Get('findById/:iduser')
  async findById(@Param('iduser')iduser: string) {
    return this.treinosService.findUser(parseInt(iduser));
  }

  @Get('alltreinos')
  async findAll() {
    return this.treinosService.findAll();
  }

  @Put('updateTreino/:idtreinos')
  async update(@Param('idtreinos') idtreinos: string, @Body() data: TreinosDto) {
    return this.treinosService.updateTreino(parseInt(idtreinos), data);
  }
}

