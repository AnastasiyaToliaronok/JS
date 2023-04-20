var numberUser = prompt('Напишите любое число');
var iterationUser = prompt('Напишите количество итераций (повторений)');

for (var i = 0; i < iterationUser; i = i * numberUser) {
    if (i % 2 === 0) {
        alert('Ваше новое число' + ' ' + i + ' ' + 'и оно' + ' ' + 'четное')
    }else {
        alert('Ваше новое число' + ' ' + i + ' ' + 'и оно' + ' ' + 'нечетное')
    }
    break;
}


