// if (strSplit.includes(saleWord)) {
//     return true
// } else { return false } else if (strSplit.includes(!saleWord)) {
//     return true
// } else if (strSplit.includes(spamWord)) {
//     return false
// } else if (strSplit.includes(!spamWord)) {
//     return false
// }

// console.log(checkForSpam('Latest technology news')) // false

// console.log(checkForSpam('JavaScript weekly newsletter')) // false

// console.log(checkForSpam('Get best sale offers now!')) // true

// console.log(checkForSpam('[Spam] How to earn fast money?')) // true
// function formatString(string, maxLength = 40) {
//     // // Write code under this line
//     // return string.length > maxLength ? `${string.slice(0, maxLength)}…` : string
//     if (string.length <= maxLength) {
//         return string
//     } else {
//         return string.slice(0, maxLength) + '...'
//     }
// }

// console.log(formatString('Curabitur ligula sapien, tincidunt non.'))
//     // 'Curabitur ligula sapien, tincidunt non.'

// console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'))
//     // 'Vestibulum facilisis, purus nec pulvinar...'

// console.log(
//         formatString('Vestibulum facilisis, purus nec pulvinar iaculis.', 30),
//     )
// 'Vestibulum facilisis, purus ne...'
// const clients = ['Mango', 'Poly', 'Ajax']
// for (let i = 0; i < clients.length; i += 1) {
//     console.log('logging clients: ', clients[i])
// }
// clients[0] = 'Kiwi'
// console.log(clients) // Kiwi
//     // console.log(clients[0]) // Mango
//     // console.log(clients[2]) // Ajax
// clients[3] = 'Alex'
// console.log(clients.length) // Alex
// clients.length = 5
// console.log(clients)
// const numbers = []
// for (let i = 0; i < 12; i += 1) {
//     numbers.push(`
// label $ { i }
// `)
//     // }
//     // console.log('numbers: ', numbers)
//     // const clients = ['Mango', 'Ajax', 'Poly']
//     // for (const client of clients) {
//     //     console.log(client)
//     // }
//     // const string = 'javascript'// for (const char of string) {
//     //     console.log(char)
//     // }
//     // const clients = ['Alex', 'Mango', 'Poly', 'Ajax']
//     // const clientNameToFind = 'Jesus'
//     // let message

// // for (const client of clients) {
// //     /*
// //      * На каждой итерации мы будем проверять совпадает ли элемент массива с
// //      * именем клиента. Если совпадает то мы записываем в message сообщение
// //      * об успехе и делаем break чтобы не искать дальше
// //      */

// //     if (client === clientNameToFind) {
// //         message = 'Клиент с таким именем  есть в базе данных!'
// //         break
// //     }

// //     // Если они не совпадают то запишем в resultMsg сообщeние об отсутсвии имени
// //     message = `
// Клиента с таким именем $ { clientNameToFind }
// нету в базе данных!`
// // }

// // console.log(message) // Клиент с таким именем есть в базе данных!
// //
// // const matrix = [
// //     [1, 2, 3],
// //     [4, 5, 6],
// //     [7, 8, 9],
// // ]
// // let total = 0

// // for (let i = 0; i < matrix.length; i += 1) {
// //     console.log('Подмассив матрицы matrix[i]: ', matrix[i])

// //     for (let j = 0; j < matrix[i].length; j += 1) {
// //         console.log('Элемент подмассива матрицы matrix[i][j]: ', matrix[i][j])
// //         total += matrix[i][j]
// //     }
// // }

// // console.log(total) // 45
// // const message = 'Welcome to Bahamas!'
// // console.log(message.split(' '))
// // const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi']
// // console.log(clients.indexOf('Jesus'))
// // console.log(clients.indexOf('Kiwi'))
// // const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi']
// // console.log(clients.includes('Spirit'))
// // console.log(clients.includes('Ajax'))
// // Выносим варианты в массив
// // Выносим варианты в массив
// // Создаем пустой массив
// // const stack = []

// // // Добавляем элементы в конец массива
// // stack.push(1)
// // console.log(stack) // [1]
// // stack.push(2)
// // console.log(stack) // [1, 2]

// // stack.push(3)
// // console.log(stack) // [1, 2, 3]
// // console.log(stack.pop()) //  3
// // console.log(stack) // [1, 2]

// // console.log(stack.pop()) //  2
// // console.log(stack) // [1]

// // console.log(stack.pop()) //  1
// // console.log(stack) // []

// // console.log(stack.pop()) //  undefined
// // const scores = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// // const deletedScores = scores.splice(1, 4)
// // console.log(scores)
// // console.log(deletedScores)
// // const colors = ['red', 'green', 'blue']
// // colors.splice(1, 0, 'yellow', 'purple', 'black')
// // console.log(colors)
// // const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi']
// // const newClients = ['Monkong', 'Singu']
// // const allClients = oldClients.concat(newClients)
// // console.log(allClients)
// // const findLongestWord = function(string) {
// //     let strSplit = string.split(' ')
// //     let wordLength = 0
// //     let longestWord

// //     for (let i = 0; i < strSplit.length; i += 1) {
// //         wordLength = strSplit[1].length

// //         if (strSplit[i].length > wordLength) {
// //             longestWord = strSplit[i]

// //             return longestWord
// //         }
// //     }
// // }

// // console.log(findLongestWord('The quick brown fox jumped over the lazy dog'))
// //     // 'jumped'

// // console.log(findLongestWord('Google do a roll'))
// //     // 'Google'

// // console.log(findLongestWord('May the force be with you'))
// //     // 'for
// for (let i = 0; i < 3; i += 1) {
//     console.log(`Count ${i}`);
// }
// function isLoginValid(login, min = 4, max = 16) {
//     // Write code under this line
//     return login.length >= min && login.length <= max ? true : false;
// }

// function isLoginUnique(allLogins, login) {
//     "use strict";
//     // Write code under this line
//     return allLogins.includes(login);
// }

// function addLogin(allLogins, login) {
//     "use strict";
//     const SUCCESS = "Логин успешно добавлен!";
//     const REFUSAL = "Такой логин уже используется!";
//     const ERROR = "Ошибка! Логин должен быть размером от 4 до 16 символов";
//     let message;
//     // Write code under this line
//     if (!isLoginValid(login)) {
//         message = ERROR;
//         return message;
//     } else if (!isLoginUnique(allLogins, login)) {
//         message = REFUSAL;
//         return message;
//     } else {
//         allLogins.push(login);
//         message = SUCCESS;
//         return message;
//     }
// }

// const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

// console.log(addLogin(logins, "Ajax"));
// // 'Логин успешно добавлен!'

// console.log(addLogin(logins, "robotGoogles"));
// // 'Такой логин уже используется!'

// console.log(addLogin(logins, "Zod"));
// // 'Ошибка! Логин должен быть от 4 до 16 символов'

// console.log(addLogin(logins, "jqueryisextremelyfast"));
// // 'Ошибка! Логин должен быть от 4 до 16 символов'
const hotel = {
    name: 'Resort Hotel',
    stars: 5,
    capacity: 100,
}

/*
 * Посмотрите в консоли из каких двух элементов состоит каждый подмассив.
 * Первый элемент это ключ свойства, второй это значение.
 */
const entries = Object.entries(hotel)

/*
 * На каждой итерации по entries выберем первый элемент подмассива (ключ)
 * в переменную key, а второй (значение) в переменную value
 */
for (const entry of entries) {
    const key = entry[0]
    const value = entry[1]

    console.log(`${key}: ${value}`)
}

/*
 * name: Resort Hotel
 * stars: 5
 * capacity: 100
 */