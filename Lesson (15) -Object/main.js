// alert('Hi there!');


var myInfo = {
    name: 'John',
    'age': 30,
    'job': 'Web Developer',
    'hobbies': ['Sports', 'Cooking'],
    address: 'Bac Ninh',
    getName: function() {
        return this.name;
    }
}
// Function --> Phuong thuc
// Others --> Thuoc tinh
console.log(myInfo);
myInfo.email = 'vanducdo4@gmail.com'
myInfo['My-Company'] = 'Salesforce'
delete myInfo.address
console.log(myInfo.getName());


// Object constructor    
function User(firstName, lastName, avatar,) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;   
    this.getFullName = function() {
        return this.firstName + ' ' + this.lastName;
    }
}
function Admin(firstName, lastName, avatar, className) {
    User.call(this, firstName, lastName, avatar);
    this.className = className;
}

var author = new User('John', 'Doe', 'avatar.jpg');
var user = new User('Nguyen', 'Van A', 'avatar.jpg');
var admin = new Admin('John', 'Doe', 'avatar.jpg', 'Web Developer');
console.log(admin.getFullName());
console.log(author);
console.log(user);
author.title = 'Chia sẻ dạo tại F8';
console.log(author);
user.comment = 'Đây là bình luận của bạn';
console.log(user);
console.log(author.getFullName());

// Object prototype
// 1. Prototype là gì?
// 2. Sử dụng khi nào?

User.prototype.className = 'F8';
User.prototype.getClassName = function() {
    return this.className;
}
console.log(author.className);
console.log(author.getClassName());


// Object.create()                  --> Đối tượng date

var date = new Date();
console.log(typeof date);
console.log(date);
console.log(date.getFullYear());
console.log(date.getMonth() + 1);
console.log(date.getDate());
