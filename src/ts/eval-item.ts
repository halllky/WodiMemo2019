export default class EvalItem {
  public key: string;
  public value: number;
  public option: number[];
  constructor(param: { key: string, value: number, option: number[] }) {
    this.key = param.key;
    this.value = param.value;
    this.option = param.option;
  }
}
