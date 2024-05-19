import { Controller, Get, Post, Body, Param } from '@nestjs/common';
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

  @Post('login')
  async login(@Body() loginData: { email: string; senha: string }) {
    try {
      const user = await this.userService.login(
        loginData.email,
        loginData.senha,
      );
      return { message: 'Login successful', user };
    } catch (error) {
      return { message: 'Login failed', error: error.message };
    }
  }

  @Get('byuser/:iduser')
  async findById(@Param('iduser') iduser: string) {
    return this.userService.findById(parseInt(iduser));
  }

  @Get('by-personal/:codpersonal')
  async findByPersonal(@Param('codpersonal') codpersonal: string) {
    return this.userService.findByPersonal(codpersonal);
  }
}
