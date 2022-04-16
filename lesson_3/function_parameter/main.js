// Tham số trong hàm

/*
1. Tham số
- Định nghĩa: giá trị truyền vào 1 function
- Kiểu dữ liệu: không giới hạn
- Tính private: khi truyền tham số thì sử dụng được trong hàm đó

2. Truyền tham số
- 1 tham số
- Nhiều tham số

3. Arguments
- Đối tượng arguments là 1 mảng các giá trị truyền vào hàm
*/

function writeLog() {
    var myString ='';
    for(var param of arguments) {
        myString += `${param} `;
        console.log(arguments)
    }   
}

writeLog()