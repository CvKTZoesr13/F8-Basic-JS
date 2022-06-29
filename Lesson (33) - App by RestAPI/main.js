

var courseAPI = 'http://localhost:3000/courses';

function start() {
    getCourses(renderCourses);
    handleCreateForm();
}


start();

// Functions
function getCourses(callback) {
    fetch(courseAPI)
        .then(function(response) {
            return response.json();
        })
        .then(callback);
}
function renderCourses(courses) {
    var listCoursesBlock  = document.getElementById('list-courses');
    var htmls = courses.map(function(course, index){
        return`
            <li>
                <h4>${course.name}</h4>
                <p>${course.description}</p>
                <button onclick="handleDeleteCourse(${course.id})" id = ${index}>Delete</button>
            </li>`
    })
    var html = htmls.join('');
    listCoursesBlock.innerHTML = html;
}

function handleCreateForm() {
    var createBtn = document.querySelector('#create')


    createBtn.onclick =  function(){
        var name = document.querySelector('input[name= "name"]').value;
        var description = document.querySelector('input[name = "description"]').value;
        
        var formData = {
            name: name,
            description: description
        }
        createCourse(formData, function(){
            getCourses(renderCourses);
        });
    }
}

function createCourse(data, callback) {
    var options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data),
    }
        fetch(courseAPI, options) 
            .then(function(response){
                response.json();
            })
            .then(callback);
}
function handleDeleteCourse(id) {
    var options = {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
    }
        fetch(courseAPI + '/' + id, options)
            .then(function(response){
                response.json();
            })
            .then(function() {
                getCourses(renderCourses)
            })
}












// function start() {
//     getCourses(function(courses) {
//         courses.forEach(function(course) {
//             var courseItem = document.createElement('li');
//             courseItem.innerHTML = course.name;
//             listCoursesBlock.appendChild(courseItem);
//         });
//     });
//     handleCreateForm();
// }

// start();


// // Function to get data from API
// function getCourses(callback) {
//     fetch(courseAPI)
//         .then(function(response) {
//             return response.json();
//         })
//         .then(callback);
// };

// function renderCourses(courses) {
//     courses.forEach(function(course) {
//         var courseItem = document.createElement('li');
//         courseItem.innerHTML = course.name;
//         listCoursesBlock.appendChild(courseItem);
//     });
// }

// function handleCreateForm() {
//     var createBtn = document.getElementById('create');
//     createBtn.onclick = function(){
//         var name = document.querySelector('input[name = "name"]');
//         var description = document.querySelector('input[name = "description"]');
//         var formData = {
//             name: name.value,
//             description: description.value
//         };
//         // console.log(name);
//         // console.log(description)
//         createCourse(formData, function(){
//             getCourses(renderCourses);
//         });
//     }
// }
// function createCourse(data, callback){
//     var options = {
//         method: 'POST',
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify(data)
//     }
//         fetch(courseAPI, options)
//         .then(function(response){
//             response.json();
//         })
//         .then(callback);
// }
// createCourse();