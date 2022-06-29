// 1.Frontend: Xây dựng giao diện người dùng 
// 2.Backend: Xây dựng logic cho giao diện người dùng và xây dựng cơ sở dữ liệu
// 3.Database: Xây dựng cơ sở dữ liệu
// 4.API: Xây dựng API cho phần mềm
// Cổng giao tiếp giữa Frontend và Backend
// API: Application Programming Interface

// Fetch API
// Json server: API server (fake) / Mock server
// -CRUD: Create, Read, Update, Delete
// -HTTP: Get, Post, Put, Delete
var postAPI = 'http://localhost:3000/courses'

fetch(postAPI)
.then(function(response){
    console.log(response);
    return response.json()
})
.then(function(courses){
    var htmls = courses.map(function(course){
        return `<li>
            <h2>${course.name}</h2>
            <p>${course.description}</p>
        </li>`
    })
    var html = htmls.join('');
    document.querySelector('.course-block').innerHTML = html;

})