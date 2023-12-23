const choice1Container = document.getElementById('choice-1-text'); // Displays choice text
const choice2Container = document.getElementById('choice-2-text'); // Displays choice text
const choice3Container = document.getElementById('choice-3-text'); // Displays choice text
const choice4Container = document.getElementById('choice-4-text'); // Displays choice text
const userChoiceInput1 = document.getElementById('choice-1-input'); // Used for user input
const userChoiceInput2 = document.getElementById('choice-2-input'); // Used for user input
const userChoiceInput3 = document.getElementById('choice-3-input'); // Used for user input
const userChoiceInput4 = document.getElementById('choice-4-input'); // Used for user input
const goalsScoredDisplay = document.getElementById('goals-scored-value'); // Displays the goals scored to the user on screen
const trackerItem1 = document.getElementById('tracker-item-0'); // Individual tracker item shown in the tracker panel
const trackerItem2 = document.getElementById('tracker-item-1'); // Individual tracker item shown in the tracker panel
const trackerItem3 = document.getElementById('tracker-item-2'); // Individual tracker item shown in the tracker panel
const trackerItem4 = document.getElementById('tracker-item-3'); // Individual tracker item shown in the tracker panel
const trackerItem5 = document.getElementById('tracker-item-4'); // Individual tracker item shown in the tracker panel
const trackerItem6 = document.getElementById('tracker-item-5'); // Individual tracker item shown in the tracker panel
const trackerItem7 = document.getElementById('tracker-item-6'); // Individual tracker item shown in the tracker panel



let questionDialogueBox = document.getElementById('top-panel-inner'); // Displays the main dialogue to the user (question text etc)


let quizEngine = {

    /* Object Properties */
    userName: null,
    welcomeMessage: `Welcome to the FIFA 2023 Women's World Cup Quiz`,
    questionCounter: 0,
    questions: [
        'Is this question 1?', // Text for Question 1
        'Is this question 2?', // Text for Question 2
        'Is this question 3?', // Text for Question 3
        'Is this question 4?', // Text for Question 4
        'Is this question 5?', // Text for Question 5
        'Is this question 6?', // Text for Question 6
        'Is this question 7?', // Text for Question 7
        'Is this question 8?', // Text for Question 8
        'Is this question 9?', // Text for Question 9
        'Is this question 10?', // Text for Question 10
        'Is this question 11?'  // Text for Question 11
    ],
    choices: [
        ['Q1 Choice 1', 'Q1 Choice 2 correct', 'Q1 Choice 3', 'Q1 Choice 4'], // Choices for Question 1
        ['Q2 Choice 1', 'Q2 Choice 2', 'Q2 Choice 3', 'Q2 Choice 4 correct'], // Choices for Question 2
        ['Q3 Choice 1', 'Q3 Choice 2', 'Q3 Choice 3 correct', 'Q3 Choice 4'], // Choices for Question 3
        ['Q4 Choice 1', 'Q4 Choice 2 correct', 'Q4 Choice 3', 'Q4 Choice 4'], // Choices for Question 4
        ['Q5 Choice 1 correct', 'Q5 Choice 2', 'Q5 Choice 3', 'Q5 Choice 4'], // Choices for Question 5
        ['Q6 Choice 1', 'Q6 Choice 2', 'Q6 Choice 3 correct', 'Q6 Choice 4'], // Choices for Question 6
        ['Q7 Choice 1 correct', 'Q7 Choice 2', 'Q7 Choice 3', 'Q7 Choice 4'], // Choices for Question 7
        ['Q8 Choice 1', 'Q8 Choice 2', 'Q8 Choice 3', 'Q8 Choice 4 correct'], // Choices for Question 8
        ['Q9 Choice 1', 'Q9 Choice 2 correct', 'Q9 Choice 3', 'Q9 Choice 4'], // Choices for Question 9
        ['Q10 Choice 1 correct', 'Q10 Choice 2', 'Q10 Choice 3', 'Q10 Choice 4'], // Choices for Question 10
        ['Q11 Choice 1', 'Q11 Choice 2', 'Q11 Choice 3 correct', 'Q11 Choice 4']  // Choices for Question 11
    ],
    answers: [
        'choice-2-input', // Answer for Question 1
        'choice-4-input', // Answer for Question 2
        'choice-3-input', // Answer for Question 3
        'choice-2-input', // Answer for Question 4
        'choice-1-input', // Answer for Question 5
        'choice-3-input', // Answer for Question 6
        'choice-1-input', // Answer for Question 7
        'choice-4-input', // Answer for Question 8
        'choice-2-input', // Answer for Question 9
        'choice-1-input', // Answer for Question 10
        'choice-3-input', // Answer for Question 11
    ],
    varAssists: [
        ['choice-3-input', 'choice-1-input'], // VAR Assists for Question 1
        ['choice-1-input', 'choice-3-input'], // VAR Assists for Question 2
        ['choice-4-input', 'choice-2-input'], // VAR Assists for Question 3
        ['choice-3-input', 'choice-1-input'], // VAR Assists for Question 4
        ['choice-3-input', 'choice-4-input'], // VAR Assists for Question 5
        ['choice-4-input', 'choice-1-input'], // VAR Assists for Question 6
        ['choice-3-input', 'choice-2-input'], // VAR Assists for Question 7
        ['choice-3-input', 'choice-1-input'], // VAR Assists for Question 8
        ['choice-4-input', 'choice-1-input'], // VAR Assists for Question 9
        ['choice-3-input', 'choice-2-input'], // VAR Assists for Question 10
        ['choice-4-input', 'choice-1-input']  // VAR Assists for Question 11
    ],
    userChoiceInputs: [
        userChoiceInput1, // Holds the radio input for choice 1
        userChoiceInput2, // Holds the radio input for choice 2
        userChoiceInput3, // Holds the radio input for choice 3
        userChoiceInput4  // Holds the radio input for choice 4
    ],
    userChoiceSubmitted: null, // Holds the current choice selected by the user (for the current question)
    currentCorrectAnswer: null, // Holds the correct answer for the current question
    goalsScored: 0, // Holds the tally of goals scored by the user

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
        document.getElementById('main-button').removeAttribute('form');                                          // Removes the form attribute, disonnecting the button from enter username form
        document.getElementById('main-button').removeEventListener("submit", quizEngine.handleUserNameSubmit);   // Removes the initial event listener assigned at the enter username screen
        document.getElementById('main-button').addEventListener('click', quizEngine.displayQuiz);                // Assigns a new event listener to 'hand off' functionality
        
    },

    /**
     * The displayQuiz method will display the question and the choices to the user, 
     * this hides the previous 'quiz rules' screen, then displays the choices container,
     * tracker container, var assist container and goals scored container.
     */
    displayQuiz: function () {
        /* mainButton.setAttribute('form', 'choices-container-outer') */
        document.getElementById('quiz-rules-inner-container').style.display = 'none';    // Hides the quiz rules screen
        choice1Container.innerText = quizEngine.choices[quizEngine.questionCounter][0];  // Displays choice 1 text to user
        choice2Container.innerText = quizEngine.choices[quizEngine.questionCounter][1];  // Displays choice 2 text to user
        choice3Container.innerText = quizEngine.choices[quizEngine.questionCounter][2];  // Displays choice 3 text to user
        choice4Container.innerText = quizEngine.choices[quizEngine.questionCounter][3];  // Displays choice 4 text to user
        document.getElementById('choices-container-outer').style.display = 'flex';       // Displays the choices to the user
        document.getElementById('tracker-container-inner').style.visibility = 'visible'; // Makes the tracker feature visible
        document.getElementById('bottom-panel-item1').style.visibility = 'visible';      // Makes the VAR Assist button visible
        document.getElementById('bottom-panel-item3').style.visibility = 'visible';      // Makes the Goals Scored box visible
        questionDialogueBox.innerText = quizEngine.questions[0];                         // Displays the question text to the user, driven by the questionCounter
        mainButton.innerText = 'Shoot!';                                                 // Changes the text on the main button to 'Shoot!'
        mainButton.setAttribute('form', 'choices-container-outer');                      // Connects the main button to the user choice form to enable HTML validation
        /*mainButton.addEventListener = ("submit", quizEngine.handleUserChoiceSubmit)    // Add an event listener to the main button, 'handing off' the functionality*/
    },


    handleUserChoiceSubmit: function (event) {
        event.preventDefault();                                                                         // prevents the form from submitting
        
        for (let i = 0; i < quizEngine.userChoiceInputs.length; i++) {                                  // For loop that will iterate over the user inputs
            if (quizEngine.userChoiceInputs[i].checked === true) {                                      // An IF conditional determines which input has been checked
                quizEngine.userChoiceSubmitted = quizEngine.userChoiceInputs[i].id;                     // The id of the checked input is then assigned to the userChoiceSubmitted property
                quizEngine.currentCorrectAnswer = quizEngine.answers[quizEngine.questionCounter];       // Assigns the answer to the current question to the currentCorrectAnswer property
                if (quizEngine.userChoiceSubmitted === quizEngine.currentCorrectAnswer) {               // An IF conditional determines if the user choice and the correct answer match
                    ++quizEngine.goalsScored;                                                           // Increments goals scored if answer is correct
                    goalsScoredDisplay.innerText = quizEngine.goalsScored;                              // Displays the goals scored on screen to the user

                    document.getElementById('answer-feedback-status').innerHTML = `<span>GOAL!</span>`; // Updates the feedback text
                    document.getElementById('choices-container-outer').style.display = 'none';          // Hides the choices container
                    document.getElementById('answer-feedback-outer').style.display = 'flex';            // Displays the answer feedback screen
                    document.getElementById('answer-feedback-image-container').innerHTML = `<img src="assets/images/goal_image_${quizEngine.questionCounter}.webp" alt="Female Footballer" id="answer-feedback-image">`; // Displays the 'GOAL!' feedback image
                } else {                                                                                // If the answer is incorrect, the code below runs
                    document.getElementById('answer-feedback-image-container').innerHTML = `<img src="assets/images/miss_image_${quizEngine.questionCounter}.webp" alt="Female Footballer" id="answer-feedback-image">`; // Displays the 'MISS!' feedback image
                    document.getElementById('answer-feedback-status').innerHTML = `<span>MISS!</span>`; // Updates the feedback text
                    document.getElementById('choices-container-outer').style.display = 'none';          // Hides the choices container
                    document.getElementById('answer-feedback-outer').style.display = 'flex';            // Displays the feedback container to the user
                }
            }
        }


    }

};

const enterUsernameForm = document.getElementById('enter-username');
enterUsernameForm.addEventListener("submit", quizEngine.handleUserNameSubmit);

let mainButton = document.getElementById('main-button');

const submitUserChoiceForm = document.getElementById('choices-container-outer');
submitUserChoiceForm.addEventListener("submit", quizEngine.handleUserChoiceSubmit);





/*
const choice1Container = document.getElementById('choice-1-text').innerText = quizEngine.choices[quizEngine.questionCounter][0];
const choice2Container = document.getElementById('choice-2-text').innerText = quizEngine.choices[quizEngine.questionCounter][1];
const choice3Container = document.getElementById('choice-3-text').innerText = quizEngine.choices[quizEngine.questionCounter][2];
const choice4Container = document.getElementById('choice-4-text').innerText = quizEngine.choices[quizEngine.questionCounter][3];
*/

/*
let user = document.getElementById('username-input');
*/

