/*

<?php

>
<script>
</script>

var x = 5
vax z = 'sadas'


พาราดาม ภาษา
อินเตอร์พิเตอร์

1
2
3
4
5
.
.
.
.
ืn

print('msg')
$_POST[]
$_GET()
$TRIM()


// oop
System.out.print('text')
Math.pow(10, 2)

Math = new Math();
Math.pow(10, 2)

class Math {
  pow(x, y) {
    return x + y;
  }
}

// functional
print(function() {
  return text;
})

Pow((el) => el ** 2)

*/

/* 
!! Type data
! in java
1 String
2 int
3 float
4 double
5 char
6 boolean
7 long
8 double


! in js
1 boolean => true false
2 number => 1 2 - 5 5.364  6.55 NaN
3 undefined => undefined
4 string => 'sadas', "sadasd", `sadasda`
5 null => null
6 object => { }
7 function => function class
8 symbol => *** 


*/

// console.log(typeof '555') // string
// console.log(typeof 555) // number
// console.log(typeof 555.55) // number
// console.log(typeof `555`)  // string
// console.log(typeof x) // undifined
// console.log('55' + 55) // 5555  string
// console.log(x + 55)
// console.log(undefined + 55) // Nan => not a number
// console.log(null + 55) // number
// console.log('true'); // string
// console.log(true); // boolean
// console.log(class Test {}); // function
// console.log(typeof [1, 2, 3, 4, 5]); // array [] // object

// console.log(typeof NaN)

/*
1 boolean => true false
2 number => 1 2 - 5 5.364  6.55 NaN
3 undefined => undefined
4 string => 'sadas', "sadasd", `sadasda`
5 null => null
6 object => { }
7 function => function class
8 symbol => *** 

! พื้นฐาน
boolean
number
undefined
string
null
symbol
function

! reference type
object


*/

// let x = 55;
// let y = x + 10;
// // x + 10;

// console.log('x: ', x);
// console.log('y: ', y);

// const a = [1, 2, 3];
// const b = a.push(4);

// console.log('a: ', a);
// console.log('b: ', b);

// 1
// var x = 5

// if (true) {
//   // 2
//   var y = 6
//   console.log('this is if')

//   if (true) {

//     var z = 7
//     //3
//   }
// }

// var a
// if (true) {
//   // 2
//   var b
// }

// block scope = { }
var x;
if (false) {
  var z = 5;
  console.log(z); // 5
} else {
  var y;

  if (true) {
    console.log(z + 10); // undefined, 15, NaN
  }
}

// พาราดาม คือ แนวทางการภาษา oop => java, normal, functional

// 9 = 5 + 4 // 3 *3 // 6 + 3
