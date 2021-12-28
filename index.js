const quizData = [{
    question: "How old is Thoriq?",
    a: "20",
    b: "21",
    c: "22",
    d: "23",
    correct: "d"
}, {
    question: "Whats is president in Indonesia?",
    a: "Joko widodo",
    b: "Jusuf kalla",
    c: "Soekarno",
    d: "Megawati",
    correct: "a"
}, {
    question: "Whats the best programing langguage in 2021?",
    a: "Python",
    b: "JavaScript",
    c: "Java",
    d: "PHP",
    correct: "b"
}]

const quiz = document.querySelector("#quiz")
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.querySelector("#question");
const a_text = document.querySelector("#a_text");
const b_text = document.querySelector("#b_text");
const c_text = document.querySelector("#c_text");
const d_text = document.querySelector("#d_text");
const submitBtn = document.querySelector("#submit");

let qurrentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {

    deSelected();
    const qurrentQuizData = quizData[qurrentQuiz];
    questionEl.innerText = qurrentQuizData.question

    a_text.innerText = qurrentQuizData.a;
    b_text.innerText = qurrentQuizData.b;
    c_text.innerText = qurrentQuizData.c;
    d_text.innerText = qurrentQuizData.d;
}

function getSelected() {

    let answer = undefined

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    })

    return answer;
}

function deSelected() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    })
}

submitBtn.addEventListener("click", function () {

    const answer = getSelected();

    if (answer) {
        if (answer === quizData[qurrentQuiz].correct) {
            score++;
        }

        qurrentQuiz++
        if (qurrentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.classList.add("score")
            quiz.innerHTML = 
                `<h2>Your answered correctly at ${score}/${quizData.length} question!</h2>
                <button class="btn-submit" onClick="location.reload()">Reload</button>`
        }
    }
})
