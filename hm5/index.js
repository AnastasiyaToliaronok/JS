// 1 задание
var color = ['red', 'green', 'blue'];
console.log(color.length)


//2 задание
var animals = ['monkey', 'dog', 'cat'];
console.log(animals[animals.length - 1])


//3 задание
var numbers = [5, 43, 63, 23, 90];
//вариант 1
numbers.pop();
numbers.pop();
numbers.pop();
numbers.pop();
numbers.pop();
console.log(numbers)
//вариант 2
numbers.push(5, 43, 63, 23, 90);
numbers.length = 0;


// 4 задание
var students = ['Polina', 'Dasha', 'Masha'];
students.pop();
students.push('Borya');
students.shift();
students.unshift('Andrey');
console.log(students)


// 5 задание
var cats = ['Gochito', 'Tom', 'Batman'];
for (var i = 0; i < cats.length; i++) {
    console.log(cats[i]);
}
for (var key of cats) {
    console.log(key);
}


// 6 задание
var evenNumbers = [2, 4, 6, 8, 10];
var oddNumbers = [1, 3, 5, 7, 9];
evenNumbers.push(...oddNumbers);
console.log(evenNumbers)
console.log(evenNumbers.findIndex(i => i == "8"))
console.log(evenNumbers.indexOf(8))


// 7 задание
var binary = [0, 0, 0, 0];

binary.splice(1, 0, 1);
binary.splice(3, 0, 1);
binary.splice(5, 0, 1);
console.log(binary.join(''))


// 1 задание (advanced level)
var poli = ['шалаш', 'хорошая погода', 'лидер бодро, гордо бредил'];
for (var key of poli) {
    if (key == key.split('').reverse().join('')) {
        console.log(key + ' ' + '- ' + 'является полиндромом');
    } else {
        console.log(key + ' ' + '- ' + 'не является полиндромом');
    }
}


// 2 задание (advanced level)
var matrix = [[12, 98, 78, 65, 23], [54, 76, 98, 43, 65], [13, 324, 65, 312], [9092, 22, 45, 90000]];
var sum = 0;
var sred = 0;
for (var key of matrix) {
    if (typeof matrix[key] === 'Object') {
        for (var key2 in matrix[key]) {
            var sum1 = sum1 + matrix[key][key2];
            sum = sum1 / matrix[key][key2].length;
        }
    };
    sum += matrix[key];
    sred = sum / matrix[key];
}
console.log(sred)


// 3 задание (advanced level)
var mixedNumbers = [-14, 24, -89, -43, 0, -1, 412, 4];
var positiveNumbers = [];
var negativeNumbers = [];
for(var key of mixedNumbers){
    if(key >= 0){
        positiveNumbers.push(key);        
    } else{
        negativeNumbers.push(key);     
    }
}
console.log(positiveNumbers);
console.log(negativeNumbers);


// 4 задание (advanced level)
var user = [65, 324, 86, 165, 5, 34];
var userNew = [];
for(var key in user){
    userNew[key] = user[key];
}

for(var i = 0; i < userNew.length; i++){
    key **= 2;
}
console.log(user)
console.log(userNew)




