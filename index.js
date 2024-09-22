// const value = +prompt("Enter the value");
// const pro = new Promise(function (res, rej) {
//   const url = ` https://fakestoreapi.com/products/${value}`;

//   fetch(url)
//     .then((response) => res(response.json()))
//     .catch((error) => rej(error));
// });

// pro
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((rej) => {
//     console.log(rej);
//   });

// const main = (a, b, callBack) => {
//   return callBack(a, b);
// };
// main(12, 8, (num1, num2) => {
//   console.log(num1 + num2);
// });

// const main = (dataId, getNextData) => {
//   setTimeout(() => {
//     console.log("data", dataId);
//     if (getNextData) {
//       getNextData();
//     }
//   }, 1000);
// };

// main(100, () => {
//   main(101, () => {
//     main(102, () => {
//       main(103, () => {
//         console.log("All data fetched");
//       });
//     });
//   });
// });

// setTimeout(() => {
//   console.log("Step 1: Start cooking");
//   setTimeout(() => {
//     console.log("Step 2: Prepare ingredients");
//     setTimeout(() => {
//       console.log("Step 3: Cook food");
//       setTimeout(() => {
//         console.log("Step 4: Serve food");
//         setTimeout(() => {
//           console.log("Step 5: Start Eating");
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  work() {
    console.log(`${this.name} is working.`);
  }
  eat() {
    console.log(`${this.name} is eating.`);
  }
}

class Child extends Person {
  constructor(name, age, grade, game) {
    super(name, age);
    this.grade = grade;
    this.game = game;
  }
  play(gameIdx = 0) {
    console.log(`${this.name} is playing ${this.game[gameIdx]}.`);
  }
  sleep() {
    console.log(`${this.name} is sleeping.`);
  }
}
const person = new Person("shayan", 18);
const child = new Child("ali", 9, "A1", ["cricket", "hockey"]);
console.log(child);
