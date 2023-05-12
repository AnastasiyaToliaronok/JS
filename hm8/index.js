// индивидуальное задание 1

let gitName = function () {
    return prompt('Введите свое имя...');
};
console.log(gitName())



function gitSurname(surname) {
    return surname = prompt('Введите свою фамилию...');
}
console.log(gitSurname())



const gitAge = () => {
    return prompt('Введите свой возраст...');
}
console.log(gitAge())






// задание 1
const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]
fibonacci.forEach((item, index) => {
    console.log('У' + ' ' + item + ' ' + 'индекс' + ' ' + index);
})

fibonacci.forEach(function (item, index) {
    console.log(item + '-' + 'индекс' + ' ' + index);
});



// задание 2
const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton']
let usersNew = users.map(function (item, index) {
    return ('member' + ' ' + (index + 1) + ':' + ' ' + item)
});
console.log(usersNew)
let userNew = users.map((item, index) => {
    return ('MEMBER' + ' ' + (index + 1) + ':' + ' ' + item)
});
console.log(userNew)


// задание 3
const numbers = [7, -4, 32, -90, 54, 32, -21]
let numbersNew = numbers.filter(function (item) {
    if (item < 0) {
        return true;
    } {
        return false;
    }
});
console.log(numbersNew)

let numberNew = numbers.filter((item) => {
    if (item < 0) {
        return true;
    } {
        return false;
    }
});
console.log(numberNew)


// задание 4
let fibonacciNew = fibonacci.reduce(function (sum, item) {
    return sum + item;
}, 0);
console.log(fibonacciNew)


let fibonaccNew = fibonacci.reduce((sum, item) => {
    return sum + item;
}, 0);
console.log(fibonaccNew)



// задание 5
const number = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5]
let newNumber = number.find(function (item) {
    return item % 2 === 0;
})
console.log(newNumber)

let newNumbers = number.find((item) => {
    return item % 2 === 0;
})
console.log(newNumbers)



// ADVANCED level. задание 1

function Student(name, rate, salary) {
    this.name = name,
        this.salary = salary,
        this.rate = rate
    this.credit = function () {
        switch (this.rate) {
            case A:
                return this.salsry * 12;
            case B:
                return this.salsry * 9;
            case C:
                return this.salsry * 6;
            case D:
                return 0;
        }
    }
};

let Masha = new Student();
let Peter = new Student();
let Dasha = new Student();
let Andrey = new Student();
let Maksim = new Student();

let students = [Masha, Peter, Dasha, Andrey, Maksim]




// ADVANCED level. задание 2
function comment(str) {
    const vowels = ['а', 'я', 'ю', 'о', 'е', 'ё', 'э', 'и', 'ы', 'А', 'Я', 'Ю', 'О', 'Е', 'Ё', 'Э', 'И', 'Ы', 'A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'];
    return str
        .split('')
        .filter(char => !vowels.includes(char))
        .join('');
}
console.log(comment('This website is for losers LOL!'));

// ADVANCED level. задание 2
function accum(str){

}



