/**
 * Kiểu dữ liệu trong JS
 * 
 * 1. Dữ liệu nguyên thủy - Primitive data
 * - Number
 * - String
 * - Boolean
 * - Undefined
 * - Null
 * - Symbol
 * 
 * 2. Dữ liệu phức tạp - Complex data
 * - Object
 * - Function
 */

// Number type
var a = 10
var b = 10.5

// String type
var fullName = 'Kien Vu'

// Boolean type
var isTrue = true
var isFalse = false

// Undefined type
var age

console.log(age) // khai báo mà không gán giá trị

// Null type
var isNull = null // nothing

// Symbol type
var id = Symbol('id') // description - unique

// Function
// Tự định nghĩa
var myFunction = function () {
    console.log('Hello')
}

myFunction()

// Object type
var myObject = {
    name: 'Kien',
    'age': 22, // tương tự khi viết age
    isMale: true,
    myFunction: function () {
        console.log('Hello')
    }
}

var myArray = [1, 2, 3, 4, 5] 

// Kiểu tra data type
var a = 1
console.log(typeof a) // number
var isNull = null
console.log(typeof isNull) // object ? 
