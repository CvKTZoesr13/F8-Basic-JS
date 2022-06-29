// alert('Hi there!');
/*
Hàm trong JavaScript
1. Hàm?
    - Một khối mã 
    - Làm một việc cụ thể
2. Loại hàm
    - Built-in
    - User-defined <tự định nghĩa>
3. Tính chất 
    - Không thực thi khi định nghĩa
    - Sẽ thực thi khi gọi
    - Có thể nhận tham số
    - Có thể trả về 1 giá trị
4. Tạo hàm đầu tiên

*/
var myFunction = function () {
    console.log('Hello');
}
myFunction();   // Gọi hàm
var showDialog = function() {
    alert('Hello, How are you?');
}
showDialog();  // Gọi hàm

// Tham số trong hàm
/* 1. Tham số
        - Định nghĩa?
        - Kiểu dữ liệu
        - Tính private
        - 1 tham số
        - Nhiều tham số
    2. Truyền tham số
        - Một tham số
        - Nhiều tham số
    3. Arguments
        - Đối tượng arguments
        Giới thiệu vòng for
*/

function writeLog(message, message2) {
    console.log(message)
    console.log(message2)
    console.log(arguments);
    var myString = '';
    for(var param of arguments) {
        myString += `${param} - `;
    }
    console.log(myString);
}

writeLog(['Hello', 'World'], 'I\'m a programmer', 'I\'m a student',"I'm a teacher");

// Return trong hàm
var isComfirm = confirm('Are you sure?');
console.log(isComfirm);

function cong(a, b) {
    return a + b;
}
var result = cong(2, 3);
console.log(result);


// Hiểu hơn về hàm - function
// function showAlert(message) {
//     alert(message);
// }
// showAlert('Hello');
function showAlert(message) {
    var fullMessage = 'Hello. ' + message;
    alert(fullMessage);
}
showAlert('Welcome to Vietnam');
// showAlert();
/**
 * Các lọai hàm
 * 1. Declaretion function
 * 2. Expression function
 * 3. Arrow function
 * 
 */
showMessage(); // Declaretion function --gọi trước khi được định nghĩa
function showMessage() {
    console.log("Declaretion function");
}          // Declaretion function
var showMessage2 = function() {
    console.log("Expression function");
};  // Expression function

