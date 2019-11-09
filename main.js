// 1)Подсчитать сумму всех чисел в заданном пользователем диапазоне.

// for (; ;) {
//     let min = +prompt('Введите первое число диапазона', -8);
//     let max = +prompt('Введите последнее число диапазона', 100);
//     // let min_new = +min;
//     // let max_new = +max;


//     let sum = 0;
//     if (!isFinite(min) || !isFinite(max)) {
//         if (confirm(`Вы ввели не число!\nВы ввели:\n ${min}  и  ${max}. Повторить?`)) {

//         } else {
//             break;
//         }

//     } else {
//         for (min; min <= max; min++) {
//             sum = sum + min;
//         }
//         if (confirm(`Сумма чисел от ${min}  до ${max} равна ${sum}.\nХотите повторить?`)) {

//         } else {
//             break;
//         }

//     }
// }



// 2)Запросить 2 числа и найти только наибольший общий делитель.

// for (; ;) {
//     let num1 = prompt('Введите первое число', 18);
//     let num2 = prompt('Введите второе число', 54);
//     let num1_new, num2_new, NOD, max;
//     num1_new = +num1;
//     num2_new = +num2;

//     if (!isFinite(num1_new) || !isFinite(num2_new)) {
//         if (confirm(`Вы ввели не число!\nВы ввели:\n ${num1}  и  ${num2}. Повторить?`)) {
//         } else {
//             break;
//         }
//     } else if (num1_new < 0 || num2_new < 0) {
//         if (confirm(`Вы ввели отрицательные числа!\nНаибольший общий делитель не находится для отр. чисел.\nВы ввели:\n ${num1}  и  ${num2}. Повторить?`)) {

//         } else {
//             break;
//         }
//     } else if ((num1_new % 1 !== 0) || (num2_new % 1 !== 0)) {
//         if (confirm(`Вы ввели не целые числа!\nНаибольший общий делитель не находится для нецелых чисел.\nВы ввели:\n ${num1}  и  ${num2}. Повторить?`)) {

//         } else {
//             break;
//         }
//     } else {
//         if (num1_new < num2_new) {
//             max = num1_new;
//         } else {
//             max = num2_new;
//         }
//         for (let i = 0; i <= max; i++) {
//             if ((num1_new % i == 0) && (num2_new % i == 0)) {
//                 NOD = i;
//             }


//         }
//         if (confirm(`Наибольший общий делитель для чисел ${num1}  и  ${num2} = ${NOD}.\nПовторить?`)) {

//         } else {
//             break;
//         }
//     }
// }



// 3)Запросить у пользователя число и вывести все делители этого числа
// for (; ;) {
//     let num = prompt('Введите число', 155)
//     let num_new = +num;
//     let text = '';
//     if (!Number(num_new)) {
//         if (confirm(`Вы ввели не число\nВы ввели ${num}.\nПовторить?`)) {

//         } else {
//             break;
//         }
//     } else if (num_new == 0) {
//         if (confirm(`У числа 0 нету делителей.\nПовторить?`)) {

//         } else {
//             break;
//         }
//     } else if (num_new % 1 !== 0) {
//         if (confirm(`Вы ввели нецелое число.Вы ввели ${num_new}.\nПовторить?`)) {

//         } else {
//             break;
//         }
//     } else {
//         for (let i = 1; i <= num_new; i++) {
//             if (num_new % i == 0) {
//                 text = text + i + ';\n';
//             }

//         }
//         if (confirm(`Делители числа ${num}:\n${text}\nПовторить?`)) {

//         } else {
//             break;
//         }
//     }
// }


// 4)Определить количество цифр в введенном числе.
// for (; ;) {
//     let num = prompt('Введите число', 15555);
//     let num1 = +num;
//     if (!Number(num1)) {
//         if (confirm(`Вы ввели не число\nВы ввели ${num}.\nПовторить?`)) {

//         } else {
//             break;
//         }
//     } else if (num1 % 1 == 0) {
//         if (confirm(`В числе ${num1} ${num.length} цифер.\nПовторить?`)) {

//         } else {
//             break;
//         }
//     } else {
//         if (confirm(`В числе ${num1} ${num.length - 1} цифер.\nПовторить?`)) {

//         } else {
//             break;
//         }
//     }
// }



// 5)Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей.
//  При этом также посчитать, сколько четных и нечетных. Вывести статистику на экран.
//   Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.


// let text = '';
// let plus = '';
// let even = '';
// let uneven = '';
// let minus = '';
// let text1 = 0;
// let zero1 = 0;
// let plus1 = 0;
// let even1 = 0;
// let uneven1 = 0;
// let minus1 = 0;
// for (let i = 1; i <= 10; i++) {
//     let num = prompt('Введите число(всего 10 в каждом окне по одному)', -8);
//     if (!isFinite(num)) {
//         text = text + num + '; ';
//         text1 = text1 + 1;
//     } else if (num == 0) {
//         zero1 = zero1 + 1;
//     } else if (num > 0) {
//         plus = plus + num + '; ';
//         plus1 = plus1 + 1;
//         if (num % 2 == 0) {
//             even = even + num + '; ';
//             even1 = even1 + 1;
//         } else if ((num % 1 == 0) && (num % 2 !== 0)) {
//             uneven = uneven + num + '; ';
//             uneven1 = uneven1 + 1;
//         }
//     } else if (num < 0) {
//         minus = minus + num + '; ';
//         minus1 = minus1 + 1;
//         if (num % 2 == 0) {
//             even = even + num + '; ';
//             even1 = even1 + 1;
//         } else if ((num % 1 == 0) && (num % 2 !== 0)) {
//             uneven = uneven + num + '; ';
//             uneven1 = uneven1 + 1;
//         }
//     }

// }
// alert(`Среди ваших чисел оказалось:\n1)Не чисел: ${text1}.\n${text}\n\n2)Чисел равных нулю:${zero1}\n\n3)Положительных ${plus1}:\n${plus}\n\n4)Отрицательных ${minus1}:\n${minus}\n\n5)Четных  ${even1}:\n${even}\n\n5)Нечетных  ${uneven1}:\n${uneven}`);





// 6)циклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример,
//  вывести результат и спросить, хочет ли он решить еще один пример.
//   И так до тех пор, пока пользователь не откажется.
// for (; ;) {
//     let num1 = prompt('Введите первое число', 2);
//     let act = prompt('Введите математическое действие (+ ; - ; * ; / )', '+');
//     let num2 = prompt('Введите второе число', 2);
//     let num1_new = +num1;
//     let num2_new = +num2;
//     let sum;
//     if (!isFinite(num1_new) || !isFinite(num2_new) || (act !== '-' && act !== '+' && act !== '*' && act !== '/')) {
//         if (confirm(`Вы ввели некоректное действие:\n"${num1}" ${act} "${num2}"\nПовторить?`)) {
//         } else {
//             break;
//         }

//     } if (act == '-') {
//         sum = num1_new - num2_new;
//     } else if (act == '+') {
//         sum = num1_new + num2_new;
//     } else if (act == '*') {
//         sum = num2_new * num1_new;
//     } else if (act == '/') {
//         if (num2_new !== 0) {
//             sum = num1_new / num2_new;
//         } else {
//             sum = 'На ноль делить нельзя!!!';
//         }
//     }
//     if (confirm(`${num1} ${act} ${num2} = ${sum}\nПовторить?`)) {

//     } else {
//         break;
//     }

// }


// 7)Запросить у пользователя число и на сколько цифр его сдвинуть.
//  Сдвинуть цифры числа и вывести результат 
//  (если число 123456 сдвинуть на 2 цифры, то получится 345612).


// for (; ;) {
//     let num = prompt('Введите число', 12345);
//     let num_new = +num;
//     let k = prompt('На сколько цифр сдвинуть число?', 3);
//     let k_new = +k;
//     let str_main, str, str2;
//     if (!isFinite(num_new) || !isFinite(k_new) || k_new < 0) {
//         if (confirm(`Вы ввели некоректные данные!\nПовторить?`)) {

//         } else {
//             break;
//         }
//     }
//     for (let i = 0; i < k_new; i++) {
//         str2 = num.substr(0, 1);
//         str_main = num.slice(1);
//         num = str_main + '' + str2;
//     }
//     if (confirm(`Если число ${num_new} сдвинуть на ${k} знаков получим:\n ${num}\n\nПовторить?`)) {

//     } else {
//         break;
//     }
// }



// 8)Зациклить вывод дней недели таким образом: «День недели. 
// Хотите увидеть следующий день?» и так до тех пор, 
// пока пользователь нажимает OK.
// let day = prompt('Введите день недели (MON,TUES,WED,THURS,FRI,SAT,SUN', 'MON');
// for (; ;) {

//     let main = '';
//     if (day !== 'MON' && day !== 'TUES' && day !== 'WED' && day !== 'THURS' && day !== 'FRI' && day !== 'SAT' && day !== 'SUN') {
//         if (confirm(`Вы ввели некоректный день недели\nВы ввели:\n${day}\nПовторить?`)) {
//         } else {
//             break;
//         }
//     } else {
//         if (day == 'MON') {
//             day = 'TUES';
//         } else if (day == 'TUES') {
//             day = 'WED';
//         } else if (day == 'WED') {
//             day = 'THURS';
//         } else if (day == 'THURS') {
//             day = 'FRI';
//         } else if (day == 'FRI') {
//             day = 'SAT';
//         } else if (day == 'SAT') {
//             day = 'SUN';
//         } else if (day == 'SUN') {
//             day = 'MON';
//         }
//         if (confirm(`${day}\nПовторить?`)) {
//         } else {
//             break;
//         }
//     }


// }



// 9)Вывести таблицу умножения для всех чисел от 2 до 9.
//  Каждое число необходимо умножить на числа от 1 до 10.
// let sum;
// let table = '';
// for (let i = 2; i < 10; i++) {
//     for (let k = 1; k <= 10; k++) {
//         sum = i * k;
//         table = table + i + ' * ' + k + ' = ' + sum + '\n';
//     }
//     table = table + '\n';
// }
// console.log(`${table}`);






// 10)Игра «Угадай число». Предложить пользователю загадать число от 0 до 100 и 
// отгадать его следующим способом: каждую итерацию цикла делите диапазон чисел пополам,
//  записываете результат в N и спрашиваете у пользователя «Ваше число > N, < N или == N?».
//   В зависимости от того, что указал пользователь, уменьшаете диапазон. Начальный диапазон 
//   от 0 до 100, поделили пополам и получили 50. Если пользователь указал,
//  что его число > 50, то изменили диапазон на от 51 до 100. И так до тех пор, 
//  пока пользователь не выберет == N.


let min = 0;
let max = 100;
let k = min + (max - min) / 2;
alert('Загадайте число от 0 до 100.Мы попробуем его отгадать');

for (; ;) {

    if (confirm(`Ваше число равно ${k} ?`)) {
        if (confirm(`Отлично! Желаете повторить?`)) {
            min = 0;
            max = 100;
            k = min + (max - min) / 2;
            alert('Загадайте число от 0 до 100 .Мы попробуем его отгадать');
        } else {
            break;
        }
    }
    if (confirm(`Ваше число больше ${k} ?`)) {
        min = k;
        k = Math.round(min + (max - min) / 2);

    } else {
        max = k;
        k = Math.round(min + (max - min) / 2);
    }


}

