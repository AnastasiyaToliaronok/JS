var numberUser = prompt('Напишите любое число');
var iterationUser = prompt('Напишите количество итераций (повторений)');
var b
for (var i = 0; i < iterationUser; i++) {
    b = i * numberUser;
}
    if (b % 2 === 0) {
        alert('Ваше новое число' + ' ' + b + ' ' + 'и оно четное');
    }else {
        alert('Ваше новое число' + ' ' + b + ' ' + 'и оно нечетное');
    }


