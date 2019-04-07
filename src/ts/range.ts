export default class Range {
  public static of(min: number, max: number): number[] {
    const arr = Array<number>();
    for (let index = min; index <= max; index++) { arr.push(index); }
    return arr;
  }
}
