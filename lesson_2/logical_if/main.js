// Hiểu hơn về câu lệnh điều kiện
// và phép so sánh

var a = 1
var b = 2

// var result = a < b // true

// console.log('result', result)

var result = a < b && a < 0 // false, toán tử logic không trả về boolean
var result_2 = 'A' && 'B' && 'C' // C
// && đọc từ trái qua phải, nếu giá trị là true thì lấy tiếp giá trị bên phải và gán vào biến, nếu là false thì lấy chính nó rồi gán
var result_3 = 'A' || 'B' || 'C' // A
// || đọc từ trái qua phải, nếu true thì lấy luôn để gán vào biến, không quan tâm giá trị sau




