let quizEngine = {

    /* Object Properties */
    userName: null,

    welcomeMessage: `Welcome to the FIFA 2023 Women's World Cup Quiz`,

    questionCounter: 0,

    questions: [
        'Is this question 1?', /* Text for Question 1 */
        'Is this question 2?', /* Text for Question 2 */
        'Is this question 3?', /* Text for Question 3 */
        'Is this question 4?', /* Text for Question 4 */
        'Is this question 5?', /* Text for Question 5 */
        'Is this question 6?', /* Text for Question 6 */
        'Is this question 7?', /* Text for Question 7 */
        'Is this question 8?', /* Text for Question 8 */
        'Is this question 9?', /* Text for Question 9 */
        'Is this question 10?', /* Text for Question 10 */
        'Is this question 11?'  /* Text for Question 11 */
    ],

    choices: [
        ['Q1 Choice 1', 'Q1 Choice 2 correct', 'Q1 Choice 3', 'Q1 Choice 4'], /* Choices for Question 1 */
        ['Q2 Choice 1', 'Q2 Choice 2', 'Q2 Choice 3', 'Q2 Choice 4 correct'], /* Choices for Question 2 */
        ['Q3 Choice 1', 'Q3 Choice 2', 'Q3 Choice 3 correct', 'Q3 Choice 4'], /* Choices for Question 3 */
        ['Q4 Choice 1', 'Q4 Choice 2 correct', 'Q4 Choice 3', 'Q4 Choice 4'], /* Choices for Question 4 */
        ['Q5 Choice 1 correct', 'Q5 Choice 2', 'Q5 Choice 3', 'Q5 Choice 4'], /* Choices for Question 5 */
        ['Q6 Choice 1', 'Q6 Choice 2', 'Q6 Choice 3 correct', 'Q6 Choice 4'], /* Choices for Question 6 */
        ['Q7 Choice 1 correct', 'Q7 Choice 2', 'Q7 Choice 3', 'Q7 Choice 4'], /* Choices for Question 7 */
        ['Q8 Choice 1', 'Q8 Choice 2', 'Q8 Choice 3', 'Q8 Choice 4 correct'], /* Choices for Question 8 */
        ['Q9 Choice 1', 'Q9 Choice 2 correct', 'Q9 Choice 3', 'Q9 Choice 4'], /* Choices for Question 9 */
        ['Q10 Choice 1 correct', 'Q10 Choice 2', 'Q10 Choice 3', 'Q10 Choice 4'], /* Choices for Question 10 */
        ['Q11 Choice 1', 'Q11 Choice 2', 'Q11 Choice 3 correct', 'Q11 Choice 4']  /* Choices for Question 11 */
    ],

    answers: [
        'choice-2', /* Answer for Question 1 */
        'choice-4', /* Answer for Question 2 */
        'choice-3', /* Answer for Question 3 */
        'choice-2', /* Answer for Question 4 */
        'choice-1', /* Answer for Question 5 */
        'choice-3', /* Answer for Question 6 */
        'choice-1', /* Answer for Question 7 */
        'choice-4', /* Answer for Question 8 */
        'choice-2', /* Answer for Question 9 */
        'choice-1', /* Answer for Question 10 */
        'choice-3', /* Answer for Question 11 */
    ],

    varAssists: [
        ['choice-3-input', 'choice-1-input'], /* VAR Assist for Question 1 */
        ['choice-1-input', 'choice-3-input'], /* VAR Assist for Question 2 */
        ['choice-4-input', 'choice-2-input'], /* VAR Assist for Question 3 */
        ['choice-3-input', 'choice-1-input'], /* VAR Assist for Question 4 */
        ['choice-3-input', 'choice-4-input'], /* VAR Assist for Question 5 */
        ['choice-4-input', 'choice-1-input'], /* VAR Assist for Question 6 */
        ['choice-3-input', 'choice-2-input'], /* VAR Assist for Question 7 */
        ['choice-3-input', 'choice-1-input'], /* VAR Assist for Question 8 */
        ['choice-4-input', 'choice-1-input'], /* VAR Assist for Question 9 */
        ['choice-3-input', 'choice-2-input'], /* VAR Assist for Question 10 */
        ['choice-4-input', 'choice-1-input']  /* VAR Assist for Question 11 */
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
        questionDialogueBox.innerText = `It's almost kick off time ${quizEngine.userName.value}, let's get the rules out of the way first..`;
        document.getElementById('main-button').innerText = 'Kick Off!';
        document.getElementById('enter-username-container').style.display = 'none';
        document.getElementById('quiz-rules-inner-container').style.display = 'flex';
        document.getElementById('main-button').removeAttribute('form'); /* Removes the form attribute, disonnecting the button from enter username form */
        document.getElementById('main-button').removeEventListener("submit", quizEngine.handleUserNameSubmit); /*Removes the initial event listener assigned at the enter username screen */
        document.getElementById('main-button').addEventListener('click', quizEngine.displayQuiz); /* Assigns a new event listener to 'hand off' to */
        
    },

    /**
     * The displayQuiz method will display the question and the choices to the user, 
     * this hides the previous 'quiz rules' screen, then displays the choices container,
     * tracker container, var assist container and goals scored container.
     */
    displayQuiz: function () {
        console.log('display quiz');
        /* mainButton.setAttribute('form', 'choices-container-outer') */
        document.getElementById('quiz-rules-inner-container').style.display = 'none';
        document.getElementById('choices-container-outer').style.display = 'flex';
        document.getElementById('tracker-container-inner').style.visibility = 'visible';
        document.getElementById('bottom-panel-item1').style.visibility = 'visible';
        document.getElementById('bottom-panel-item3').style.visibility = 'visible';
        questionDialogueBox.innerText = quizEngine.questions[0];
        mainButton.innerText = 'Shoot!';
    },

};

const enterUsernameForm = document.getElementById('enter-username');
enterUsernameForm.addEventListener("submit", quizEngine.handleUserNameSubmit);
let questionDialogueBox = document.getElementById('top-panel-inner');

let mainButton = document.getElementById('main-button');

const choice1Container = document.getElementById('choice-1-text').innerText = quizEngine.choices[quizEngine.questionCounter][0];
const choice2Container = document.getElementById('choice-2-text').innerText = quizEngine.choices[quizEngine.questionCounter][1];
const choice3Container = document.getElementById('choice-3-text').innerText = quizEngine.choices[quizEngine.questionCounter][2];
const choice4Container = document.getElementById('choice-4-text').innerText = quizEngine.choices[quizEngine.questionCounter][3];


/*
let user = document.getElementById('username-input');
*/


console.log(quizEngine.questionCounter)
