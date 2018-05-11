export interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface;
}
export interface ClockInterface {
  tick(): any;
}

export function createClock(
  ctor: ClockConstructor,
  hour: number,
  minute: number
): ClockInterface {
  return new ctor(hour, minute);
}

export class DigitalClock implements ClockInterface {
  constructor(h: number, m: number) {}
  tick() {
    console.log("beep beep");
  }
}
