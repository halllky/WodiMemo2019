import * as moment from 'moment';

export default class Comment {
  public text: string = '';
  public timestamp: number = moment.now();
}
