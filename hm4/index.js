// Задание 1
var taskOne = {
    name: 'Anastasiya',
    surname: 'Toliaronok'
}
delete taskOne.name;
delete taskOne.surname;
console.log(taskOne);



// Задание 2
var taskTwo = {
    name: 'John',
    surname: 'Smith'
}
var a = 'name';
var taskName = a in taskTwo;
console.log(taskName);




// Задание 3 (доделать)
var student = {
    name: 'John',
    age: 19,
    isHappy: true
}
var mainings
var keys
for (var key in student) {
    console.log(key);
    console.log(student[key]);
}



//Задание 4
var ru;
var colors = {
    'ru pum pu ru rum': {
        red: 'красный',
        green: 'зеленый',
        blue: 'синий'
    }
}
console.log(colors['ru pum pu ru rum']['red']);
console.log(colors['ru pum pu ru rum']['blue']);




//Задание 5
var salaries = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    andrey: 664,
    alexandra: 199
}
// т.к. у нас два одинаковых кдюча с названием, то один из ключей он пропускает и не считае
var sum = 0;
for (var key in salaries) {
    sum = sum + salaries[key];
}
console.log(sum);




//Задание 6

var user = {
    name: 'Petya',
    age: 20,
    isMarried: true,
    family: null,
    address: undefined,
    friend: {
        name: 'Misha'
    }
};

var cloneUser = {};
for (var key in user) {
    cloneUser[key] = user[key];
}

console.log(cloneUser);
console.log(user);