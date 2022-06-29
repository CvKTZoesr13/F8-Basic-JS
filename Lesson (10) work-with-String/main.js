// alert('Hi there!');

var myString = 'Học JS JS JS tại F8 F8 F8';

// keyword: JavaScript String Methods
// 1. toUpperCase()             // chuyển sang chữ in hoa
// 2. toLowerCase()            // chuyển sang chữ in thường 
// 3. trim()                    // xóa khoảng trống
// 4. indexOf()                 // tìm kiếm chuỗi trong chuỗi
console.log(myString.indexOf('F8', 12));  // tìm 'F8' trong chuỗi 'Học JS tại F8 F8 F8' bắt đầu từ vị trí 12
// 5. lastIndexOf()             // tìm kiếm chuỗi trong chuỗi
// 6. charAt()                  // lấy ký tự trong chuỗi
console.log(myString.charAt(0));
console.log(myString[10]);
// 7. charCodeAt()                  // lấy ký tự trong chuỗi
// 8. concat()                  // nối chuỗi
// 9. slice()                   // lấy phần tử trong chuỗi
// 10. split()                  // tách chuỗi thành mảng
var languages = 'JavaScript, HTML, CSS, PHP, Java, C#, C++, Python, Ruby, Go';
console.log(languages.split(', '));

// 11. replace()                 // thay thế chuỗi
console.log(myString.replace(/JS/g, 'JavaScript')); // thay thế 'JS' trong chuỗi 'Học JS tại F8 F8 F8' bằng 'JavaScript'
// 12. search()                 // tìm kiếm chuỗi trong chuỗi
console.log(myString.search('F8'));
// 13. match()                  // tìm kiếm chuỗi trong chuỗi
// 14. substr()


