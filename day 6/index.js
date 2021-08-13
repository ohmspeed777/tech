// Array
// let name = '';
// let numArray = [1, 5, 6, 8, 5, 18];

// // [10, 50, 60 ,80 ,50 ,180]

// let newNumArray = [];
// // newNumArray[0] = 5;
// // newNumArray[1] = numArray[5];
// // newNumArray = [5, 18]

// // let a = 0;
// // a = 5 * 10

// // console.log(newNumArray);
// /*
// 10
// 50
// 60
// .
// .
// 180
// */
// // console.log(numArray);
// // numArray[0];

// // for (let i = 0; i < 7; i++) {
// //   console.log(numArray[i]);
// // }

// // console.log(numArray.length)

// // for (let i = 0; i < numArray.length; i++) {
// //   console.log(numArray[i] * 10);
// // }

// let nameArray = ['kar', 'liew', 'tai', 'chet', 'meng'];
// let idArray = [624259014, 624259036, 62425904, 624259017, 624259037];

// /*
// 'My nickname is meng and id 624259014'
// nameArray[4] idArray[0]
// 'My nickname is chet and id 624259036'
// nameArray[3] idArray[1]
// 'My nickname is tai and id 62425904'
// nameArray[2] idArray[2]
// 'My nickname is liew and id 624259017'
// nameArray[1] idArray[3]
// 'My nickname is kar and id 624259037'
// nameArray[0] idArray[4]
// */

// for (let i = 1; i <= nameArray.length; i++) {
//   console.log(
//     'My nickname is ' +
//       nameArray[nameArray.length - i] +
//       ' and id' +
//       idArray[i - 1]
//   );
// }

// 1
let numArray = [1, 5, 6, 8, 5, 18];
let newArray = [];

for (let i = 0; i < numArray.length; i++) {
  // 2
  newArray[i] = numArray[i] * 10;
  // newArray[0] = 1 * 10; // 1
  // numArray[1] = 5 * 10; // 2
  // numArray[2] = 6 * 10;; // 3
  // numArray[3] = 8 * 10;; // 4
  // numArray[4] = 5 * 10;; // 5
  // numArray[5] = 18 * 10;; // 5

}

console.log(newArray)
