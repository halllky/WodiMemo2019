import Game from './game';
import Comment from './comment';
import Range from './range';
import EvalItem from './eval-item';

export default class Evaluation {

  public static fromJSON(json: string): Evaluation[] | null {
    try {
      const arr = JSON.parse(json) as Game[];
      const res = Array<Evaluation>();
      arr.forEach((item) => {
        const ev = new Evaluation();
        ev.game = item;
        res.push(ev);
      });
      return res;
    } catch (error) {
      // error
      return null;
    }
  }

  public game: Game = new Game();
  public evalItems: EvalItem[] = [
    new EvalItem({ key: '熱中度', value: 1, option: Range.of(1, 10)}),
    new EvalItem({ key: '斬新さ', value: 1, option: Range.of(1, 10)}),
    new EvalItem({ key: '物語性', value: 1, option: Range.of(1, 10)}),
    new EvalItem({ key: '画像・音声', value: 1, option: Range.of(1, 10)}),
    new EvalItem({ key: '遊びやすさ', value: 1, option: Range.of(1, 10)}),
    new EvalItem({ key: 'その他', value: 1, option: Range.of(0, 10)}),
  ];
  public comment: Comment = new Comment();
  public visible: boolean = true;
}
