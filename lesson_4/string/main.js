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

// Làm việc với chuỗi

/*
var myString = "Hoc JS tai F*!"
1. Length
console.log(fullName.length)

2. Find index
console.log(myString.indexOf("JS"))
-> Tra ve vi tri ki tu dau tien duoc tim thay
myString.indexOf("JS", 5) tham so thu 2 tim kiem bat dau tu vi tri thu 5
-> Khong tim thay tra ve -1
myString.lastIndexOf("JS")
-> Vi tri chuoi cuoi cung
- So sanh voi search(); search cung giong indexOf() nhung khong co param thu 2, ho tro tim kiem theo bieu thuc chinh quy.

3. Cut string
console.log(myString.slice(0, 5))
-> Tra ve chuoi tu vi tri thu 0 den vi tri thu 5
- Neu muon cat het thi chi can dung myString.slice(0), khong can dung tham so thu 2
- Cat tu phai qua trai dung param am

4. Replace
console.log(myString.replace("F*", "F9"))
-> Tra ve chuoi sau khi replace
- Chi cat tu ki tu dau tien tim thay, muon cat het phai dung regex

5. Convert to upper case
console.log(myString.toUpperCase())
-> Chuyen tat ca sang chu 

6. Convert to lower case
console.log(myString.toLowerCase())
-> Chuyen tat ca sang chu thuong

7. Trim
console.log(myString.trim())
-> Xoa khoang trang dau va cuoi

8. Split
var languages = "JavaScript, PHP, Ruby, Python, C#, C++"
console.log(languages.split(","))
-> Tra ve mang chua cac phan tu cua chuoi duoc cat theo dau ','

9. Get a character by index
console.log(myString.charAt(0))
-> Tra ve ki tu theo vi tri trong chuoi, khong co thi tra ve ''
*/


