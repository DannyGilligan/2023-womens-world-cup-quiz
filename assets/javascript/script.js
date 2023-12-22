const choice1Container = document.getElementById('choice-1-text')
const choice2Container = document.getElementById('choice-2-text')
const choice3Container = document.getElementById('choice-3-text')
const choice4Container = document.getElementById('choice-4-text')



let quizEngine = {

    /* Object Properties */
    userName: null,
    mainButton: document.getElementById("main-button"),  /* should this be a const variable instead? */
    questionCounter: 0,
    questions: [
        'Is this question 1?',
        'Is this question 2?',
        'Is this question 3?',
        'Is this question 4?',
        'Is this question 5?',
        'Is this question 6?',
        'Is this question 7?',
        'Is this question 8?',
        'Is this question 9?',
        'Is this question 10?',
        'Is this question 11?'
        ],
    choice: [
        ['Q1 Choice 1', 'Q1 Choice 2', 'Q1 Choice 3', 'Q1 Choice 4'],
        ['Q1 Choice 1', 'Q1 Choice 2', 'Q1 Choice 3', 'Q1 Choice 4'],
        ['Q1 Choice 1', 'Q1 Choice 2', 'Q1 Choice 3', 'Q1 Choice 4'],
        ['Q1 Choice 1', 'Q1 Choice 2', 'Q1 Choice 3', 'Q1 Choice 4'],
        ['Q1 Choice 1', 'Q1 Choice 2', 'Q1 Choice 3', 'Q1 Choice 4'],
        ['Q1 Choice 1', 'Q1 Choice 2', 'Q1 Choice 3', 'Q1 Choice 4'],
        ['Q1 Choice 1', 'Q1 Choice 2', 'Q1 Choice 3', 'Q1 Choice 4'],
        ['Q1 Choice 1', 'Q1 Choice 2', 'Q1 Choice 3', 'Q1 Choice 4'],
        ['Q1 Choice 1', 'Q1 Choice 2', 'Q1 Choice 3', 'Q1 Choice 4'],
        ['Q1 Choice 1', 'Q1 Choice 2', 'Q1 Choice 3', 'Q1 Choice 4'],
        ['Q1 Choice 1', 'Q1 Choice 2', 'Q1 Choice 3', 'Q1 Choice 4']
    ]

    /* Object Methods */

    /**
     * The handleUserNameSubmit method is triggered when the user enters their username,
     * the default behaviour of the form is prevented and
     * the value of the input is assigned to the userName property in the quizEngine object,
     * to note, the validation here occurs in the HTML element itself using the 'minlength', 'maxlength'
     * and 'required' attributes
     */
    handleUserNameSubmit: function (event) {
        event.preventDefault();
        quizEngine.userName = document.getElementById('username-input');
        document.getElementById('top-panel-inner').innerText = `Ok ${quizEngine.userName.value}, let's get the rules out of the way..`;
        console.log(quizEngine.userName.value);
        document.getElementById('main-button').innerText = 'Kick Off!';
        document.getElementById('enter-username-container').style.display = 'none';
        document.getElementById('quiz-rules-inner-container').style.display = 'flex';
        
    },



};

let enterUsernameForm = document.getElementById('enter-username');
enterUsernameForm.addEventListener("submit", quizEngine.handleUserNameSubmit);


/*
let user = document.getElementById('username-input');
*/


console.log(quizEngine.questionCounter)
