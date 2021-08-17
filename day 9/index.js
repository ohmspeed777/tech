let cat = {
  eyes: 2,
  ears: 2,
  tail: 1,
  body: 1,
  head: 1,
  legs: 4,
  walk: function () {
    console.log('walk');
  },
  run() {
    console.log('run');
  },
  roll() {
    console.log('roll');
  },
};

// console.log(this)

// cat.child.run()

// console.log(cat.legs);

/*
1) การห่อหุ้มข้อมูล // public private (protected)
2) การสืบทอด // extends
3) การหลากหลายรูปแบบ //  extends new
4) นามธรรม // abstract
*/

// class Cat {
//   // eyes = 2;
//   // ears = 2;
//   // tail = 1;
//   // body = 1;
//   // head = 1;
//   // legs = 4;

//   //
//   constructor() {
//     this.eyes = 2;
//     this.ears = 2;
//     this.tail = 1;
//     this.body = 1;
//     this.head = 1;
//     this.legs = 4;
//   }

//   walk() {
//     console.log('walk');
//   }

//   run() {
//     console.log('run');
//   }

//   roll() {
//     console.log('roll');
//   }
// }

// let cat1 = new Cat();
// cat1.eyes = 2

// console.log(cat1)
// let cat2 = new Cat()
// cat2.eyes = 2
// cat1.run()

// Cat.walk()
// 1
class Calculator {
  // 2
  num1;
  num2;

  constructor(n1, n2) {
    // 3
    this.num1 = n1;
    this.num2 = n2;
  }

  add() {
    // 3
    return this.num1 + this.num2;
  }

  subtract() {
    return this.num1 - this.num2;
  }

  multiply() {
    return this.num1 * this.num2;
  }

  divide() {
    return this.num1 / this.num2;
  }
}

let cal = new Calculator(5, 10);
console.log(cal.add(), cal.subtract(), cal.divide(), cal.multiply());
