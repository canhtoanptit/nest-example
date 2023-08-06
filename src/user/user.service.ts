import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  findAll() {
    console.log('ok');
    throw new HttpException('error', HttpStatus.GATEWAY_TIMEOUT);
  }
}
