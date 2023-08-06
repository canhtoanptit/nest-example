import { Controller, Get, UseFilters } from '@nestjs/common';
import { UserService } from './user.service';
import { ForbiddenException } from '../exceptions/forbidden.exception';
import { HttpExceptionFilter } from '../exceptions/http-exception.filter';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @UseFilters(new HttpExceptionFilter())
  findAll() {
    try {
      this.userService.findAll();
    } catch (error) {
      throw new ForbiddenException();
    }
  }
}
