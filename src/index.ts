import { gcd } from "./gcd";

export class Fraction {
  constructor(private numerator: number, private denominator: number) {}

  times(value: number): Fraction {
    return new Fraction(this.numerator * value, this.denominator * value);
  }

  dividedBy(value: number): Fraction {
    return new Fraction(this.numerator / value, this.denominator / value);
  }

  reduce(): Fraction {
    return this.dividedBy(gcd(this.numerator, this.denominator));
  }

  plus(other: Fraction): Fraction {
    const f1 = this.times(other.denominator);
    const f2 = other.times(this.denominator);
    return new Fraction(f1.numerator + f2.numerator, f1.denominator).reduce();
  }
}
