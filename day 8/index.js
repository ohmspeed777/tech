// let scores = [50, 75, 38, 49, 62, 82];

// function matchGrade(scores) {
//   if (scores >= 80) {
//     return 'A';
//   } else if (scores >= 70) {
//     return 'B';
//   } else if (scores >= 60) {
//     return 'C';
//   } else if (scores >= 50) {
//     return 'D';
//   } else {
//     return 'F';
//   }
// }

// function displayGrade(nameArea,grade) {
//   console.log(nameArea+ grade 👨‍🦰);
// }

// for (let i = 0; i < scores.length; i++) {
//   let grade = matchGrade(scores[i])

//   // displayGrade(matchGrade(scores[i]));
//   displayGrade(grade);
// }

// console.log(matchGrade(80))

// function test () {
//   console.log('1')
//   return ;
// }

// A - F

/*
สร้างฟังชั่น ที่มีการรีเทิน 3 ฟังชั่น
และฟังชั่น สำหรับแสดงผล 1 ฟังชั่น

โดย 3 ฟังชั่น เป็น ฟังชั่นเกี่ยวกับการ หา พื้นที่
*/

// oop

// 9 = 4 + 5, 3 * 3, 12 - 9

/*

const birth = {
  feather: prop,
  leg: prop,
  fly: behave
}

*/
const feather = 'white';

// const birth = {
//   feather: 'white',
//   leg: 'black',
//   fly: function() {
//     console.log('fly')
//   }
// }

let yorn = {
  speed: 255,
  hp: 10000,
  atk: 1000000,
  def: 5000,
  fierceShot: function () {
    console.log('this is FierceShot');
  },
  explosiveArrow: function () {
    console.log('this is explosiveArrow');
  },
  heavenlyBarrage: function () {
    console.log('this is heavenlyBarrage');
  },
};

let yorn2 = {
  speed: 210,
  hp: 200,
  atk: 1000000,
  def: 5000,
  fierceShot: function () {
    console.log('this is FierceShot');
  },
  explosiveArrow: function () {
    console.log('this is explosiveArrow');
  },
  heavenlyBarrage: function () {
    console.log('this is heavenlyBarrage');
  },
};

let yorn3 = {
  speed: 100,
  hp: 10000,
  atk: 1000000,
  def: 5000,
  fierceShot: function () {
    console.log('this is FierceShot');
  },
  explosiveArrow: function () {
    console.log('this is explosiveArrow');
  },
  heavenlyBarrage: function () {
    console.log('this is heavenlyBarrage');
  },
};

let obj = {
  test: [1, 2, 5],
  run: function () {
    console.log('run');
  },
  yorn: {
    speed: 255,
    hp: 10000,
    atk: 1000000,
    def: 5000,
    fierceShot: function () {
      console.log('this is FierceShot');
    },
  },
};

// class

// console.log(yorn.speed);
// yorn.fierceShot();
// obj.yorn.fierceShot()

console.log(obj.yorn.speed);
// console.log(obj.test[0])

class Yorn {}

for (let i = 0; i < 1000000; i++) {
  let yorn1 = new Yorn();
}

let yorn2 = new Yorn();
