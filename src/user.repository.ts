import { Injectable } from '@nestjs/common';
import { doWithLession } from './utils/lession';

@Injectable()
export class UserRepository {
  getUser(): string {
    const arr: number[] = [1, 2, 3];
    const ttn = arr.map((e) => 2 * e).length;
    console.log(ttn);
    this.doNothing({ x: 10, y: 100 });
    doWithLession({
      x: 2,
      y: 'hahah',
    });
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
  getTheU(3);
  getTheU('222');
}

function getTheU(p: string | number) {
  console.log(p);
  const aa: Haha = {
    x: 123,
    y: 'haha',
  };
  console.log(aa);
}

type Haha = {
  x: number;
  y: string;
};
