export class Bill {
  constructor(
    private billValue: number,
    private billCurrency: string
  ) {}

  get value(): number {
    return this.billValue;
  }

  get currency(): string {
    return this.billCurrency;
  }
}
