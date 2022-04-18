/*
Các lại function

1. Declaration function
2. Expression function
3. Arrow function
*/

showMessage();

function showMessage() {
    console.log('Hello World');
}
// declaration function

var showMessage2 = function () {
    console.log('Hello World 2');
}
// expression function

// Giống nhau: đều phải gọi mới thực hiện
// Khác nhau: declaration function có thể gọi trước khi được khai báo -> hoisting