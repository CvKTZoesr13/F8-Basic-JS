// alert('Hi there!');

// Hiểu hơn về câu điều kiện và phép so sánh


var a = 1;
var b = 2;
var result = a < b;
console.log('result ',result);
var result2 = null && 'a'&&'b'&&'c'&& 'NaN';
console.log('result2 ',result2); // luôn lấy giá trị Null, undefined, NaN, '',... đầu tiên, nếu không, lấy giá trị cuối cùng.

if(a>b){
    console.log('a lớn hơn b');
} else {
    console.log('a nhỏ hơn b');
}

if (!result2){
    console.log('Dieu kien dung');
} else {
    console.log('Dieu kien sai');
}

var alwayFirstResult = 'T'||'a'||'b'||'c'|| 'NaN';
console.log('alwayFirstResult ',alwayFirstResult); // luôn lấy giá trị đầu tiên khác NaN, undefined, null, ''