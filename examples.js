// Копирование объектов
const objectA = {
    a: 10,
    b: true
}

const copyOfA = objectA


// Объекты
const myCity = {
    city: 'New York',
    cityGreeting: function () {
        console.log('Greetings!!')
    }
}

myCity.cityGreeting()


// Функция
function myFn(a, b) {
    let c
    a = a + 1
    c = a + b
    return c
}

myFn(10, 3)


// Стрелочная функция
const myFunction = (a, b) => {
    let c
    a = a + 1
    c = a + b
    return c
}

myFunction(5, 3)


// Передача значения по ссылке
const personOne = {
    name: 'Bob',
    age: 21
}

function increasePersonAge(person) {
    person.age += 1
    return person
}

increasePersonAge(personOne)
console.log(personOne.age)


// Колбэк функции
function printMyName() {
    console.log('qwerty')
}

setInterval(printMyName, 1000)


// Массивы
const myArray = [1, 2, 3, 4]
console.log(myArray)
console.log(myArray.length)

myArray[2] = 'abc'

console.log(myArray)
console.log(myArray[2])


// Push
const myArray = [1, 2, 3]
console.log(myArray)

myArray.push(4)

console.log(myArray)

myArray.push(true)

console.log(myArray)


// Pop
const myArray = [1, 2, 3]
console.log(myArray)

myArray.pop()

console.log(myArray)

const removedElement = myArray.pop()

console.log(myArray)
console.log(removedElement)


// Метод массивов map
const myArray = [1, 2, 3]
console.log(myArray)

const newArray = myArray.map(el => el * 3)

console.log(newArray)
console.log(myArray)


// Оператор ...
const button = {
    wedth: 200,
    text: 'Buy'
}

const redButton = {
    ...button,
    color: 'red'
}

console.table(redButton)


// Деструктуризация объектов
const userProfile = {
    name: 'qwerty',
    commentsQty: 23,
    isLoggedIn: false
}

const { name, commentsQty } = userProfile
const { isLoggedIn } = userProfile

console.log(name)
console.log(isLoggedIn)


// Деструктуризация массивов
const fruits = ['Apple', 'Banana']

const [fruitOne, fruitTwo] = fruits

console.log(fruitOne)
console.log(fruitTwo)


// Тернарный оператор
let value = 11
console.log(value >= 0 ? value : -value)


value = -5
const res = value >= 0 ? value : -value
console.log(res)


// Классы
class Comment {
    constructor(text) {
        this.text = text
        this.votesQty = 0
    }

    upvote () {
        this.votesQty += 1
    }
}


// Создание экземпляра класса
const firstComment = new Comment('First comment')


// Расширение других классов
class ExtendedArray extends Array {
    info() {
        return `Array has ${this.length} elements`
    }
}

const myArray = new ExtendedArray(2, 5, 7)

myArray.info()


// Создание промиса
const myPromise = new Promise((resolve, reject) => {
    /**
     * Выполнение асинхронных действий
     * 
     * Внутри этой функции нужно в результате вызвать одну из функций resolve или reject
     */
})


myPromise
    .then(value => {
        /**
         * Действие в случае успешного исполнения Промиса
         * Значение value - это значение, переданное в вызове функции resolve внутри Промиса
         */
    })
    .catch(error => {
        /**
         * Действия в случае отклонения Промиса
         * Значение error - это значение, переданное в вызове функции reject внутри Промиса
         */
    })


// Получение данных с помощью промисов и fetch api
fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.log(error))


// Async/await
// const asyncFn = async () => {
//     await <Promise>
// }
// 
// asyncFn()


// Пример async/await
const fetchData = async (url) => {
    try {
        const response = await fetch(url)
        return response.json()
    } catch(error) {
        console.log(error)
    }
}

const url = 'https://jsonplaceholder.typicode.com/posts'

fetchData(url).then(data => {
    console.log(data)
})


// Пример блокирующей операции
const fs = require('fs')

const data = fs.readFileSync('./test.txt', 'utf-8')
console.log('File reading finished')

console.log('Continue...')


// Пример неблокирующей операции
const fs = require('fs')

fs.readFile('./text.txt', 'utf-8', (err, data) => {
    if (!err) {
        console.log('File reading finished')
    }
})

console.log('Continue...')


// Псевдокод для event loop
// пока цикл событий работает:
//     пока есть события для обработки:
//         е = получить слудеющее событие
//         если для события есть колбэк функция:
//             вызвать колбэк функцию


// Пример setimmediate
setImmediate(() => {
    console.log('immediate cb')
})


// Стек вызовов (call stack)
function thirdFunction() {
    return 10
}

function secondFunction() {
    return thirdFunction
}

function firstFunction() {
    return secondFunction
}

console.log(firstFunction())


// Как устроен модуль commonjs
(function (exports, require, module, __filename, __dirname) {
    // Содержание модуля
})


// Экспорт из модуля commonjs
function printHello() {
    console.log('Hello world')
}

module.exports.printHello = printHello


// Добавление экспорта без создания переменной
module.exports.printHello = function () {
    console.log('Hello world')
}


module.exports.printHello = () => {
    console.log('Hello world')
}


// Переписывание значения module.exports
module.exports = function () {
    console.log('Hello world')
}


// Алиас module.exports
exports.printHello = function () {
    console.log('Hello world')
}