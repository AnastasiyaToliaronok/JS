var genreDetective = ('Детектив');
var genreDrama = ('Драмма');
var genreComedy = ('Комедия');

var answerUser = confirm('Любите фильмы?');

if (answerUser) {
    var genreUser = prompt('Какой жанр?');
    if (genreUser = genreDetective || genreDrama || genreComedy) {
        var ageUser = prompt('Ваш возраст?');
        






    } else {
        alert('К сожалению ничем не могу вам помочь');
    }
} else {
    var causeUser = prompt('Почему?');
    ageUser = prompt('Ваш возраст?');





    
    alert('я понял почему вы не любите' + ' ' + causeUser + ' ' + 'но я предлагаю почитать');
}