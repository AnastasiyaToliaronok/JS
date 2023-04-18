var genreDetective = ('Детектив');
var genreDrama = ('Драмма');
var genreComedy = ('Комедия');

var answerUser = confirm('Любите фильмы?');

if (answerUser) {
    var genreUser = prompt('Какой жанр?');
    if (genreUser = genreDetective || genreDrama || genreComedy) {
        var ageUser = prompt('Ваш возраст?');
        if (ageUser <= 11 && genreDetective ) {
            alert('Кто подставил кролика Роджера');
        } 
        if (ageUser <= 20 && genreDetective ){
            alert('Зверополис');
        }
        if (ageUser <= 30 && genreDetective ){
            alert('Достать ножи');
        }
        if (ageUser > 30 && genreDetective ){
            alert('Остров проклятых');
        }
        if (ageUser <= 11 && genreDrama ){
            alert('Король лев');
        }
        if (ageUser <= 20 && genreDrama ){
            alert('{Хатико');
        }
        if (ageUser <= 30 && genreDrama ){
            alert('Титаник');
        }
        if (ageUser > 30 && genreDrama ){
            alert('12 лет рабства');
        }
        if (ageUser <= 11 && genreComedy ){
            alert('Монстры на каникулах');
        }
        if (ageUser <= 20 && genreComedy ){
            alert('Люди в черном');
        }
        if (ageUser <= 20 && genreComedy ){
            alert('Кадры');
        }
        if (ageUser > 20 && genreComedy ){
            alert('Всегда говори да');
        }
    } else {
        alert('К сожалению ничем не могу вам помочь');
    }
} else {
    var causeUser = prompt('Почему?');
    ageUser = prompt('Ваш возраст?');
if (ageUser <= 11){
        alert('я понял почему вы не любите' + ' ' + causeUser + ' ' + 'но я предлагаю поcмотреть Кто поставил кролика Роджера, Король лев, Монстры на каникулах');
}
if (ageUser <= 20){
    alert('я понял почему вы не любите' + ' ' + causeUser + ' ' + 'но я предлагаю поcмотреть Зверополис, Хатико, Люди в черном');
}
if (ageUser <= 30){
    alert('я понял почему вы не любите' + ' ' + causeUser + ' ' + 'но я предлагаю поcмотреть Достать ножи, Титаник, Кадры');
}
if (ageUser > 30){
    alert('я понял почему вы не любите' + ' ' + causeUser + ' ' + 'но я предлагаю поcмотреть Остров проклятых, 12 лет рабства, Всегда говори да');
}
}