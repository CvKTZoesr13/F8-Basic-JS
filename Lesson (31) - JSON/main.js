// // JSON là một định dạng dữ liệu (data format) được sử dụng để chuyển đổi dữ liệu từ dạng nhị phân sang dạng chuỗi.
// // JSON là một chuỗi các phần tử được định nghĩa bằng cách sử dụng các dấu nháy kép.
// // JSON stand for JavaScript Object Notation.
// // JSON: Number, String, Boolean, Array, Object, null, undefined
// // JSON: {
// //     "name": "Nguyen Van A",
// //     "age": 20,
// //     "isMarried": true,
// //     "children": [
// //         "Nguyen Van B",
// //         "Nguyen Van C"
// //     ]
// // }
// // Stringify: Chuyển đổi từ đối tượng sang chuỗi JSON
// // Parse: Chuyển đổi từ chuỗi JSON sang đối tượng

// // var json = '["JavaScript", "Nodejs", "Reactjs"]';
// // console.log(json);

// var json = '{"name": "Nguyen Van A", "age": 20, "isMarried": true, "children": ["Nguyen Van B", "Nguyen Van C"]}';

// var a = '1';
// console.log(JSON.parse(json));

// // Promise
// // Promise là một đối tượng có thể đồng bộ hoặc không đồng bộ.
  
// // -sync: Đồng bộ: chạy lần lượt các hành động trong Promise.
// // -async: Không đồng bộ (Bất đồng bộ): setTimeout, setInterval,
// //  requestAnimationFrame, XMLHttpRequest, fetch, request animation frame

// sync: viết trước chạy trước, viết sau chạy sau, javascript là ngôn ngữ theo tư duy đồng bộ, nhưng vẫn có cách để giải quyết tư duy bất đồng bộ
// async: setTimeout, setInterval, XML HTTP Request, fetch, các thao tác đọc file
// fetch: gọi một yêu cầu thông qua mạng, không xác định được thời gian thực hiện vì phụ thuộc yếu tố khách quan như thời gian, tốc độ mạng
// Javascript thường sử dụng khái niệm callBack để xử lý các thao tác bất đồng bộ


//sleep
setTimeout(
    function() {
        console.log('Hello');
    }
    , 1000);
console.log('World');
// khi sử dụng callBack để giải quyết các thao tác bất đồng bộ, ta sẽ thường gặp phải vấn đề:

//Callback hell (Callback lồng Callback)
// Pyramid of doom
// setTimeout(function(){
//     console.log(1)
//     setTimeout(function(){
//         console.log(2)
//         setTimeout(function(){
//             console.log(3)
//             setTimeout(function(){
//                 console.log(4)
//                 setTimeout(function(){
//                     console.log(5)
//                     setTimeout(function(){
//                         console.log(6)
//                         setTimeout(function(){
//                             console.log(7)
//                             setTimeout(function(){
//                                 console.log(8)
//                                 setTimeout(function(){
//                                     console.log(9)
//                                     setTimeout(function(){
//                                         console.log(10)
//                                     },1000)
//                                 },1000)
//                             },1000)
//                         },1000)
//                     },1000)
//                 },1000)
//             },1000)
//         },1000)
//     },1000)
// }, 1000)
// 
// Promise sinh ra để giải quyết vấn đề nói trên (code không đồng bộ)

// Promise (concept)
// sinh ra để giải quyết code không đồng bộ
// Các trạng thái
//1. Pendding: sẽ gây dò rỉ bộ nhớ (memory leak), khi resolve hoặc reject không được gọi
//2. Fullfilled
//3. Reject
// Promise là một object constructor được định nghĩa trong ECMAScript 6
// Promise nhận vào một function gọi là excutor function 
// Excutor function nhận vào hai đối số cũng là function đại diện cho thành công và thất bại.

// -->
// Hai bước để tạo ra 1 Promise
// 1. new Promise
// 2. Excutor

var promise = new Promise (
    // Executor
    function(resolve, reject){
        // Logic
        // Thành công: resolve();
        // Thất bại: reject();
        resolve();
    }
)


// Promise sẽ trả lại cho bạn ba phương thức sau khi được định nghĩa là .then(), .catch(), .finally()
promise
    .then(function(){
        // dùng cho resolve()
        console.log('Successfully!')
    })
    .catch(function(){
        // dùng cho reject() 
        // 'Bẫy lỗi'
        console.log('Failure!')

    })
    .finally(function(){
        // dùng cho cả 2
        console.log('Done!')
    })

// Cách trả lời phỏng vấn
// Promise sinh ra từ phiên bản JS ES6 


// Chain: tính chất chuỗi
function sleep(ms){
    return new Promise(function(resolve){
        setTimeout(resolve, ms);
    });
};
sleep(1000)
    .then(function(){
        console.log(1)
        return sleep(1000)
    })
    .then(function(){
        console.log(2)
        // return sleep(1000)
        // Khi bị reject lúc đang chạy, các chuỗi sau sẽ không đc chạy
        return new Promise(function(resolve, reject){
            reject('Co loi');
        })
    })
    .then(function(){
        console.log(3)
        return sleep(1000)
    })
    .catch(function(err){
        console.log(err)
    });
// 1. Promise.resolve
// 2. Promise.reject
// 3. Promise.all

var promise2 = new Promise(
    function(resolve, reject){
        resolve('Success!')
    }
);
promise2
    .then(function(result){
        console.log('result: ', result);
    })
    .catch(function(err){
        console.log('err: ', err);
    })
// 1. Promise.resolve
var promiseResolve = Promise.resolve('Success using Resolve!')
promiseResolve
    .then(function(result){
        console.log('result: ', result);
    })
    .catch(function(err){
        console.log('err: ', err);
    })
// 2. Promise.reject
var promiseResolve = Promise.reject('Error using Reject!')
promiseResolve
    .then(function(result){
        console.log('result: ', result);
    })
    .catch(function(err){
        console.log('err: ', err);
    })
// 3. Promise.all
// Promise.all() nhận vào một đối số là mảng, bản thân nó trả về giá trị là một new Promise
var promiseAll1 = new Promise(function(resolve){
    setTimeout(function(){
        resolve([1,2,3])
    }, 2000);
})

var promiseAll2 = new Promise(function(resolve){
    setTimeout(function(){
        resolve([4,5])
    }, 4000);
})
// Promise.all syntax
Promise.all([promiseAll1, promiseAll2])
    .then(function(result){
        var result1 = result[0]
        var result2 = result[1];
        console.log(result1.concat(result2))
    })

// Example Promise
var users = [
    {
        id: 1,
        name: 'Kien Dam',
        
    },
    {
        id: 2,
        name: 'Son Dang',
        
    },
    {
        id: 3,
        name: 'Sakimichan',
        
    },
    {

    }
];

var comments = [
    {
        id: 1,
        user_id: 1,
        content: "Anh Son chua ra video :("
    },
    {
        id: 2,
        user_id: 2,
        content: "Vua ra xong em oi"
    },
    {
        id: 3,
        user_id: 3,
        content: "Day la dau, toi la ai"
    },
    
];

// 1. Lấy comments
// 2. Từ comments lấy ra user_id 
// 3. Từ user_id lấy ra user tương ứng
// Fake API
// Promise hell
function getComments(){
    return new Promise(function(resolve){
        setTimeout(function() {
            resolve(comments)
        }, 3000);
    })
}

function getUsersByIds(userIds){
    return new Promise (function(resolve){
        var result = users.filter(function(user){
            return userIds.includes(user.id)
        });
        setTimeout(() => {
            // console.log(result)
            resolve(result);
        }, 3000);
    })
}
getComments()
    .then(function(comments){
        var userIds = comments.map(function(comment){
                return comment.user_id;
        })
        return getUsersByIds(userIds)
            .then(function(users){
                return {
                    users: users,
                    comments: comments
                };
        })
    })
    .then(function(data){
        // console.log(data);
        var html = '';
        var commentBlock = document.getElementById('comment-block');
        data.comments.forEach(comment => {
            var user = data.users.find(function(user){
                return user.id === comment.user_id;
            });
            html += `<li>${user.name}: ${comment.content}</li>`
        });

        commentBlock.innerHTML = html;
    });

    