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