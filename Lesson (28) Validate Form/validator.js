function Validator (options){
    var formElement = document.querySelector(options.form)
    

    function validate(inputElement, rule){
        var errorElement = inputElement.parentElement.querySelector(options.errorSelector)
        var errorMess = rule.test(inputElement.value)
        if(errorMess) {
            errorElement.innerText = errorMess;
            inputElement.parentElement.classList.add('invalid');
             } else {
            errorElement.innerText = '';
            inputElement.parentElement.classList.remove('invalid');
        }
    }




    if(formElement) {
        options.rules.forEach(rule => {
            var inputElement = formElement.querySelector(rule.selector);
            console.log (inputElement);
            if(inputElement){
                // Xử lý trường hợp blur khỏi input
                inputElement.onblur = function() {
                    console.log(inputElement.value);
                    // console.log(errorMess)
                    validate(inputElement, rule);
                }
                // Xử lý trường hợp người dùng nhập vào input
                inputElement.oninput = function() {
                    var errorElement = inputElement.parentElement.querySelector(options.errorSelector)
                    errorElement.innerText = '';
                    inputElement.parentElement.classList.remove('invalid');
                }
            }
        });
    }

}




// nguyên tắc của các rules 
// 1. Khi có lỗi ==> trả ra message lỗi
// 2. Khi hợp lệ ==> không trả ra gì cả => undefined

Validator.isRequired = function (selector){
    return {
        selector: selector,
        test: function(value){
            return value.trim() ? undefined : 'Vui lòng nhập trường này'
        }
    }
}













Validator.isEmail = function (selector){
    return {
        selector: selector,
        test: function(value){
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : 'Trường này phải là email'
        }
    }
}






Validator.minLength = function (selector, min) {
    return {
        selector: selector,
        test: function (value) {
            return value.length >= min ? undefined :  `Vui lòng nhập tối thiểu ${min} ký tự`
        }
    }
}

