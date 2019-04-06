import Game from './game';
import Memo from './memo';

class EvalItem {
  constructor(param: { key: string, value: number, option: number[] }) {
    this.key = param.key;
    this.value = param.value;
    this.option = param.option;
  }
  key: string;
  value: number;
  option: number[];
}

class Range {
  public static of(min: number, max: number): number[] {
    const arr = Array<number>(0);
    for (let index = min; index <= max; index++) arr.push(index);
    return arr;
  }
}

export default class Evaluation {
  public game: Game = new Game();
  public evalItems: EvalItem[] = [
    new EvalItem({ key: '熱中度', value: 1, option: Range.of(1, 10)}),
    new EvalItem({ key: '斬新さ', value: 1, option: Range.of(1, 10)}),
    new EvalItem({ key: '物語性', value: 1, option: Range.of(1, 10)}),
    new EvalItem({ key: '画像・音声', value: 1, option: Range.of(1, 10)}),
    new EvalItem({ key: '遊びやすさ', value: 1, option: Range.of(1, 10)}),
    new EvalItem({ key: 'その他', value: 1, option: Range.of(0, 10)}),
  ];
  public comment: Memo[] = [];

  public get sum(): number {
    let sum = 0;
    this.evalItems.forEach((item: EvalItem) => sum += item.value);
    return sum;
  }
}
