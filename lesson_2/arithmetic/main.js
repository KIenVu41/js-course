/**
 * Toán tử số học
 * +  -> Cộng
 * -  -> Trừ
 * *  -> Nhân
 * ** -> lũy thừa
 * /  -> Chia
 * %  -> Chia lấy phần dư
 * ++ -> Tăng 1
 * -- -> Giảm 1
 */

var a = 1;
var b = 2;

//var c = a + b;  + c = 3 
//var c = a - b;  - c = -1
//var c = a * b;  * c = 2
//var c = a ** b; ** c = 1
//var c = a / b;  / c = 0.5
//var c = a % b;  % c = 1
// a++; a = 2
// a--; a = 0

/**
Toán tử ++ và --
1. Toán tử ++
- Toán tử ++ giúp tăng giá trị của một biến mang giá trị số lên 1. Có 2 cách để sử dụng toán tử ++ là:
+ Dùng làm hậu tố: variable++ (toán tử nằm sau biến)
+ Dùng làm tiền tố: ++variable (toán tử nằm trước biến)
#1 Sử dụng ++ làm hậu tố
var number = 1;

number++; // dùng làm hậu tố, ++ ở phía sau biến
console.log(number); // 2

number++;
console.log(number); // 3
Sau mỗi khi sử dụng toán tử ++, giá trị của biến number được tăng lên 1. Tuy nhiên:
var number = 1;

console.log(number++); // 1
console.log(number); // 2

console.log(number++); // 2
console.log(number); // 3
-> Toán tử ++ khi dùng là hậu tố sẽ tăng giá trị của biến lên 1 và trả về giá trị trước khi tăng.
#2 Sử dụng ++ làm tiền tố
var number = 1;

++number; // dùng làm tiền tố, ++ ở phía trước biến
console.log(number); // 2

++number;
console.log(number); // 3
Xét kĩ hơn:
var number = 1;

console.log(++number); // 2
console.log(number); // 2

console.log(++number); // 3
console.log(number); // 3
-> Toán tử ++ khi dùng là tiền tố sẽ tăng giá trị của biến lên 1 và trả về giá trị sau khi tăng.
2. Toán tử - -
- Cách hoạt động tương tự như toán tử ++, điểm khác biệt là thay vì cộng thêm 1, thì toán tử -- sẽ trừ đi 1.
*/