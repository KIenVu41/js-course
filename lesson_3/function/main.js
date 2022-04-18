/*
Một số điều cần biết về function

1. Khi function đặt trùng tên?
2. Khai báo biến trong hàm?
3. Định nghĩa hàm trong hàm?
*/

// function showMessage() {
//     console.log('Hello World');
// }

// function showMessage() {
//     console.log('Hello World 2');
// }

// showMessage(); // Hello World 2 -> function viết sau được gọi


// function showMessage() {
//     var fullName = 'Kien vu';
//     console.log(fullName); // biến chỉ có scope trong hàm
// }

function showMessage() {
    function showMessage2() {
        console.log('Hello World');
    }

    showMessage2(); // tính private, chỉ truy cập trong hàm định nghĩa
}

showMessage();
