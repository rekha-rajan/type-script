let num1: number = 5;

let num2: number | number[] = [2, 3];

function calculateSum(a: number, b: number | number[]): number {
  if (Array.isArray(b)) {
    return a + b.reduce((sum, val) => sum + val, 0);
  } else {
    return a + b;
  }
}

const sum = calculateSum(num1, num2);
console.log("Sum of num1 and num2:", sum);
