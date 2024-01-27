// Type of value returned by a function can be explicitly defined

function getTime(): number {
  return new Date().getTime();
}


// Void return type, can be used to indicate a function doesn't return a value

function printHello(): void {
  console.log("Hello");
}


// Parameters

function multiply(a: number, b: number) {
  return a * b;
}


// Optional Parameters

function add(a: number, b: number, c?: number){
    return a + b + (c || 0);
}


// Default Parameters

function pow(value: number, exponent: number = 10){
    return value ** exponent;
}


// Named Parameters

function divide({dividend, divisor}: {dividend: number, divisor: number}){
    return dividend / divisor;
}


// Rest Parameters

function alsoAdd(a: number, b: number, ...rest: number[]){
    return a + b + rest.reduce((p, c) => p + c, 0)
}


// Type Aliases

type Negate = (value: number) => number;

const negateFunction: Negate = (value) => value * -1;