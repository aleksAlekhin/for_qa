// // VARIABLES
// let admin = ''
// let name = 'Джон'
// admin = name
// alert(admin)
// // 
// let ourEarth = ''
// let currentUser = ''
// // 
// const BIRTHDAY = '18.04.1982'; // использовать заглавные буквы? yes
// // const AGE = someCode(BIRTHDAY); // а здесь? No

// // ALERT-PROMPT-CONFIRM
// let userName = prompt("what's is your name?")
// alert(`Hi ${userName}`)

// // operators
// let a = 1, b = 1;

// let c = ++a; // 2
// let d = b++; // 1
// // 
// let a1 = 2;
// let x2 = 1 + (a *= 2); 
// // x = 5, a умноженно на 2 и + 1

// // 
// let a3 = prompt("Первое число?", 1);
// let b3 = prompt("Второе число?", 2);

// alert(Number(a1) + Number(b3))

// // Операторы сравнения
// 5 > 4 // true
// "ананас" > "яблоко"// false
// "2" > "12" // true
// undefined == null // true
// undefined === null // false
// null == "\n0\n" //false
// null === +"\n0\n" // false

// // IF ELSE

// // Выведется ли alert? yes
// if ("0") {
//   alert( 'Привет' );
// }
// // 
// let officialNameJs = prompt("what's the official name of JS?", '')
// if (officialNameJs == "ECMAScript") {
//     alert("Верно")
// } else {
//     alert('Нет')
// }
// // 
// let num = prompt("input your number", '')
// if (Number(num) > 0) {
//     alert(1)
// }else if (Number(num) < 0) {
//     alert(-1)
// }else if (Number(num) === 0){
//     alert(0)
// }
// // 
// // Перепишите конструкцию if с использованием условного оператора '?':
// // let result;
// // if (a + b < 4) {
// //   result = 'Мало';
// // } else {
// //   result = 'Много';
// // }
// let result = (a + b < 5) ? "Мало" : "Много"

// // ЛОГИЧЕСКИЕ ОПЕРАТОРЫ ||(ИЛИ), &&(И), !(НЕ), etc

// // Что выведет код ниже? 2
// // alert( null || 2 || undefined );

// // Что выведет код ниже? 1 и 2
// // alert( alert(1) || 2 || alert(3) );

// // Что выведет код ниже? null
// // alert( 1 && null && 2 );

// // Проверка значения из диапазона
// let age = prompt("input your age", '')
// if (Number(age) >= 14 && Number(age) <= 90) {
//     alert('access allowed')
// } else {
//     alert('access blocked')
// }

// // Проверка значения вне диапазона
// let age2 = prompt("2 input your age 2", '')
// if (Number(age2) < 14 || Number(age2) > 90) {
//     alert('access allowed')
// } else {
//     alert('access blocked')
// }

// // Проверка логина
// let checkLogin = prompt("enter your login", '')

// if (checkLogin == 'Админ') {
//     let enterPassword = prompt("enter your password", '')
//     if (enterPassword === 'Я главный'){
//         alert('Здравствуйте!')
//     } else if (enterPassword === null || enterPassword === '') {
//         alert('Отменено')
//     } else if (enterPassword != 'Я главный') {
//         alert('Неверный пароль')
//     }
// } else if (checkLogin === null || checkLogin === ''){
//     alert('Отменено')
// } else if (checkLogin != 'Админ') {
//     alert ('Я вас не знаю')
// }

// // WHILE-FOR

// // Выведите чётные числа for 
// for (let i = 2; i <= 10; ++i) {
//     if (i % 2 == 0 ) {
//         alert(i)
//     }
// }
// // Замените for на while 

// // for (let i = 0; i < 3; i++) {
// //     alert( `number ${i}!` );
// //   }
// let i = 0;
// while (i < 3) {
//     alert( `number ${i}!`)
//     i++
// } 

// // Повторять цикл, пока ввод неверен
// let n1 = 0; 
// while (n <= 100) { 
//   n = prompt("Введите число больше 100", 0); 
//   if (n1 === null) break;
// }

// // Вывести простые числа
// let n = 10;

// for (let i = 2; i <= n; i++) {
//     let isPrime = true; 

//     for (let j = 2; j * j <= i; j++) { 
//         if (i % j === 0) {
//             isPrime = false; 
//             break; 
//         }
//     }
//     if (isPrime) { // Если число простое, выводим его
//         alert(i);
//     }
// }

// // SWITCH

// // Напишите "if", аналогичный "switch"
// // switch (browser) {
// //     case 'Edge':
// //       alert( "You've got the Edge!" );
// //       break;
  
// //     case 'Chrome':
// //     case 'Firefox':
// //     case 'Safari':
// //     case 'Opera':
// //       alert( 'Okay we support these browsers too' );
// //       break;
  
// //     default:
// //       alert( 'We hope that this page looks ok!' );
// //   }
// let browser = prompt('choose browser', '')
// if (browser === "Edge") {
//     alert( "You've got the Edge!" );
// } else if (browser === "Chrome" || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') {
//     alert( 'Okay we support these browsers too' );
// } else {
//     alert( 'We hope that this page looks ok!' );
// }

// // Переписать условия "if" на "switch"
// // const number = +prompt('Введите число между 0 и 3', '');
// // if (number === 0) {
// //   alert('Вы ввели число 0');
// // }
// // if (number === 1) {
// //   alert('Вы ввели число 1');
// // }
// // if (number === 2 || number === 3) {
// //   alert('Вы ввели число 2, а может и 3');
// // }
// const number = +prompt('Введите число между 0 и 3', '');
// switch (number) {
//     case 0:
//       alert('Вы ввели число 0');
//       break;
//     case 1:
//       alert('Вы ввели число 1');
//       break;
//     case 2:
//     case 3:
//       alert('Вы ввели число 2, а может и 3');
//       break;          
// }

// // FUNCTION-BASICS

// // Перепишите функцию, используя оператор '?' или '||'
// // function checkAge(age) {
// //     if (age > 18) {
// //       return true;
// //     } else {
// //       return confirm('Родители разрешили?');
// //     }
// //   }
// function checkAge (age) {
//     return age > 18 ? true : confirm('Родители разрешили?');
// }

// // Функция min(a, b)
// function min (a, b) {
//     if (a < b) {
//         return a 
//     } else return b
// }

// // Функция pow(x,n)
// function pow (x,n) {
//     return  x**n
// }

// // ARROW-FUNCTIONS-BASICS

// // Перепишите с использованием функции-стрелки
// // function ask(question, yes, no) {
// //     if (confirm(question)) yes()
// //     else no();
// //   }
  
// //   ask(
// //     "Вы согласны?",
// //     function() { alert("Вы согласились."); },
// //     function() { alert("Вы отменили выполнение."); }
// //   );

// let ask = (question, yes, no) => {
//     if (confirm(question)) yes()
//     else no(); 
// }

// ask(
//     "Вы согласны?",
//     () => alert("Вы согласились."),
//     () => alert("Вы отменили выполнение.")
//   );

// //   Objects 4.1

// // Напишите код, выполнив задание из каждого пункта отдельной строкой:

// // Создайте пустой объект user.
// // Добавьте свойство name со значением John.
// // Добавьте свойство surname со значением Smith.
// // Измените значение свойства name на Pete.
// // Удалите свойство name из объекта.
// let user = {};
// user.name = "John";
// user.surname = "Smith";
// user.name = "Pete";
// delete user.name;

// // Проверка на пустоту
// function isEmpty(obj) {
//     for (let key in obj) {
//       return false;
//     }
//     return true;
//   }
// //   Можно ли изменить объект, объявленный с помощью const? Как вы думаете? 
// const user = {
//     name: "John"
//   };
  
//   // это будет работать? ДА это сработает
//   user.name = "Pete";

// //   Сумма свойств объекта
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   };
  
//   function sumSalaries(obj) {
//     let sum = 0;
//     for (let key of Object.keys(obj)) {
//       sum += obj[key];
//     }
//     return sum;
//   }
  
//   let sum = sumSalaries(salaries);
//   console.log(sum)

// // Умножаем все числовые свойства на 2
// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };

//   function multiplyNumeric(obj) {
//     for (let key of Object.keys(obj)) {
//       if (typeof obj[key] === 'number') {
//         obj[key] *= 2;
//       }
//     }
//   };

//   multiplyNumeric(menu);
  
//   console.log(menu);

//   // Методы объекта, "this"

//   // Создайте калькулятор
//   let calculator = {
//     read () {
//       this.num1 = prompt();
//       this.num2 = prompt()
//     },
//     sum () {
//       return this.num1 + this.num2
//     },
//     mul () {
//       return this.num1 * this.num2
//     }
//   };
//   calculator.read();
//   alert( calculator.sum());
//   alert( calculator.mul());

//   // Цепь вызовов 
//   let ladder = {
//     step: 0,
//     up() {
//       this.step++;
//       return this;
//     },
//     down() {
//       this.step--;
//       return this;
//     },
//     showStep() {
//       alert( this.step );
//       return this;
//     }
//   };
  
//   ladder.up().up().down().showStep().down().showStep();

//   // Создайте калькулятор при помощи конструктора, new Calculator
//   function Calculator() {
//     this.read = function() {
//       this.a = +prompt();
//       this.b = +prompt();
//     };

//     this.mul = function() {
//       return this.a * this.b;
//     };

//     this.sum = function() {
//       return this.a + this.b;
//     };  
//   }
  
//   let calculator1 = new Calculator();
//   calculator.read();

//   alert("Mul = " + calculator1.mul());
//   alert("Sum = " + calculator1.sum());
  

// ГЛАВА 5

// Переведите текст вида border-left-width в borderLeftWidth
function camelize(str) {
  return str
    .split('-').map((word, index) => index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)).join(''); 
}

// Фильтрация по диапазону
function filterRange(arr, a, b) {
  return arr.filter(item => item >= a && item <= b);
}

// Фильтрация по диапазону "на месте"
function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < a || arr[i] > b) {
      arr.splice(i, 1);
      i--; 
    }
  }
}

// Сортировать в порядке по убыванию
let array = [5, 2, 1, -10, 8]; 
array.sort((a, b) => b - a);
alert( array );

// Скопировать и отсортировать массив
function copySorted(arr) {
  return arr.slice().sort();
}

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted );
alert( arr );

// Трансформировать в массив имён
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map(item => item.name);

alert( names ); 