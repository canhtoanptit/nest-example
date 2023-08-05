interface Lession {
  x: number;
  y: string;
}

export const doWithLession = (l: Lession): number => {
  console.log(l.y);
  console.log(l.x);
  printText('ok', 'left');
  return 3;
};

function printText(s: string, alignment: 'left' | 'right' | 'center') {
  const obj = { counter: 0 };
  obj.counter = 1;
  console.log(s, alignment);
  liveDangerous(333);
}

function liveDangerous(x?: number | null) {
  console.log(x?.toFixed());
}
