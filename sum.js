var num1 = 5;
var num2 = [2, 3];
function calculateSum(a, b) {
    if (Array.isArray(b)) {
        return a + b.reduce(function (sum, val) { return sum + val; }, 0);
    }
    else {
        return a + b;
    }
}
var sum = calculateSum(num1, num2);
console.log("Sum of num1 and num2:", sum);
