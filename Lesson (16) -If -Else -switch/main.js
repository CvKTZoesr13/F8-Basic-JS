// alert('Hi there!');



var date = new Date();
var getDay = function() { 
    return date.getDay() + 1;
}
console.log(getDay());

// if (getDay() == 2) {
//     console.log('Today is Monday');
// } else if (getDay() == 3){
//     console.log('Today is Tuesday');
// } else if (getDay() == 4){ 
//     console.log('Today is Wednesday');
// }else if (getDay() == 5){
//     console.log('Today is Thursday');
// }else if (getDay() == 6){
//     console.log('Today is Friday');
// }else if (getDay() == 7){
//     console.log('Today is Saturday');
// }else if (getDay() == 1){
//     console.log('Today is Sunday');
// }
// else { 
//     console.log('Unknown');
// }


// Switch Statement   --> This is a better way to do if else, default using === instead of == to compare values
switch(getDay()) {
    case 1:
        console.log('Today is Sunday');
        break;
    case 2:
        console.log('Today is Monday');
        break;
    case 3:
        console.log('Today is Tuesday');
        break;
    case 4:
        console.log('Today is Wednesday');
        break;
    case 5:
        console.log('Today is Thursday');
        break;
    case 6:
        console.log('Today is Friday');
        break;
    case 7:
        console.log('Today is Saturday');
        break;
    default:
        console.log('Unknown');
        break;
}
