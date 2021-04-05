// + =

//ex 1

function reverse(s) {
    var a = [];
    for (var i = 0, len = s.length; i <= len; i++)
      a.push(s.charAt(len - i));
    return a.join('');
  }
  console.log(reverse("program"))
  console.log(reverse("data"))
//ex 2

let b = "this is Test";
let c = "hello a";
console.log(b.toUpperCase())
console.log(c.toUpperCase())



//Ex 3


function unique(arr) {
    return Array.from(new Set(arr))
  }
  console.log(unique(["one","two","three","one","one","four","five","four","five","five"]))
  console.log(unique([1,2,3,3,4,5,4,4,4,5,5]))

//Ex 4

const staff1 = {
    name : "Nguyen van A",
    age: 29,
    luong : "8 triệu",
    chuc: "nhan vien quèn", 
};
const staff2 = {
    name : "Nguyen van b",
    age: 31,
    luong : "8 triệu",
    chuc: "nhan vien hịn", 
};
const staff3 = {
    name : "Nguyen van c",
    age: 30,
    luong : "8 triệu",
    chuc: "nhan vien xịn", 
};
console.log(staff1.name)
//creat
staff1.size = "KIN";
console.log(staff1)

//update
staff2.name = "Nguyên Văn Bảnh";
console.log(staff2)

//ex5













