import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  findAll() {
    console.log('ok');
  }
}
