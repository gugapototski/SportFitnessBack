import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('criar')
  async create(@Body() data: UserDto) {
    return this.userService.create(data);
  }

  @Get('allusers')
  async findAll() {
    return this.userService.findAll();
  }
}
