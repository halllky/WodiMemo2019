import * as moment from 'moment';

export default class Memo {
  public text: string = '';
  public timestamp: number = moment.now();
}
