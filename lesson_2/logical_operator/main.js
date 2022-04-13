/**
 * Toán tử logic
 * 1. && - AND
 * 2. || - OR
 * 3. ! - NOT
 */

var a = 1
var b = 2
var c = 3

if (a > 0 && b > 0) {
    console.log("Dieu kien dung"); // in ra điều kiện đúng vì 2 điều kiện đều là true
}

if (a > 0 || b > 0) {
    console.log("Dieu kien dung"); // in ra điều kiện đúng vì 1 điều kiện là true
}

if (!(a > 0)) {
    console.log("Dieu kien sai"); // in ra điều kiện sai vì ! phủ định điều kiện nên là false
} 