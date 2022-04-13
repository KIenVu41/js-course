/* Toán tử so sánh

==      -> so sánh bằng
!=      -> không bằng
>       -> lớn hơn
<       -> nhỏ hơn
>=      -> lớn hơn hoặc bằng
<=      -> nhỏ hơn hoặc bằng
*/

var a = 1;
var b = 2;

if(a == b){ // nếu điều kiện đúng thì chạy lệnh trong khối if, sai thì chạy else
    console.log('a và b bằng nhau');
} else {
    console.log('a và b không bằng nhau');
}

var name_1 = 'Nguyễn Văn A';
var name_2 = 'Nguyễn Văn A';

// so sánh 2 chuỗi
if(name_1 == name_2){
    console.log('name_1 và name_2 bằng nhau');
} else {
    console.log('name_1 và name_2 không bằng nhau');
}

// Toán tử so sánh - P2
/**
 * ===
 * !==
 */

var a = 1;
var b = 1;

console.log(a == b) // true

var c = '1';
console.log(a == c) // true, chỉ quan tâm value
console.log(a === c) // false, quan tâm value và kiểu dữ liệu

console.log(a != b) // false
console.log(a !== c) // true. tương tự