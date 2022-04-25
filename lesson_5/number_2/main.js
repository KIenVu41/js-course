/* 
Number trong JS

1. Tạo giá trị Number
- Các cách tạo
- Dùng cách nào? Tại sao?
- Kiểm tra data type

2. Làm việc với Number
- To string
- To Fixed
*/

var age = 22;
var PI = 3.14;

var number = new Number(22);
// nên dùng cách 1, tránh dùng new

var result = 22 / 'av';
console.log(result); // NaN
// NaN là số không hợp lệ, có 1 cách đơn giản để check 1 số không phải NaN result === result hoặc isNaN(result)

console.log(age.toString()); // '22' string
console.log(age.toFixed(2)); // '22.00'
// nếu không dùng tham số thì mặc định là 0, trên 0.5 thì làm tròn lên


