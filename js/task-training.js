/*
? У змінній minutes лежить число від 0 до 59.
? Визначте, в яку чверть години потрапляє це число (у першу, другу, третю чи четверту).
? [0 до 15) - перша чверть години
? [15 до 30) - друга чверть години
? [30 до 45) - третя чверть години
? [45 до 60) - четверта чверть години
*/

// const minutes = 15;

// if (minutes < 15) {
//     console.log("First quarter");
// } else if (minutes < 30) {
//     console.log("Second quarter");
// } else if (minutes < 45) {
//     console.log("Third quarter");
// } else if (minutes < 60) {
//     console.log("Fourth quarter");
// }

// console.log(minutes);

/*
?  Перепишіть код за допомогою однієї конструкції switch:
*/

// const number = Number(prompt('Введіть число між 0 та 3'));

// if (number === 0) {
//   console.log('Ви ввели число 0');
// } else if (number === 1) {
//   console.log('Ви ввели число 1');
// } else if (number === 2 || number === 3) {
//   console.log('Ви ввели число 2, а може й 3');
// } else {
//   console.log('Ви ввели якесь інше число');
// }

// switch (number) {
//     case 0:
//         console.log('Ви ввели число 0');
//         break;
//     case 1:
//         console.log('Ви ввели число 1');
//         break;
//     case 2:
//         console.log('Ви ввели число 2, а може й 3');
//         break;
//     case 3:
//         console.log('Ви ввели число 2, а може й 3');
//         break;
//     default:
//         console.log('Ви ввели якесь інше число');
//         break;
// }

/*
? Напиши скрипт, який перевіряє можливість відкрити чат з користувачем.
? Для цього, користувач має бути:
? - другом
? - онлайн
? - без режима не турбувати
 */

// const isOnline = true;
// const isFriend = true;
// const isDnd = false;

// let canOpenChat;

// if (isOnline, isFriend, !isDnd) {
//     canOpenChat = 'Yes';
// } else {
//     canOpenChat = 'No';
// }

// console.log('Чи можна відкрити чат? ', canOpenChat);

/*
? Напиши скрипт перевірки підписки користувача при доступі до контента
? - Є три типа підписки: free, pro і vip.
? - Отримати доступ можуть тільки користувачі pro і vip
 */

// const sub = 'free';
// let canAccessContent;

// switch (sub) {
//     case 'pro':
//         canAccessContent = 'Yes';
//         break;
//     case 'vip':
//         canAccessContent = 'Yes';
//         break;
//     case 'free':
//         canAccessContent = 'No';
//         break;
//     default:
//         canAccessContent = 'No subscription found';
//         break;
// }

// console.log('Чи є доступ до контенту?', canAccessContent);