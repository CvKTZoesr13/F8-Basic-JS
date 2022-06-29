// alert('Hi there!');

// Chuỗi trong JavaScript
/**
 * 1. Tạo chuỗi
 *     - Các cách thức tạo chuỗi
 *     - Nên dùng cách nào? Lý do
 *     - Kiểm tra data type
 * 2. Một số case sử dụng backslash (\)
 * 3. Xem độ dài chuỗi
 * 4. Chú ý độ dài khi viết Code
 * 5. Template String es6
 * 
 */

    // 1. Tạo chuỗi
    //     - Các cách thức tạo chuỗi
    // Cách 1:
    var fullName = 'Nguyen Van A';
    // Cách 2:
    var fullName = new String('Nguyen Van A'); // new String() là 1 hàm tạo chuỗi --> tạo ra kiểu object

    // 2. Một số case sử dụng backslash (\)
    var fullName = 'Son Dang la \"Sieu Nhan\"';
    console.log(fullName);
    // 3. Xem độ dài chuỗi
    console.log(fullName.length);
    // 4. Chú ý độ dài khi viết Code
    var longtext = 'Hello World' + 'Hello World'
    + 'Hello World' + 'Hello World'
    + 'Hello World' + 'Hello World';
    console.log(longtext);
    // 5. Template String es6
    var firstName = 'Nguyen';
    var lastName = 'Van A';
    console.log(`Ten cua toi la: ${firstName} ${lastName}`);
    var upperCase = 'nguyen van a';
    console.log(upperCase.toUpperCase());
    console.log(NaN);
    console.log(isNaN(NaN));