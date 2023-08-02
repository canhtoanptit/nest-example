import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository {
  getUser(): string {
    const arr: number[] = [1, 2, 3];
    const ttn = arr.map((e) => 2 * e).length;
    console.log(ttn);
    this.doNothing({ x: 10, y: 100 });
    return 'ok';
  }

  doNothing(pt: { x: number; y: number }) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
    okela({ f: '100' });
  }
}

function okela(obj: { f: string; l?: string }) {
  console.log(obj.l?.toUpperCase());
}
