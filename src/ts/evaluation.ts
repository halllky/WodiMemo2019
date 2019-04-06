import Game from './game';
import Memo from './memo';

export default class Evaluation {
  public game: Game = new Game();
  public netchu: number = 1;
  public zanshin: number = 1;
  public story: number = 1;
  public material: number = 1;
  public usability: number = 1;
  public other: number = 0;
  public comment: string = '';

  public get sum(): number {
    return this.netchu + this.zanshin + this.story + this.material + this.usability + this.other;
  }
  public memos: Memo[] = [];
}
