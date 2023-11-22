// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль



let arr1 = [
    name = "Petya",
    age = 23,
    human = true,
    l2 = true,
    lvl = 83,
    race = "elf",
    server = "classic",
    gold = 100500,
    exp = 75,
    dog = true
]

console.log(arr1)
console.log(arr1[0])
console.log(arr1[1])
console.log(arr1[2])
console.log(arr1[3])
console.log(arr1[4])
console.log(arr1[5])
console.log(arr1[6])
console.log(arr1[7])
console.log(arr1[8])
console.log(arr1[9])

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let bookFirst = {
    title: "harry potter",
    pageCount: 320,
    genre: "fantastic"
}
let bookSecond = {
    title: "harry potter 2",
    pageCount: 326,
    genre: "fantastic"
}
let bookThree = {
    title: "harry potter 3",
    pageCount: 450,
    genre: "fantastic"
}



// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let bkFirst = {
    title: "harry potter",
    pageCount: 320,
    genre: "fantastic",
    authors: [
        name = "maria",
        age = 25
    ]
}
let bkSecond = {
    title: "harry potter 2",
    pageCount: 326,
    genre: "fantastic",
    authors: [
        name = "vasya",
        age = 27
    ]
}
let bkThree = {
    title: "harry potter 3",
    pageCount: 450,
    genre: "fantastic",
    authors: [
        name = "petya",
        age = 99
    ]
}



// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let userInSite = [
    user1 = {
        username: "pavlik",
        name: "Vladislav Tuchenka",
        password: "password1"
    },
    user2 = {
        username: "pavlik",
        name: "Vladislav Tuchenka",
        password: "password2"
    },
    user3 = {
        username: "pavlik",
        name: "Vladislav Tuchenka",
        password: "password3"
    },
    user4 = {
        username: "pavlik",
        name: "Vladislav Tuchenka",
        password: "password4"
    },
    user5 = {
        username: "pavlik",
        name: "Vladislav Tuchenka",
        password: "password5"
    },
    user6 = {
        username: "pavlik",
        name: "Vladislav Tuchenka",
        password: "password6"
    },
    user7 = {
        username: "pavlik",
        name: "Vladislav Tuchenka",
        password: "password7"
    },
    user8 = {
        username: "pavlik",
        name: "Vladislav Tuchenka",
        password: "password8"
    },
    user9 = {
        username: "pavlik",
        name: "Vladislav Tuchenka",
        password: "password9"
    },
    user10 = {
        username: "pavlik",
        name: "Vladislav Tuchenka",
        password: "password10"
    },

]

console.log(userInSite[0].password);
console.log(userInSite[1].password);
console.log(userInSite[2].password);
console.log(userInSite[3].password);
console.log(userInSite[4].password);
console.log(userInSite[5].password);
console.log(userInSite[6].password);
console.log(userInSite[7].password);
console.log(userInSite[8].password);
console.log(userInSite[9].password);



// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
 //Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = -3;

if (x !== 0) {
    console.log("Вірно");
} else if (x >= 1) {
    console.log("Вірно");
} else {
    console.log("Невірно");
}





//  - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 1;

if ( time <= 15) {
    console.log("перша частина години")
} else if ( time <= 30) {
    console.log("другa частина години")
}else  if ( time <= 45){
    console.log("третя частина години")
} else   {
    console.log("четвертa частина години")
}



// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 21;

if ( day <= 10) {
    console.log("перша частина місяця")
} else if ( day <= 20) {
    console.log("другa частина місяця")

} else   {
    console.log("третя частина місяця")
}


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let workInDays = prompt("Користувач вводить порядковий номер дня тижня")

switch (workInDays) {
    case "1":
    alert("Monday")
        break;
    case "2":
        alert("Thuesday")
        break;
    case "3":
        alert("Wednesday ")
        break;
    case "4":
        alert("Thursday")
        break;
    case "5":
        alert("Friday ")
        break;
    case "6":
        alert("Saturday ")
        break;
    case "7":
        alert("Sunday")
        break;
}

    // - Користувач вводить або має два числа.
    //     Потрібно знайти та вивести максимальне число з тих двох .
    //     Також потрібно врахувати коли введені рівні числа.

let str1 = prompt("Перше число:");
let num1 = parseInt(str1)
let str2 =prompt("Друге число:");
let num2 = parseInt(str2)

if (num1 > num2) {
    alert(num1)
}
else if ( num1 < num2) {
    alert(num2)
}
else  {
    alert("Однакові числа")
}


//- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

// ЭТО Я НЕ ПОНИМАЮ :(


// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".


let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log("Super: " + coursesAndDurationArray[0].title);
}

if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log("Super: " + coursesAndDurationArray[1].title);
}

if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log("Super: " + coursesAndDurationArray[2].title);
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log("Super: " + coursesAndDurationArray[3].title);
}

if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log("Super: " + coursesAndDurationArray[4].title);
}

if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log("Super: " + coursesAndDurationArray[5].title);
}