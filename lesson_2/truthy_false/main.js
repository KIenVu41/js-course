/**
 * Truthy and Falsy values
 * 
 * Truthy - to bool is true
 * Bất cứ giá trị nào trong Javascript khi chuyển đổi sang kiểu dữ liệu boolean mà có giá trị true thì ta gọi giá trị đó là Truthy.
 * 
 * console.log(Boolean(1)) // true
 * console.log(Boolean(['BMW'])) // true
 * console.log(Boolean({ name: 'Miu' })) // true
 * console.log(!!'hi') // true
 * 
 * !! là gì? Đơn giản thôi. Toán tử ! là toán tử not (phủ định) nên !! là 2 lần phủ định, mà 2 lần phủ định lại trở thành “khẳng định”. Trong Javascript thì đây là một “tip” để convert (chuyển đổi) mọi kiểu dữ liệu khác sang Boolean
 * console.log(!!1) // true
 * console.log(!!'f8') // true
 * console.log(!!['Mercedes']) // true
 * 
 * Thêm !! phía trước các giá trị truthy sẽ luôn trả về true.
 * 
 * 
 * Falsy - to bool is false
 * 
 * Bất cứ giá trị nào trong Javascript khi chuyển đổi sang kiểu dữ liệu boolean mà có giá trị false thì ta gọi giá trị đó là Falsy.
 * Trong Javascript có 6 giá trị sau được coi là Falsy:
* false
* 0 (số không)
* '' or "" (chuỗi rỗng)
* null
* undefined
* NaN
*
*Ngoài 6 giá trị đã đề cập tới ở phần Falsy thì toàn bộ các giá trị khác đều là Truthy, kể cả những giá trị sau:
*'0' (một chuỗi chứa số không)
*' ' (một chuỗi chứa dấu cách)
*'false' (một chuỗi chứa từ khóa false)
*[] (một array trống)
*{} (một object trống)
*function(){} (một hàm “trống”)
*
* Ngoại lệ? - document.all
* document.all là một ngoại lệ chính thức duy nhất theo đặc tả ECMA (phiên bản 5). Đặc tả này mô tả toàn bộ các object khi chuyển sang boolean sẽ là true. Tuy nhiên, document.all là một ngoại lệ.
Cụ thể như sau:

1. document.all chuyển sang boolean sẽ là false
2. document.all khi là toán hạng của toán tử so sánh == hoặc != sẽ là undefined
3  Khi typeof document.all sẽ trả về "undefined"
 */