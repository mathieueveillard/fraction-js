# fraction-js

Write a program that implements the addition of fractions. Fractions must be reduced. An implementation of the greatest common divisor (GCD) is provided:

```javascript
function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}
```

## Installation

```
git clone https://github.com/mathieueveillard/fraction-js.git
cd fraction-js
npm install
```

## Development

```
npm test
```
