import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository {
  getUser(): string {
    const arr: number[] = [1, 2, 3];
    const ttn = arr.map((e) => 2 * e).length;
    console.log(ttn);
    return 'ok';
  }
}
