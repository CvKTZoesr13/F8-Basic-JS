// alert('Hi there!');
/**
 * Kiểu số trong JavaScript
 * 1. Tạo giá trị Number
 *     - Các cách tạo
 *     - Dùng khi nào
 *     - Kiểm tra data type
 * 2. Làm việc với Number
 *     - To string
 *     - To fixed
 */
// key word: Number method javascript
var age = 25;
var pi = 3.14;

var otherNumber = new Number(25);
var otherNumber2 = new Number(3.14);
console.log(typeof otherNumber);
console.log(typeof age);

var result = 20 / "abc";
console.log(result);
console.log(typeof result);
// Cách kiểm tra NaN bằng hàm isNaN
console.log(isNaN(result));
console.log(typeof age.toString()); //--> string
console.log(typeof age);   //--> number

console.log(typeof pi.toFixed()); //--> string // -làm tròn số thập phân