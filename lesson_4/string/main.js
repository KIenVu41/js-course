/* 
Chuỗi trong JS

1. Tạo chuỗi
    - Các cách tạo chuỗi
    - Nên dùng cách nào? Lý do?
    - Kiểm tra data type
2. Một số case sử dụng \
3. Xem độ dài chuỗi
4. Chú ý độ dài khi viết code
5. Template string ES6
*/

var fullName = 'Kien Vu'
var fullName2 = new String('Kien Vu')
console.log(typeof fullName2) // object
// nên dùng cách 1: ngắn gọn, nhanh hơn, cách 2 tạo object

var fullName3 = "Kien Vu la \'sieu nhan\'"
console.log(fullName3) // Kien Vu la 'sieu nhan'

console.log(fullName3.length) 

var text = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
// nên dùng tối đa 1 dòng 80 ký tự
// khắc phục bằng cách cộng chuỗi

var firstName = 'Kien'
var lastName = 'Vu'

console.log(`Toi la ${firstName} ${lastName}`)
// giá trị trong ${} phải là string
