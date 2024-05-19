const quizQuestion = [
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            {option: "Jupiter", answer: false},
            {option: "Mars", answer: true},
            {option: "Saturn", answer: false},
            {option: "Venus", answer: false}
        ]
    },
    {
        question: "Who wrote the play Romeo and Juliet?",
        answers: [
            {option: "William Shakespeare", answer: true},
            {option: "Charles Dickens", answer: false},
            {option: "Jane Austen", answer: false},
            {option: "Mark Twain", answer: false}
        ]
    },
    {
        question: "What is the largest mammal in the world?",
        answers: [
            {option: "Elephant", answer: false},
            {option: "Giraffe", answer: false},
            {option: "Hippopotamus", answer: false},
            {option: "Blue Whale", answer: true}
        ]
    },
    {
        question: "Who painted the Mona Lisa?",
        answers: [
            {option: "Vincent van Gogh", answer: false},
            {option: "Pablo Picasso", answer: false},
            {option: "Leonardo da Vinci", answer: true},
            {option: "Michelangel", answer: false}
        ]
    },
    {
        question: "Which river is considered the holiest river in India?",
        answers: [
            {option: "Yamuna", answer: false},
            {option: "Brahmaputra", answer: false},
            {option: "Ganges", answer: true},
            {option: "Godavari", answer: false}
        ]
    }
];


const qsn = document.querySelector("#question");
const nextBtn = document.querySelector("#next-btn");

let score = 0;
let questionIndex = 0;

function resetquwstion(){
    nextBtn.style.display = "none";
    while (ans) {
        
    }
}

function displayQueston(){
    resetquwstion();
    let currentQestion = quizQuestion[questionIndex];
    let questionNo = questionIndex + 1;
    qsn.innerHTML = questionNo + ". " + currentQestion.question;

    currentQestion.answers.forEach(ans => {
        const optionBtn = document.createElement("button");
        optionBtn.innerHTML = ans.option;
        optionBtn.classList.add("btn");
        qsn.appendChild(optionBtn);
        if (ans.answer) {
            optionBtn.dataset.answer = ans.answer;
        }
        optionBtn.addEventListener('click', selectAnswer)
    })
}

function selectAnswer(e){
    
}

function start(){
    questionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    displayQueston();
}


start();
