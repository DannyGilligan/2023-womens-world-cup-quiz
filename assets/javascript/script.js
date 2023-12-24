
const choice1Container = document.getElementById('choice-1-text');                  // Displays choice text.
const choice2Container = document.getElementById('choice-2-text');                  // Displays choice text.
const choice3Container = document.getElementById('choice-3-text');                  // Displays choice text.
const choice4Container = document.getElementById('choice-4-text');                  // Displays choice text.

const userChoiceInput1 = document.getElementById('choice-1-input');                 // Used for user input.
const userChoiceInput2 = document.getElementById('choice-2-input');                 // Used for user input.
const userChoiceInput3 = document.getElementById('choice-3-input');                 // Used for user input.
const userChoiceInput4 = document.getElementById('choice-4-input');                 // Used for user input.

const goalsScoredDisplay = document.getElementById('goals-scored-value');           // Displays the goals scored to the user on screen.

const trackerItem1 = document.getElementById('tracker-item-0');                     // Individual tracker item shown in the tracker panel.
const trackerItem2 = document.getElementById('tracker-item-1');                     // Individual tracker item shown in the tracker panel.
const trackerItem3 = document.getElementById('tracker-item-2');                     // Individual tracker item shown in the tracker panel.
const trackerItem4 = document.getElementById('tracker-item-3');                     // Individual tracker item shown in the tracker panel.
const trackerItem5 = document.getElementById('tracker-item-4');                     // Individual tracker item shown in the tracker panel.
const trackerItem6 = document.getElementById('tracker-item-5');                     // Individual tracker item shown in the tracker panel.
const trackerItem7 = document.getElementById('tracker-item-6');                     // Individual tracker item shown in the tracker panel.
const trackerItem8 = document.getElementById('tracker-item-7');                     // Individual tracker item shown in the tracker panel.
const trackerItem9 = document.getElementById('tracker-item-8');                     // Individual tracker item shown in the tracker panel.
const trackerItem10 = document.getElementById('tracker-item-9');                    // Individual tracker item shown in the tracker panel.
const trackerItem11 = document.getElementById('tracker-item-10');                   // Individual tracker item shown in the tracker panel.

let questionDialogueBox = document.getElementById('top-panel-inner');               // Displays the main dialogue to the user (question text etc).

let mainButton = document.getElementById('main-button');

let quizEngine = {

    /* Object Properties */
    userName: null,

    welcomeMessage: `Welcome to the FIFA 2023 Women's World Cup Quiz`,

    questionCounter: 0,
    
    questions: [
        'Is this question 1?',  // Text for Question 1.
        'Is this question 2?',  // Text for Question 2.
        'Is this question 3?',  // Text for Question 3.
        'Is this question 4?',  // Text for Question 4.
        'Is this question 5?',  // Text for Question 5.
        'Is this question 6?',  // Text for Question 6.
        'Is this question 7?',  // Text for Question 7.
        'Is this question 8?',  // Text for Question 8.
        'Is this question 9?',  // Text for Question 9.
        'Is this question 10?', // Text for Question 10.
        'Is this question 11?'  // Text for Question 11.
    ],

    choices: [
        ['Q1 Choice 1', 'Q1 Choice 2 correct', 'Q1 Choice 3', 'Q1 Choice 4'],     // Choices for Question 1.
        ['Q2 Choice 1', 'Q2 Choice 2', 'Q2 Choice 3', 'Q2 Choice 4 correct'],     // Choices for Question 2.
        ['Q3 Choice 1', 'Q3 Choice 2', 'Q3 Choice 3 correct', 'Q3 Choice 4'],     // Choices for Question 3.
        ['Q4 Choice 1', 'Q4 Choice 2 correct', 'Q4 Choice 3', 'Q4 Choice 4'],     // Choices for Question 4.
        ['Q5 Choice 1 correct', 'Q5 Choice 2', 'Q5 Choice 3', 'Q5 Choice 4'],     // Choices for Question 5.
        ['Q6 Choice 1', 'Q6 Choice 2', 'Q6 Choice 3 correct', 'Q6 Choice 4'],     // Choices for Question 6.
        ['Q7 Choice 1 correct', 'Q7 Choice 2', 'Q7 Choice 3', 'Q7 Choice 4'],     // Choices for Question 7.
        ['Q8 Choice 1', 'Q8 Choice 2', 'Q8 Choice 3', 'Q8 Choice 4 correct'],     // Choices for Question 8.
        ['Q9 Choice 1', 'Q9 Choice 2 correct', 'Q9 Choice 3', 'Q9 Choice 4'],     // Choices for Question 9.
        ['Q10 Choice 1 correct', 'Q10 Choice 2', 'Q10 Choice 3', 'Q10 Choice 4'], // Choices for Question 10.
        ['Q11 Choice 1', 'Q11 Choice 2', 'Q11 Choice 3 correct', 'Q11 Choice 4']  // Choices for Question 11.
    ],

    choiceContainers: [
        choice1Container,
        choice2Container,
        choice3Container,
        choice4Container
    ],

    answers: [
        'Q1 choice-2-input', // Answer for Question 1.
        'Q2 choice-4-input', // Answer for Question 2.
        'Q3 choice-3-input', // Answer for Question 3.
        'Q4 choice-2-input', // Answer for Question 4.
        'Q5 choice-1-input', // Answer for Question 5.
        'Q6 choice-3-input', // Answer for Question 6.
        'Q7 choice-1-input', // Answer for Question 7.
        'Q8 choice-4-input', // Answer for Question 8.
        'Q9 choice-2-input', // Answer for Question 9.
        'Q10 choice-1-input', // Answer for Question 10.
        'Q11 choice-3-input', // Answer for Question 11.
    ],

    varAssists: [
        ['choice-3-input', 'choice-1-input'], // VAR Assists for Question 1.
        ['choice-1-input', 'choice-3-input'], // VAR Assists for Question 2.
        ['choice-4-input', 'choice-2-input'], // VAR Assists for Question 3.
        ['choice-3-input', 'choice-1-input'], // VAR Assists for Question 4.
        ['choice-3-input', 'choice-4-input'], // VAR Assists for Question 5.
        ['choice-4-input', 'choice-1-input'], // VAR Assists for Question 6.
        ['choice-3-input', 'choice-2-input'], // VAR Assists for Question 7.
        ['choice-3-input', 'choice-1-input'], // VAR Assists for Question 8.
        ['choice-4-input', 'choice-1-input'], // VAR Assists for Question 9.
        ['choice-3-input', 'choice-2-input'], // VAR Assists for Question 10.
        ['choice-4-input', 'choice-1-input']  // VAR Assists for Question 11.
    ],

    userChoiceInputs: [
        userChoiceInput1, // Holds the radio input for choice 1.
        userChoiceInput2, // Holds the radio input for choice 2.
        userChoiceInput3, // Holds the radio input for choice 3.
        userChoiceInput4  // Holds the radio input for choice 4.
    ],

    currentCorrectAnswer: null, // Holds the correct answer for the current question.

    goalsScored: 0, // Holds the running total of goals scored by the user.

    trackerItems: [
        trackerItem1,
        trackerItem2,
        trackerItem3,
        trackerItem4,
        trackerItem5,
        trackerItem6,
        trackerItem7,
        trackerItem8,
        trackerItem9,
        trackerItem10,
        trackerItem11
    ],

    /* Object Methods */

    /**
     * The handleUserNameSubmit method is triggered when the user enters their username,
     * the default behaviour of the form is prevented and,
     * the value of the input is assigned to the userName property in the quizEngine object,
     * to note, the validation here occurs in the HTML element itself using the 'minlength', 'maxlength',
     * and 'required' attributes.
     */
    
    handleUserNameSubmit: function (event) {
        event.preventDefault();
        quizEngine.userName = document.getElementById('username-input');                                                                       // Assigns the username entered to the userName property in quizEngine.
        questionDialogueBox.innerText = `It's almost kick off time ${quizEngine.userName.value}, let's get the rules out of the way first..`;  // Displays quiz rules message to user.
        document.getElementById('main-button').innerText = 'Kick Off!';                                                                        // Changes text of main button to 'Kick Off!'.
        document.getElementById('enter-username-container').style.display = 'none';                                                            // Hides the enter user name screen, not needed now.
        document.getElementById('quiz-rules-inner-container').style.display = 'flex';                                                          // Displays the quiz rules.
        document.getElementById('main-button').removeAttribute('form');                                                                        // Removes the form attribute, disonnecting the button from enter username form.
        document.getElementById('main-button').addEventListener('click', quizEngine.displayQuiz);                                              // Assigns a new event listener to 'hand off' functionality to next method
        console.log(quizEngine.userName.value);                                                                                                // Debugging message.
    },


    
    /**
     * The displayQuiz method will display the question and the choices to the user, 
     * this hides the previous 'quiz rules' screen, then displays the choices container,
     * tracker container, var assist container and goals scored container.
     */
    displayQuiz: function () {

        document.getElementById('no-option-selected-alert').style.display = 'none';                              // Hides the 'no option selected' warning.
        document.getElementById('tracker-container-inner').style.display = 'flex';                               // Makes the tracker panel visible.
        document.getElementById('bottom-panel-item1').style.visibility = 'visible';                              // Makes the VAR Assist button visible.
        document.getElementById('bottom-panel-item3').style.visibility = 'visible';                              // Makes the Goals Scored box visible.
        document.getElementById('main-button').removeEventListener('click', quizEngine.displayQuiz);             // Removes the displayQuiz event listener from main button, not needed once quiz is displayed.
        document.getElementById('quiz-rules-inner-container').style.display = 'none';                            // Hides the quiz rules screen.
        document.getElementById('tracker-container-inner').style.visibility = 'visible';                         // Makes the tracker feature visible.
        quizEngine.trackerItems[quizEngine.questionCounter].classList.add('tracker-item-active');                // Adds active item class to tracker item.
        quizEngine.userChoiceInputs[0].checked = false;                                                          // Resets the radio input for choice 1.
        quizEngine.userChoiceInputs[1].checked = false;                                                          // Resets the radio input for choice 2.
        quizEngine.userChoiceInputs[2].checked = false;                                                          // Resets the radio input for choice 3.
        quizEngine.userChoiceInputs[3].checked = false;                                                          // Resets the radio input for choice 4.
        document.getElementById('main-button').innerText = 'Shoot!';                                             // Changes innerText of main button to 'Shoot!'.
        questionDialogueBox.innerText = quizEngine.questions[quizEngine.questionCounter];                        // Displays the question text to the user, driven by the questionCounter.  
        quizEngine.choiceContainers[0].innerText = quizEngine.choices[quizEngine.questionCounter][0];            // Displays choice 1 text to user, driven by the questionCounter.  
        quizEngine.choiceContainers[1].innerText = quizEngine.choices[quizEngine.questionCounter][1];            // Displays choice 2 text to user, driven by the questionCounter.  
        quizEngine.choiceContainers[2].innerText = quizEngine.choices[quizEngine.questionCounter][2];            // Displays choice 3 text to user, driven by the questionCounter.  
        quizEngine.choiceContainers[3].innerText = quizEngine.choices[quizEngine.questionCounter][3];            // Displays choice 4 text to user, driven by the questionCounter.  
        quizEngine.currentCorrectAnswer = quizEngine.answers[quizEngine.questionCounter];                        // Assigns the correct answer to the current question to currentCorrectAnswer.
        console.log('The current correct answer is ' + quizEngine.currentCorrectAnswer);                         // Debugging message.
        document.getElementById('choices-container-outer').style.display = 'flex';                               // Displays the choices screen to the user.
        document.getElementById('main-button').addEventListener('click', quizEngine.checkAnswer);   // Directs to increment counter function, debugging.
        console.log(quizEngine.questionCounter);                                                                 // Debugging message.


      //    document.getElementById('choices-container-outer').addEventListener("submit", quizEngine.handleUserChoiceSubmit);
      //    document.getElementById('tracker-container-inner').style.visibility = 'visible';                         // Makes the tracker feature visible.
      //    mainButton.innerText = 'Shoot!';                                                                         // Changes the text on the main button to 'Shoot!'.
      //    mainButton.setAttribute('form', 'choices-container-outer');                                              // Connects the main button to the user choice submit form.
      //    console.log('Hello from displayQuiz!')
    },
    
    checkAnswer: function () {
        document.getElementById('main-button').removeEventListener('click', quizEngine.checkAnswer);
        
        console.log('printed from inside checkAnswer: ' + quizEngine.questionCounter);
        // The code below will fire if the user clicks on 'Shoot!' without selecting a choice.
        if ( quizEngine.userChoiceInputs[0].checked === false && quizEngine.userChoiceInputs[1].checked === false && quizEngine.userChoiceInputs[2].checked === false && quizEngine.userChoiceInputs[3].checked === false ) {
            document.getElementById('tracker-container-inner').style.display = 'none';
            document.getElementById('no-option-selected-alert').style.display = 'flex';
            document.getElementById('main-button').addEventListener('click', quizEngine.checkAnswer);
        } else {

            // The code below will fire when a choice selection has been submitted.
            let userChoiceSubmitted;                                                            // Declares a variable within the else part of the IF statement, left unassigned initially.                  
            if (quizEngine.userChoiceInputs[0].checked = true) {                                // First condition is checked to see if the 1st choice radio input has been checked.
                userChoiceSubmitted = quizEngine.userChoiceInputs[0].id;                        // If 1st choice radio input has been checked, the id of that input is assigned to userChoiceSubmitted variable, if not, the next condition is tested.
            } else if (quizEngine.userChoiceInputs[1].checked = true) {                         // The same logic applies for the remaining conditions.
                userChoiceSubmitted = quizEngine.userChoiceInputs[1].id;
            } else if (quizEngine.userChoiceInputs[2].checked = true) {
                userChoiceSubmitted = quizEngine.userChoiceInputs[2].id;
            } else {
                userChoiceSubmitted = quizEngine.userChoiceInputs[3].id;
            };





            /*
            quizEngine.trackerItems[quizEngine.questionCounter].classList.add('tracker-item-correct'); 
            quizEngine.trackerItems[quizEngine.questionCounter].classList.remove('tracker-item-active');                // Removes active item class to tracker item
            document.getElementById('main-button').addEventListener('click', quizEngine.displayQuiz);
            quizEngine.questionCounter++;
            */
        }
    },

    
 

    /** 
     * The handleUserChoiceSubmit method will process the user's input and determine if it is correct or incorrect.
     * It uses a 'for loop' to iterate through the userInputs property,
     * the using an IF conditional statement, it will identify which 
     * input has been selected by the user. This input is then compared
     * against the correct answer for the current question stored in 
     * the answers property of the quizEngine object. If the answer is 
     * correct, it will result in the goals scored value being incremented.
     * A correct answer will result in a feedback message of 'GOAL!' accompanied by
     * an appropriate image. If the answer is incorrent, the goal scored will not be
     * incremented, and an alternative appropriate image will be displayed. The text of the
     * main button will be changed to 'Play on!' and the functionality will 'handed off' to another
     * method.
     */


/*
    handleUserChoiceSubmit: function (event) {
        console.log('Hello from handleUserChoiceSubmit!')
        event.preventDefault();   
        mainButton.removeAttribute('form', 'choices-container-outer');                                           // Disonnects the main button to the user choice submit form 
        document.getElementById('choices-container-outer').removeEventListener("submit", quizEngine.handleUserChoiceSubmit);                                                                               // prevents the form from submitting
        quizEngine.trackerItems[0].classList.remove('tracker-item-active');                                      // Removes active class from first tracker item
        quizEngine.trackerItems[quizEngine.questionCounter].classList.remove('tracker-item-active');             // Removes active class from current tracker item

        for (let i = 0; i < quizEngine.userChoiceInputs.length; i++) {                                           // For loop that will iterate over the user inputs
            if (quizEngine.userChoiceInputs[i].checked === true) {                                               // An IF conditional determines which input has been checked
                quizEngine.userChoiceSubmitted = quizEngine.userChoiceInputs[i].id;                              // The id of the checked input is then assigned to the userChoiceSubmitted property
                quizEngine.currentCorrectAnswer = quizEngine.answers[quizEngine.questionCounter];                // Assigns the answer to the current question to the currentCorrectAnswer property
                if (quizEngine.userChoiceSubmitted === quizEngine.currentCorrectAnswer) {                        // An IF conditional determines if the user choice and the correct answer match
                    ++quizEngine.goalsScored;                                                                    // Increments goals scored if answer is correct
                    goalsScoredDisplay.innerText = quizEngine.goalsScored;                                       // Displays the goals scored on screen to the user
                    quizEngine.trackerItems[quizEngine.questionCounter].classList.add('tracker-item-correct');   // Adds tracker item correct class
                    document.getElementById('answer-feedback-status').innerHTML = `<span>GOAL!</span>`;          // Updates the feedback text
                    // document.getElementById('choices-container-outer').style.display = 'none';               // Hides the choices container
                    document.getElementById('answer-feedback-outer').style.display = 'flex';                     // Displays the answer feedback screen
                    document.getElementById('answer-feedback-image-container').innerHTML = `<img src="assets/images/goal_image_${quizEngine.questionCounter}.webp" alt="Female Footballer" id="answer-feedback-image">`; // Displays the 'GOAL!' feedback image
                } else {                                                                                         // If the answer is incorrect, the code below runs
                    document.getElementById('answer-feedback-image-container').innerHTML = `<img src="assets/images/miss_image_${quizEngine.questionCounter}.webp" alt="Female Footballer" id="answer-feedback-image">`; // Displays the 'MISS!' feedback image
                    quizEngine.trackerItems[quizEngine.questionCounter].classList.add('tracker-item-incorrect'); // Adds tracker item incorrect class
                    document.getElementById('answer-feedback-status').innerHTML = `<span>MISS!</span>`;          // Updates the feedback text
                    document.getElementById('choices-container-outer').style.display = 'none';                   // Hides the choices container
                    document.getElementById('answer-feedback-outer').style.display = 'flex';                     // Displays the feedback container to the user
                }
            }
        }
        ++quizEngine.questionCounter;
        mainButton.addEventListener('click', quizEngine.displayNextQuestion);                                    // Assigns an event listener to hand off functionality to displayNextQuestion method
        mainButton.innerText = 'Play on!';                                                                       // Changes text of main button to 'Play On!'
        console.log(quizEngine.questionCounter + 'printed from inside handleUserChoiceSubmit before increment')
        console.log(quizEngine.questionCounter + 'printed from inside handleUserChoiceSubmit after increment')
    },
*/
    

    /* BLOCKED OUT, START AGAIN 
    displayNextQuestion: function () {
        console.log(quizEngine.questionCounter + 'printed from inside displayNextQuestion, after increment')
        quizEngine.currentCorrectAnswer = null;
        quizEngine.userChoiceSubmitted = null;
        document.getElementById("choices-container-outer").reset();                                              // Resets the form, clearing the radio inputs (add credit to readme!)
        document.getElementById('answer-feedback-outer').style.display = 'none';                                 // Hides the answer feedback screen
        document.getElementById('choices-container-outer').style.display = 'flex';                               // Displays choices container
        quizEngine.trackerItems[quizEngine.questionCounter].classList.add('tracker-item-active');                // Adds tracker item active class
        mainButton.setAttribute('form', 'choices-container-outer');                                              // Connects the main button to the user choice submit form 
        mainButton.addEventListener('click', quizEngine.displayQuiz)                                             // Adds displayQuiz event listener
    }
    */

};


document.getElementById('enter-username').addEventListener("submit", quizEngine.handleUserNameSubmit);




/*
const submitUserChoiceForm = document.getElementById('choices-container-outer');
submitUserChoiceForm.addEventListener("submit", quizEngine.handleUserChoiceSubmit);
*/

