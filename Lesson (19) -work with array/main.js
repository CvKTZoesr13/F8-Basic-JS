// alert('Hi there!');

/*
            Array Methods
            1. forEach()
            2. every()
            3. filter()
            4. find()
            5. some()
            6. reduce()

*/


var courses = [
    {
        id: 1,
        name: 'JavaScript',
        price: 0
    },
    {
        id: 2,
        name: 'HTML',
        price: 0
    },
    {
        id: 3,
        name: 'CSS',
        price: 0
    },
    {
        id: 4,
        name: 'PHP',
        price: 100
    }
]
courses.forEach(function (course, index) {
    console.log(index,course);
});           // Callback function

var isFree = courses.every(function(course, index){
    return course.price === 0;
})

console.log(isFree);
if (isFree == true) {
    console.log('All courses are free');
} else {
    console.log('Some courses are not free');
}

// map()
var newCourses = courses.map(function(course, index){
    return {
        id: course.id,
        name: `Khoa hoc: ${course.name}`,
        price: course.price,
        priceText: course.price === 0 ? 'Free' : 'Not free'
    };
})
console.log(newCourses);

//reduce()

var totalPrice = courses.reduce(function(total, CurrentCourse, currentIndex, array){        // currentIndex: index của một phần tử trong mảng
    //currentCourse: một phần tử trong mảng
    console.log(CurrentCourse);
    return total + CurrentCourse.price;
    // console.log(total);
}
,0); // initial value total = 0 (0 là giá trị ban đầu)
console.log(totalPrice);
// khong can dung initial value khi du lieu tra ve co cung kieu du lieu voi phan tu trong Mang
var numbers = [120, 0, 40, 100]
var total = numbers.reduce(function(total, currentNumber, currentIndex, array){
    // console.log(currentNumber);
    return total + currentNumber;
});
console.log(total);


// Flat - "Làm phẳng" mảng từ Depth array (mảng có nhiều mảng con)
var depthArray = [1, 2, [3, 4, [5, 6]]];

var flatArray = depthArray.flat().flat();
console.log(flatArray);

console.log(`Or you can use reduce()`);
var flatArrayByReduce = depthArray.reduce(function(flatOutput, DepthArrayItem){
    if (Array.isArray(DepthArrayItem)) {
        return flatOutput.concat(DepthArrayItem.reduce(function(flatOutput, DepthArrayItem){
            return flatOutput.concat(DepthArrayItem);
        }, []));
    } else {
        return flatOutput.concat(DepthArrayItem);
    }
},[]);
console.log(flatArrayByReduce);

// Lấy ra các khóa học đưa vào một mảng mới
var topics = [
    {
        topic: 'Frontend',
        courses: [
            {
                id: 1,
                name: 'HTML',
                price: 0
            },
            {
                id: 2,
                name: 'CSS',
                price: 0
            },
            {
                id: 3,
                name: 'JavaScript',
                price: 0
            },
        ],
    },
    {
        topic: 'Backend',
        courses: [
            {
                id: 4,
                name: 'PHP',
                price: 100
            },
            {
                id: 5,
                name: 'Python',
                price: 0
            },
            {
                id: 6,
                name: 'Ruby',
                price: 0
            }
        ],
    }
]

var newCourses = topics.reduce(function(newCourses, topic){
    return newCourses.concat(topic.courses);
}, []);
console.log(newCourses);

var HTML = newCourses.map(function(course){
    return `
        <div class="course">
            <p>${course.id}</p>
            <h3>${course.name}</h3>
        </div>`;
});
console.log(HTML.join(''));

