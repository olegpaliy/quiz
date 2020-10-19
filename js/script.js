//1.	Дано масив [1,5,7,8,9,0, -5, -55, 105, 0, 5, 299, 6 ,7]; Знайти максимальне значення масиву.
//2.	Дано масив [“test”, 12, undefined, null, -5, “javascript”, “1”, false, true, 0 , “!”]. Створити новий масив де будуть тільки Стрінгові значення.
//3.	Дано колекцію - [{name: "Yura", age: 55, hobby: ["football", "ski", "hiking"], type: "Admin"}, {name: "Yulian", age: 28, hobby: ["films", "games", "hiking"], type: "user"}, {name: "Taras", age: 38, hobby: ["hunting", "TV", "javascript"], type: "user"}] – Вивести всіх юзерів з типом user. Вивести юзерів які мають хоббі hiking. Додати можливість додати нове поле для всіх юзерів – job (true/false);
//4.	Додати на сторінку івент який буде викидати алерт як тільки ми захочемо скопіювати текст з сторінки(додайте 1 рядок будь якого тексту) і сповіщати що це інтелектуальна власність власника.
//5.	https://restcountries.eu/rest/v2/all – АПІ endpoint для країн. Вивести нумерований список з іменами всіх країн та її столицею на сторінку, назву країни зробити великими буквами.

let arr2 = [1,5,7,8,9,0, -5, -55, 105, 0, 5, 299, 6 ,7];
let maxNum = arr2[0];
for (let j2 = 0; j2 < arr2.length; j2++) {
  if (arr2[j2] > maxNum) {
    maxNum = arr2[j2];
  }
}
alert(`max numb is ${maxNum}`);


let arrStr = ['test', 12, undefined, null, -5, 'javascript', '1', false, true, 0 , '!'];
const arr = []
arrStr.forEach(e => {
if(typeof e === 'string') {
arr.push(e)
}})
console.log(arr)

const arr3 =  [{name: "Yura", age: 55, hobby: ["football", "ski", "hiking"], type: "Admin"}, {name: "Yulian", age: 28, hobby: ["films", "games", "hiking"], type: "user"}, {name: "Taras", age: 38, hobby: ["hunting", "TV", "javascript"], type: "user"}];
console.log(" users with type - user")
arr3.forEach(item => {
  if(item.type === "user") {
    console.log(item.name)
  }
})
console.log(" users with hobby - hiking")

arr3.forEach(item => {
  if(item.hobby.includes("hiking")) {
    console.log(item.name)
  }
})

arr3.forEach(item => {
  item.job = true;
})
console.log(arr3);

let scroll = document.getElementById(`scroll`);
document.addEventListener(`mousewheel`, (event) => {
    alert(`don't do this!!!!!!!!!!!!!!!!!!!!!!!!!!!!!`);
})