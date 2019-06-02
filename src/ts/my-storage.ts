import Dexie from 'dexie';
import Evaluation from './evaluation';

export default class MyStorage extends Dexie {
  private table001Evals!: Dexie.Table<Evaluation, number>;

  constructor(dbName: string) {
    super(dbName);
    this.version(1).stores({
      table001Evals: 'game.id',
    });
  }

  public async save(item: Evaluation): Promise<number> {
    return this.table001Evals.put(item);
  }
  public async loadAll(): Promise<Evaluation[]> {
    return this.table001Evals.toArray();
  }
}
