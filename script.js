// База вопросов
const questions = [
    {
        question: "Какая планета ближайшая к Солнцу?",
        answers: ["Меркурий", "Венера", "Земля", "Марс"],
        correct: 0
    },
    {
        question: "Столица Австралии?",
        answers: ["Канберра", "Сидней", "Мельбурн", "Перт"],
        correct: 0
    },
    {
        question: "Кто написал «Война и мир»?",
        answers: ["Лев Толстой", "Федор Достоевский", "Антон Чехов", "Иван Тургенев"],
        correct: 0
    },
    {
        question: "Сколько дней в високосном году?",
        answers: ["365", "366", "364", "367"],
        correct: 1
    }
];

let currentQuestion = 0;
let score = 0;

// Отображение вопроса
function renderQuestion() {
    const q = questions[currentQuestion];
    document.getElementById('question-text').innerText = q.question;
    
    const answersContainer = document.getElementById('answers-container');
    answersContainer.innerHTML = '';
    
    q.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.innerText = answer;
        button.addEventListener('click', () => checkAnswer(index));
        answersContainer.appendChild(button);
    });
}

// Проверка ответа
function checkAnswer(selected) {
    if (selected === questions[currentQuestion].correct) {
        score++;
    }
    
    currentQuestion++;
    
    if (currentQuestion < questions.length) {
        renderQuestion();
    } else {
        showResults();
    }
}

// Отображение результата
function showResults() {
    document.getElementById('result').innerText = `Ваш результат: ${score} из ${questions.length}`;
    document.getElementById('result').style.display = 'block';
    document.getElementById('answers-container').style.display = 'none';
}

// Запуск игры
renderQuestion();
