// alert('Hi there!');

/**
 * Mảng trong JavaScript
 * 1. Tạo mảng
 *    - Các cách tạo
 *   - Dùng khi nào
 *  - Kiểm tra data type
 * 2. Truy xuất mảng
 *    - Độ dài mảng
 *    - Lấy phần tử mảng theo index
 *  
 */

var languages = [
    'JavaScript',
    'HTML',
    'CSS',
    'PHP',
    'Python',
    'Dart',
    null,
    undefined,
    function (){
        console.log('Hello');
    },
 {
        name: 'Nguyen Van A',
        age: 25
    }
];
console.log(languages);
console.log(typeof languages);

var languages1 = new Array('JavaScript', 'HTML', 'CSS', 'PHP', 'Python', 'Dart');
// kiểm tra xem biến có phải kiểu array hay không?
console.log(Array.isArray(languages1));
console.log(Array.isArray({}));
console.log(languages.length);
console.log(languages[1]);
console.log(languages[languages.length - 1]);
console.log(languages.indexOf('Python'));

/**
 * Làm việc với array
 * 1. toString
 * 
 * 2. join
 * 3. push
 * 4. pop
 * 5. shift
 * 6. unshift
 * 7. sort
 * 8. reverse
 * 9. slice
 * 10. splice
 * 11. concat
 * 12. indexOf
 * 13. lastIndexOf
 * 14. forEach
 * 15. map
 * 16. filter
 * 17. find
 * 18. findIndex
 */
console.log(languages.toString());               // chuyển mảng thành chuỗi
console.log(languages.join(' - '));              // chuyển mảng thành chuỗi, chỉnh sửa khoảng trắng
console.log(languages.pop());                    // Xoá phần tử cuối của mảng và trả về giá trị xoá được
console.log(languages.push('Python'));           // Thêm phần tử vào cuối của mảng và trả về độ dài mới của mảng
console.log(languages.shift());                  // Xoá phần tử đầu tiên của mảng và trả về giá trị xoá được
console.log(languages.unshift('Python','C#'));   // Thêm phần tử vào chỉ mục đầu tiên của mảng và trả về độ dài mới của mảng
console.log(languages.sort());                   // Sắp xếp mảng theo thứ tự
languages.splice(1,1,'C#');                      // Xoá phần tử thứ 2 của mảng và thêm phần tử mới
console.log(languages);
console.log(languages.concat(['C#','JavaScript'])); // Gộp 2 mảng vào nhau
console.log(languages.slice(1,3));                 // Lấy phần tử từ thứ 2 đến thứ 3
console.log(languages.slice(0));