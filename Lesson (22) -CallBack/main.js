// alert('Hi there!');

// Callback
// Là hàm được truyền qua đối số
// Khi gọi hàm khác
// Hàm này sẽ trả về giá trị của hàm được gọi

function myFunction(param){
    param('Hello', 'World');
};


myFunction(/*myCallback*/function myCallback(arg1, arg2) {
    console.log(`Value: ${arg1} ${arg2}`);
});

// Or you can write like this

function myFunction(param){
    param('Hello', 'World');
};
function myCallback(arg1, arg2) {
    console.log(`Value: ${arg1} ${arg2}`);
}

myFunction(myCallback);
// Callback 2?
var courses = [
    'HTML',
    'CSS', 
    'JavaScript'];
Array.prototype.map2 = function(callback) {
    var output = [];
    for(var i = 0; i < this.length; i++){
        var result = callback(this[i], i, this);
        output.push(result);
    }
    return output;
};
var htmls = courses.map2(function(course, index, Array){
    console.log(`${index + 1}. ${course}`);
    console.log(Array);
    return `<h2>${course}</h2>`;
});
console.log(htmls.join('\n'));


// Or you can write like this


var courses = [
    'HTML',
    'CSS', 
    'JavaScript',
    'Node.js',
    'React',
];
Array.prototype.map2 = function(callback) {
    var output = [];
    for(var i = 0; i < this.length; i++){
        var result = callback(this[i], i, this);
        output.push(result);
    }
    return output;
};
var myCallbackMap = function(course, index, Array){
    console.log(`${index + 1}. ${course}`);
    console.log(Array);
    return `<h2>${course}</h2>`;
}
var htmls = courses.map2(myCallbackMap);
console.log(htmls.join('\n'));

//forEach2 find2 filter2 map2 reduce2 some2 every2 findIndex2 findLastIndex2 includes2 findLastIndex2
//forEach2

var course = [
    'HTML',
    'CSS',
    'JavaScript',
];

// dùng vòng lặp for in để duyệt qua từng phần tử thực của mảng
// tối ưu hơn vòng lặp for ban đầu.
course.length = 10;
for(var index in course) {
    console.log(course[index]);
};

// forEach2
var courses = [
    'HTML',
    'CSS',
    'JavaScript',
    'Node.js',
];

courses.length = 1000;
// courses.forEach(function(currentCourse, index, Array){
//     console.log(currentCourse, index, Array);
// });
// hàm forEach không có giá trị trả về
Array.prototype.forEach2 = function(callback) {
    for(var index in this){
        if(this.hasOwnProperty(index)){
            callback(this[index], index, this);
        }
       
    }
};
courses.forEach2(function(currentCourse, index){
    console.log(currentCourse, index);
})

// filter2
var courses = [
    {
        name: 'HTML',
        duration: '4 weeks',
        coin: 680
    },
    {
        name: 'CSS',
        duration: '4 weeks',
        coin: 860
    },
    {
        name: 'JavaScript',
        duration: '4 weeks',
        coin: 980
    }
];
// filter không lặp qua mảng trống
// var filterCourses = courses.filter(function(currentCourse, index, Array){
//     return currentCourse.coin > 700;
// });

// console.log(filterCourses);

Array.prototype.filter2 = function(callbackFilter){
    var output = [];
    for (var index in this){
        if(this.hasOwnProperty(index)){
            var result = callbackFilter(this[index], index, this);
                if(result){
                    output.push(this[index]);
                } 
        }
    }
    return output;
};

var coursesFilter2 = courses.filter2(function(currentCourse, index, Array){
    return currentCourse.coin > 700;
});
console.log(coursesFilter2);


// some2 


var courses = [
    {
        name: 'JavaScript',
        coin: 680,
        isFinish: true
    },
    {
        name: 'PHP',
        coin: 850,
        isFinish: true
    },
    {
        name: 'Ruby',
        coin: 980,
        isFinish: true
    },
];
var coursesEvery = [
    {
        name: 'JavaScript',
        coin: 680,
        isFinish: true
    },
    {
        name: 'PHP',
        coin: 850,
        isFinish: true
    },
    {
        name: 'Ruby',
        coin: 980,
        isFinish: true
    },
];


Array.prototype.some2 = function(callbackSome){
    for (var index in this){
        if(this.hasOwnProperty(index)){
            var result = callbackSome(this[index], index, this); 
            if(result){
                return true;
            }
        }
    }
    return false;
}

var result = courses.some2(function(currentCourse, index, Array){
    // console.log(currentCourse, index, Array);
    return this.isFinish;
});
console.log(result);

// every2
Array.prototype.every2 = function(callbackEvery){
    var output = true;
    for (var index in this){
        if(this.hasOwnProperty(index)){
            var result = callbackEvery(this[index], index, this);
            if(!result){
                output = false;
                break;
            }
        }
    }
    return output;
}
var resultEvery = coursesEvery.every2(function(currentCourse, index, Array){
    // console.log(currentCourse, index, Array);
    return currentCourse.isFinish; // so sánh nếu giá trị của this.isFinish không phải kiểu dữ liệu boolean
});
console.log(resultEvery);
// console.log(coursesEvery[2].coin)
