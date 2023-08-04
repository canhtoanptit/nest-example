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
  let meThod: meThod;
  const req = { url: 'https://example.com', method: meThod };
  handleRequest(req.url, req.method);
}

type meThod = 'GET' | 'POST';

declare function handleRequest(url: string, method: meThod): void;

function liveDangerous(x?: number | null) {
  console.log(x?.toFixed());
}
