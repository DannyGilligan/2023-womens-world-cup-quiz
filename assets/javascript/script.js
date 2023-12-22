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

    choices: [
        ['Q1 Choice 1 correct', 'Q1 Choice 2', 'Q1 Choice 3', 'Q1 Choice 4'],
        ['Q2 Choice 1', 'Q2 Choice 2 correct', 'Q2 Choice 3', 'Q2 Choice 4'],
        ['Q3 Choice 1', 'Q3 Choice 2', 'Q3 Choice 3 correct', 'Q3 Choice 4'],
        ['Q4 Choice 1', 'Q4 Choice 2', 'Q4 Choice 3', 'Q4 Choice 4 correct'],
        ['Q5 Choice 1 correct', 'Q5 Choice 2', 'Q5 Choice 3', 'Q5 Choice 4'],
        ['Q6 Choice 1', 'Q6 Choice 2 correct', 'Q6 Choice 3', 'Q6 Choice 4'],
        ['Q7 Choice 1', 'Q7 Choice 2', 'Q7 Choice 3 correct', 'Q7 Choice 4'],
        ['Q8 Choice 1', 'Q8 Choice 2', 'Q8 Choice 3', 'Q8 Choice 4 correct'],
        ['Q9 Choice 1 correct', 'Q9 Choice 2', 'Q9 Choice 3', 'Q9 Choice 4'],
        ['Q10 Choice 1', 'Q10 Choice 2 correct', 'Q10 Choice 3', 'Q10 Choice 4'],
        ['Q11 Choice 1', 'Q11 Choice 2', 'Q11 Choice 3 correct', 'Q11 Choice 4']
    ],

    answers: [
        'choice-1',
        'choice-2',
        'choice-3',
        'choice-4',
        'choice-1',
        'choice-2',
        'choice-3',
        'choice-4',
        'choice-1',
        'choice-2',
        'choice-3',
    ],

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
