const questions = [
    {
        question: "Где можно использовать JavaScript?",
        answers: ["серверные приложения", "мобильные приложения", "веб-приложения", "можно во всех перечисленных"],
        correct: 4,
    },
    {
        question: " В чем отличие между локальной и глобальной переменной? ",
        answers: [
            "локальные видны повсюду, глобальные только в функциях",
            "глобальные видны повсюду, локальные только в функциях",
            "локальные можно переопределять, глобальные нельзя",
            "отличий нет"],
        correct: 2,
    },
    {
        question: "В чем разница между confirm и prompt? ",
        answers: [
            "ничем не отличаются",
            "confirm вызывает диалоговое окно с полем для ввода, prompt - окно с подтверждением",
            "prompt вызывает диалоговое окно с полем для ввода, confirm - окно с подтверждением",
            "confirm не имеет обратной связи с пользователем"],
        correct: 3,
    },
    {
        question: "alert(‘This is a Test’.lastIndexOf(‘T’)); Приведенная выше функция даст результат:",
        answers: ["10", "is a Test", "14", "0"],
        correct: 1,
    },
    {
        question: "Какой метод интерпретирует элементы массива как строковые литералы и сортирует массив в алфавитном порядке? ",
        answers: ["join()",
            "reverse()",
            "filter()",
            "sort()"],
        correct: 4,
    },
    {
        question: " Чем отличается const от let?",
        answers: ["const - не является частью JavaScript",
            "переменные, объявленные через const, находятся в глобальной видимости",
            "объявление const задаёт константу, то есть значение, которое нельзя менять",
            "let видны глобально, const локально"],
        correct: 3,
    },
    {
        question: "Какое свойство, из ниже перечисленных, позволяет получить число элементов массива?",
        answers: ["array",
            "length",
            "reverse",
            "key"],
        correct: 2,
    },
    {
        question: "Какой оператор завершает выполнение текущей функции и возвращает её значение? ",
        answers: ["case", "break", "continue", "return"],
        correct: 4,
    },
    {
        question: "Какой метод позволяет изменять порядок элементов массива на противоположный? ",
        answers: ["sort()",
            "join()",
            "splice() ",
            "reverse()"],
        correct: 4,
    },
    {
        question: "Какой оператор служит для создания нового экземпляра из класса однотипных объектов? ",
        answers: ["prototype", "this", "new", "const"],
        correct: 3,
    }
]

// находим элемент
const headerContainer = document.querySelector('#header');
const listContainer = document.querySelector('#list');
const submitBtn = document.querySelector('#submit');




let score = 0;  // кол-во правильных ответов
let questionIndex = 0;  // текущий вопрос

clearPage();
showQuestion();
submitBtn.onclick = checkAnswer;




function clearPage() {
    headerContainer.innerHTML = '';
    listContainer.innerHTML = '';
}

function showQuestion() {
    //вопрос
    const headerTemplate = '<h2 class="title">%title%</h2>';
    const title = headerTemplate.replace('%title%', questions[questionIndex]['question']);
    headerContainer.innerHTML = title;

    //варианты ответов
    let answerNumber = 1;
    for (answerText of questions[questionIndex]['answers']) {

        const questionTemplate = `
        <li>
            <label>
                <input value="%number%" type="radio" class="answer" name="answer">
                <span>%answer%</span> 
            </label>
        </li>`;
        const answerHTML = questionTemplate
            .replace('%answer%', answerText)
            .replace('%number%', answerNumber);

        listContainer.innerHTML += answerHTML;
        answerNumber++;
    }
}

function checkAnswer() {
    //находим выбранную радиокнопку
    const checkedRadio = listContainer.querySelector('input:checked');

    //если ответ не выбран - ничего не делать
    if (!checkedRadio) {
        submitBtn.blur();
        return
    }

    //узнаем номер ответа пользователя
    const userAnswer = parseInt(checkedRadio.value);

    //если верно - увеличиваем счет
    if (userAnswer === questions[questionIndex]['correct']) {
        score++;
    }

    if (questionIndex !== questions.length - 1) {
        questionIndex++;
        clearPage();
        showQuestion();
    } else {
        clearPage();
        showResults();
    }
}

function showResults() {
    const resultsTemplate = ` 
    <h2 class="title"> %title% </h2>
    <h3 class="summary"> %message% </h3>
    <p class="result"> %result% </p>
    `;

    let title;
    let message;

    if (score === questions.length) {
        title = 'Поздравляем';
        message = 'Вы ответили верно на все вопросы!';
    } else if ((score * 100) / questions.length >= 50) {
        title = 'Неплохой результат';
        message = 'Вы дали более половины правильных ответов';
    } else {
        title = 'Стоит постараться';
        message = 'Пока у вас меньше половины правильных ответов';
    }

    let result = `${score} из ${questions.length}`;

    const finalMessage = resultsTemplate
        .replace('%title%', title)
        .replace('%message%', message)
        .replace('%result%', result);

    headerContainer.innerHTML = finalMessage;

    submitBtn.blur();
    submitBtn.innerHTML = 'Начать заново';
    submitBtn.onclick = () => history.go();
}















