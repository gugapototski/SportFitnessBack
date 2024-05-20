import { Controller, Get, Post, Body } from '@nestjs/common';
import { DicasService } from './dicas.service';
import { DicasDto } from './dicas.dto';

@Controller('dicas')
export class DicasController {
  constructor(private readonly DicasService: DicasService) {}

  @Post()
  async create(@Body() data: DicasDto) {
    return this.DicasService.create(data);
  }

  @Get()
  async findAll() {
    return this.DicasService.findAll();
  }

  @Get('random')
  async findRandom() {
    return this.DicasService.findRandom();
  }
}
