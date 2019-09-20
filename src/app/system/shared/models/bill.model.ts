export class Bill {
  constructor(
    private _value: number,
    private _currency: string
  ) {}

  get value(): number {
    return this._value;
  }

  get currency(): string {
    return this._currency;
  }
}
