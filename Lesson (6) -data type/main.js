alert('Hi there!');

/**
 * Kiểu dữ liệu trong JavaScript
 * 1. Dữ liệu nguyên thủy - Primitive Data Type
 * number, 
 * string, 
 * boolean, 
 * null, 
 * undefined, 
 * symbol
 * Dữ liệu nguên thủy chiếm một vùng nhớ trong Ram và không thể thay đổi, khi gán giá trị khác cho biến đó, máy tính sẽ tạo ra một vùng nhớ mới.
 * 2. Dữ liệu phức tạp - Complex Data Type
 * object, 
 * array, 
 * function, 
 * date, 
 * regexp
 */

// Number Type - Primitive Data Type - Dữ liệu số
var a = 10;
var b = 20;
var c = 1.5;
// String Type - Primitive Data Type - Dữ liệu chuỗi
var d = 'Hello';
var e = 'World';
// Boolean Type - Primitive Data Type - Dữ liệu Boolean
var isSuccess = true;
var isFail = false;
// Null Type - Primitive Data Type - Dữ liệu Null
var f = null;
// Undefined Type - Primitive Data Type - Dữ liệu Undefined
var g = undefined;
var unknown;
// Symbol Type - Primitive Data Type - Dữ liệu Symbol
var h = Symbol('i');  // unique symbol
var i = Symbol('i');
console.log(h === i); // false
// function Type - Primitive Data Type - Dữ liệu hàm
var myFunction = function () {
    console.log('Hello World');
}
myFunction();
// oject Type - Primitive Data Type - Dữ liệu đối tượng
var myObject = {
    name: 'CvKTZoesr',
    age: 20,
    address: 'BacNinh'
}
console.log('myOject: ',myObject);
// array Type - Primitive Data Type - Dữ liệu mảng
var myArray = [1, 2, 3, 4, 5];
console.log('myArray: ',myArray);

// type of - kiểu dữ liệu
console.log('type of a: ',typeof a);
console.log('type of f (null): ',typeof f);
console.log('type of g (undefined): ',typeof g);
console.log('type of h (symbol): ',typeof h);
console.log('type of myFunction (function): ',typeof myFunction);
