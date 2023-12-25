const choice1Container = document.getElementById('choice-1-text');                  // Assigns choice text 1.
const choice2Container = document.getElementById('choice-2-text');                  // Assigns choice text 2.
const choice3Container = document.getElementById('choice-3-text');                  // Assigns choice text 3.
const choice4Container = document.getElementById('choice-4-text');                  // Assigns choice text 4.
const userChoiceInput1 = document.getElementById('choice-1-input');                 // Used for user input 1.
const userChoiceInput2 = document.getElementById('choice-2-input');                 // Used for user input 2.
const userChoiceInput3 = document.getElementById('choice-3-input');                 // Used for user input 3.
const userChoiceInput4 = document.getElementById('choice-4-input');                 // Used for user input 4.
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
const questionDialogueBox = document.getElementById('top-panel-inner');             // Assigns the main dialogue to the user (question text etc).
const mainButton = document.getElementById('main-button');                          // Assigns the main button on screen.
const choiceTextContainers = document.getElementsByClassName('choice-text');        // Assigns the containers used to display the choice text to the user.

const quizEngine = {

    /* -- OBJECT PROPERTIES BELOW -- */
    
    /**
     * Stores user name entered at the start screen, initialised with a null value.
     */
    userName: null,        

    /**
     * Stores the number of the current question. 
     * This will be used to drive the quiz and access the 
     * indices of the necessary arrays to display content to the user
     * , initialised with a 0 value.
     */
    questionCounter: 0, 

    /**
     * Stores the count of available VAR Assists, 
     * initialised with a 3 value. 
     */
    varAssistCounter: 3,     
    
    /**
     * The goalsScored property holds
     * the running total of goals scored
     * by the user. A goal is scored when a
     * question is answered correctly.
     * Initialised with a 0 value.
     */
    goalsScored: 0,             

    /**
     * The currenctCorrectAnswer property holds the
     * correct answer for the current question
     * displayed to the user.
     * Initialised with a null value.
     */
    currentCorrectAnswer: null, 

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

    /**
     * The 'answers' property will contain
     * the html element IDs that correspond
     * to the correct answers for each
     * related question disaplayed to
     * the user
     */
    answers: [
        'choice-2-input', // Answer for Question 1.
        'choice-4-input', // Answer for Question 2.
        'choice-3-input', // Answer for Question 3.
        'choice-2-input', // Answer for Question 4.
        'choice-1-input', // Answer for Question 5.
        'choice-3-input', // Answer for Question 6.
        'choice-1-input', // Answer for Question 7.
        'choice-4-input', // Answer for Question 8.
        'choice-2-input', // Answer for Question 9.
        'choice-1-input', // Answer for Question 10.
        'choice-3-input', // Answer for Question 11.
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

    /**
     * The userChoiceInputs property holds the individual
     * radio inputs for each 'choice container' displayed
     * to the user.
     */
    userChoiceInputs: [
        userChoiceInput1,
        userChoiceInput2,
        userChoiceInput3,
        userChoiceInput4 
    ],

    /**
     * The 'trackerItems' property contains the
     * individual tracker items displayed in the
     * tracker panel. These communicate the progress
     * throughout the quiz by tracking the correct or incorrect answers,
     * and the current active question.
     */
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

    /* -- OBJECT METHODS BELOW -- */

    /**
     * The handleUserNameSubmit method is triggered when the user enters their username.
     * The default behaviour of the form is prevented and
     * the value of the input is assigned to the userName property in the quizEngine object.
     * To note, the validation here occurs in the HTML element itself using the 'minlength', 'maxlength',
     * and 'required' attributes.
     */
    handleUserNameSubmit: function (event) {
        event.preventDefault();                                                                                                                       // Prevents the default behavious of the form upon submission.  
        quizEngine.userName = document.getElementById('username-input');                                                                              // Assigns the username entered to the userName property in quizEngine.
        questionDialogueBox.innerHTML = `<p>It's almost kick off time ${quizEngine.userName.value}, let's get the rules out of the way first..</p>`;  // Displays quiz rules message to user.
        questionDialogueBox.firstElementChild.style.animation = 'easeIn .2s ease-in 0s 1 normal forwards';                                            // Adds easeIn animation to text in question box
        document.getElementById('main-button').innerText = 'Kick Off!';                                                                               // Changes text of main button to 'Kick Off!'.
        document.getElementById('enter-username-container').style.display = 'none';                                                                   // Hides the enter user name screen, not needed now.
        document.getElementById('quiz-rules-inner-container').firstElementChild.style.animation = 'easeIn .3s ease-in 0s 1 normal forwards';          // Adds easeIn animation to rules text (child node of container).
        document.getElementById('quiz-rules-inner-container').style.display = 'flex';                                                                 // Displays the quiz rules.
        document.getElementById('main-button').removeAttribute('form');                                                                               // Removes the form attribute, disonnecting the button from enter username form.
        document.getElementById('main-button').addEventListener('click', quizEngine.displayQuiz);                                                     // Assigns a new event listener to 'hand off' functionality to the displayQuiz method.
        document.getElementById('tracker-container-inner').style.display = 'none';                                                                    // Hides the the inner tracker panel.
    },

    /**
     * The displayQuiz method will display the question and the choices to the user. 
     * This method hides the previous 'quiz rules' screen, then displays the tracker container, the choices container, the
     * var assist container and the goals scored container.
     */
    displayQuiz: function () {
        
        document.getElementById('answer-feedback-outer').style.display = 'none';                                            // Hides answer feedback container
        document.getElementById('no-option-selected-alert').style.display = 'none';                                         // Hides the 'no option selected' warning.
        document.getElementById('bottom-panel-item1').style.visibility = 'visible';                                         // Makes the VAR Assist button visible.
        document.getElementById('bottom-panel-item1').style.animation = 'easeIn .3s ease-in-out 0s 1 normal forwards';      // Eases the VAR Assist button onto the screen.
        document.getElementById('bottom-panel-item3').style.visibility = 'visible';                                         // Makes the Goals Scored box visible.
        document.getElementById('bottom-panel-item3').style.animation = 'easeIn .3s ease-in-out 0s 1 normal forwards';      // Eases the Goals Scored box onto the screen.
        document.getElementById('main-button').removeEventListener('click', quizEngine.displayQuiz);                        // Removes the displayQuiz event listener from main button, not needed once quiz is displayed.
        document.getElementById('quiz-rules-inner-container').style.display = 'none';                                       // Hides the quiz rules screen.
        document.getElementById('tracker-container-inner').style.visibility = 'visible';                                    // Sets the tracker feature visibility to visible
        document.getElementById('tracker-container-inner').style.display = 'flex';                                          // Sets the tracker feature display to flex.
        document.getElementById('tracker-container-inner').style.animation = 'easeIn .3s ease-in-out 0s 1 normal forwards'; // Eases the tracker panel onto the screen. 
        quizEngine.trackerItems[quizEngine.questionCounter].classList.add('tracker-item-active');                           // Adds active item class to tracker item.
        
        for (let i = 0; i < choiceTextContainers.length; i++ ) {                                                            // Loops through the choice text containers and, 
            choiceTextContainers[i].classList.remove('offside-text');                                                       // removes the 'offside-text' class if any were added previously by the varAssist method. 
        }

        for (let i = 0; i < quizEngine.userChoiceInputs.length; i++) {                                                      // Loops through the choice radio input containers and,
            quizEngine.userChoiceInputs[i].parentNode.classList.add('choice-container');                                    // adds the 'choice-container' class if it was removed previously by the varAssist method.
        }

        for (let i = 0; i < quizEngine.userChoiceInputs.length; i++) {                                                      // Loops through the choice radio input containers and,
            quizEngine.userChoiceInputs[i].parentNode.classList.remove('offside-container');                                // removes the 'offside-container' class if it was added previously by the varAssist method.
        }

        for (let i = 0; i < quizEngine.userChoiceInputs.length; i++) {                                                      // Loops through the radio inputs and, 
            quizEngine.userChoiceInputs[i].style.visibility = 'visible';                                                    // resets the visibilty for the radio input for all choices in case any were hidden previously by the varAssist mthod.
        }
        
        for (let i = 0; i < quizEngine.userChoiceInputs.length; i++) {                                                      // Loops through the radio inputs and,
            quizEngine.userChoiceInputs[i].checked = false;                                                                 // clears the 'offside-text' class if any were added by the varAssist methodradio inputs.
        }
        
        document.getElementById('goals-scored-container').style.removeProperty('animation');                                // Resets the animation for the Goals Scored display (removed here, so it will fire on the checkAnswer method)

        document.getElementById('main-button').innerText = 'Shoot!';                                                        // Changes innerText of main button to 'Shoot!'.
        questionDialogueBox.innerText = quizEngine.questions[quizEngine.questionCounter];                                   // Displays the question text to the user, driven by the questionCounter.  
        
        quizEngine.choiceContainers[0].innerText = quizEngine.choices[quizEngine.questionCounter][0];                       // Displays choice 1 text to user, driven by the questionCounter.  
        quizEngine.choiceContainers[1].innerText = quizEngine.choices[quizEngine.questionCounter][1];                       // Displays choice 2 text to user, driven by the questionCounter.  
        quizEngine.choiceContainers[2].innerText = quizEngine.choices[quizEngine.questionCounter][2];                       // Displays choice 3 text to user, driven by the questionCounter.  
        quizEngine.choiceContainers[3].innerText = quizEngine.choices[quizEngine.questionCounter][3];                       // Displays choice 4 text to user, driven by the questionCounter.  
        quizEngine.currentCorrectAnswer = quizEngine.answers[quizEngine.questionCounter];                                   // Assigns the correct answer to the current question to currentCorrectAnswer.
        
        document.getElementById('goals-scored-value').innerText = quizEngine.goalsScored;                                   // Displays the goalsScored value to the user  
        document.getElementById('var-assist-remaining').innerHTML = `<span>${quizEngine.varAssistCounter} Remaining</span>`;// Displays the VAR Assists remaining to the user  
        document.getElementById('choices-container-outer').style.display = 'flex';                                          // Displays the choices screen to the user.
        document.getElementById('choices-container-outer').style.animation = 'easeIn .3s ease-in-out 0s 1 normal forwards'; // Eases in display of choices

        if (quizEngine.varAssistCounter > 0) { // If there are VAR Assists remaining             
            document.getElementById('var-assist-button').classList.add('var-assist-button-style');                          // Add the active style for the VAR Assist Button
            document.getElementById('var-assist-button').classList.remove('disabled');                                      // Remove the disabled status for the button (will be disabled after clicking by the varAssist method)
            document.getElementById('var-assist-button').disabled = false;                                                  // Resets the disabled property back to false so user can click on it
        }
        
        document.getElementById('main-button').addEventListener('click', quizEngine.checkAnswer);                           // Hands off functionality to the checkAnswer method.
    },
    
    /** 
     * The checkAnswer method will process the user's input and determine if it is correct or incorrect.
     * It uses an if statement initially to determine if all radio inputs are unchecked,
     * if this is the case, if will fire an alert message to the user
     * directing them to make a choice before clicking on 'Shoot!'.
     * Once a radio input has been checked, and submitted,
     * an IF ELSE conditional will identify which
     * input has been selected by the user. This input is then compared
     * against the correct answer for the current question stored in 
     * the answers property of the quizEngine object. If the answer is 
     * correct, it will result in the goals scored value being incremented.
     * A correct answer will result in a feedback message of 'GOAL!' accompanied by
     * an appropriate image. If the answer is incorrect, the goal scored will not be
     * incremented, and an alternative appropriate image will be displayed. The text of the
     * main button will be changed to 'Play on!' and the functionality will 'handed off' to
     * the displayQuiz method.
     */
    checkAnswer: function () {
        document.getElementById('main-button').removeEventListener('click', quizEngine.checkAnswer);
        
        if ( quizEngine.userChoiceInputs[0].checked === false && quizEngine.userChoiceInputs[1].checked === false && quizEngine.userChoiceInputs[2].checked === false && quizEngine.userChoiceInputs[3].checked === false ) { // The code below will fire if the user clicks on 'Shoot!' without selecting a choice.
           
            document.getElementById('no-option-selected-alert').style.display = 'flex';                   // Will display the 'no option selected' alert to the user. 
            document.getElementById('main-button').addEventListener('click', quizEngine.checkAnswer);     // Adds an event listener to the button and hands off functionality back to the checkAnswer function to wait for another choice submission.  

        } else { // The code below will fire when a choice selection has been submitted.
            
            document.getElementById('no-option-selected-alert').style.display = 'none';                   // Hides the no option selected alert if displayed previously.
            document.getElementById('tracker-container-inner').style.display = 'flex';                    // Displays the tracker panel.
            document.getElementById('var-assist-button').disabled = true;                                 // Disable VAR Assist button while answer feedback screen is displayed.
            let userChoiceSubmitted;                                                                      // Declares a local variable within the else part of the IF statement, left unassigned initially.                  
            if (quizEngine.userChoiceInputs[0].checked === true) {                                        // First condition is checked to see if the 1st choice radio input has been checked.
                userChoiceSubmitted = quizEngine.userChoiceInputs[0].id;                                  // If first choice radio input has been checked, the ID of that input is assigned to userChoiceSubmitted variable, if not, the next condition is tested.
            } else if (quizEngine.userChoiceInputs[1].checked === true) {                                 // Second condition is checked to see if the 2nd choice radio input has been checked.
                userChoiceSubmitted = quizEngine.userChoiceInputs[1].id;                                  // If 2nd choice radio input has been checked, the ID of that input is assigned to userChoiceSubmitted variable, if not, the next condition is tested.
            } else if (quizEngine.userChoiceInputs[2].checked === true) {                                 // Third condition is checked to see if the 3rd choice radio input has been checked.
                userChoiceSubmitted = quizEngine.userChoiceInputs[2].id;                                  // If 3rd choice radio input has been checked, the ID of that input is assigned to userChoiceSubmitted variable.
            } else {                                                                                      // If the first 3 choice radio inputs are blank,
                userChoiceSubmitted = quizEngine.userChoiceInputs[3].id;                                  // The 4th choice is automatically assigned to userChoiceSubmitted.
            }
            
            if (userChoiceSubmitted === quizEngine.currentCorrectAnswer){ // Checks if the userChoiceSubmitted equals the currentCorrectAnswer value (both values use the html element IDs associated with the radio inputs).                                                                                                                                        
                
                ++quizEngine.goalsScored;                                                                                                                                                                            // Increments goalsScored value.   
                quizEngine.trackerItems[quizEngine.questionCounter].classList.add('tracker-item-correct');                                                                                                           // Adds 'correct' item class to tracker item.
                quizEngine.trackerItems[quizEngine.questionCounter].classList.remove('tracker-item-active');                                                                                                         // Removes 'active' item class to tracker item.
                quizEngine.trackerItems[quizEngine.questionCounter].style.transform = ('rotateY(180deg)');                                                                                                           // This will rotate the individual tracker item 180 degrees (content on w3schools.com was referenced, not copied).
                quizEngine.trackerItems[quizEngine.questionCounter].firstElementChild.style.transform = ('scaleX(-1)');                                                                                              // This will 'flip' the text to display correctly after the rotation
                quizEngine.trackerItems[quizEngine.questionCounter].style.transition = 'all .3s ease';                                                                                                               // This will ease the rotation onto the screen
                document.getElementById('choices-container-outer').style.display = 'none';                                                                                                                           // Hides the choices container.
                document.getElementById('answer-feedback-outer').style.display = 'flex';                                                                                                                             // Displays the answer feedback container which will hold the feedback image.
                document.getElementById('answer-feedback-inner').style.animation = 'easeIn .3s ease-in-out 0s 1 normal forwards';                                                                                    // Ease in the display of the inner answer feedback container (holds the image and feedback text)                                                                          
                document.getElementById('answer-feedback-image-container').innerHTML = `<img src="assets/images/goal_image_${quizEngine.questionCounter}.webp" alt="Female Footballer" id="answer-feedback-image">`; // Displays the 'GOAL!' feedback image.
                document.getElementById('answer-feedback-status').innerHTML = '<span>GOAL!</span>';                                                                                                                  // Displays answer feedback text to user.
                document.getElementById('goals-scored-container').style.animation = 'rotate360 .2s ease-in-out 0s 1 normal forwards';                                                                                // This will rotate the Goals Scored number 360 degress (this code was copied from https://stackoverflow.com/questions/14859322/css3-spin-animation)
                document.getElementById('goals-scored-value').innerText = quizEngine.goalsScored;                                                                                                                    // Updates goals scored disaplyed to the user.

            } else { // If answer is incorrect!
                
                quizEngine.trackerItems[quizEngine.questionCounter].classList.add('tracker-item-incorrect');                                                                                                         // Adds 'incorrect' item class to tracker item.
                quizEngine.trackerItems[quizEngine.questionCounter].classList.remove('tracker-item-active');                                                                                                         // Removes 'active' item class to tracker item.
                quizEngine.trackerItems[quizEngine.questionCounter].style.transform = ('rotateY(180deg)');                                                                                                           // This will rotate the individual tracker item 180 degrees (content on w3schools.com was referenced, not copied).
                quizEngine.trackerItems[quizEngine.questionCounter].firstElementChild.style.transform = ('scaleX(-1)');                                                                                              // This will 'flip' the text to display correctly after the rotation.
                quizEngine.trackerItems[quizEngine.questionCounter].style.transition = 'all .3s ease';                                                                                                               // This will ease the rotation onto the screen.
                document.getElementById('choices-container-outer').style.display = 'none';                                                                                                                           // Hides the choices container.
                document.getElementById('answer-feedback-inner').style.animation = 'easeIn .3s ease-in-out 0s 1 normal forwards';                                                                                    // Ease in the display of the inner answer feedback container (holds the image and feedback text).
                document.getElementById('answer-feedback-outer').style.display = 'flex';                                                                                                                             // Displays the answer feedback container which will hold the feedback image.
                document.getElementById('answer-feedback-image-container').innerHTML = `<img src="assets/images/miss_image_${quizEngine.questionCounter}.webp" alt="Female Footballer" id="answer-feedback-image">`; // Displays the 'MISS!' feedback image.
                document.getElementById('answer-feedback-status').innerHTML = '<span>MISS!</span>';                                                                                                                  // Displays answer feedback text to user.
            }
            
            if (quizEngine.questionCounter < 10) { // If questionCounter is less than 10 (11 Questions), i.e, there are questions remaining

                quizEngine.questionCounter++;                                                                              // Increments question counter to drive the relevant array indices being accessed.
                document.getElementById('main-button').innerText = 'Play On!';                                             // Changes the text of the main button to 'Play On!', which will display the next question, choices etc.
                document.getElementById('main-button').addEventListener('click', quizEngine.displayQuiz);                  // Changes the functionality of the main button to the displayQuiz method.  

            } else { // If the last question has been answered (no questions remaining)

                document.getElementById('main-button').innerText = 'View Final Result!';                                   // Changes the text of the main button to 'View Final Result!', which will display the end screen of the quiz.
                document.getElementById('main-button').addEventListener('click', quizEngine.viewFinalResult);              // Changes the functionality of the main button to the displayQuiz method.  

            }
        
        }
    },

    viewFinalResult: function () {
        document.getElementById('bottom-panel-item1').style.animation = 'fadeOut .2s ease-in 0s 1 normal forwards';        // Syntax referenced from W3Schools "animation: name duration timing-function delay iteration-count direction fill-mode play-state;"
        document.getElementById('bottom-panel-item3').style.animation = 'fadeOut .2s ease-in 0s 1 normal forwards';        // Syntax referenced from W3Schools "animation: name duration timing-function delay iteration-count direction fill-mode play-state;"
        document.getElementById('hero-image').style.display = 'none';
        document.getElementById('end-quiz-image').style.display = 'flex';
        document.getElementById('end-quiz-image').style.animation = 'easeIn .6s ease-in 0s 1 normal forwards';
        document.getElementById('tracker-container').classList.add('tracker-container-glow');
        questionDialogueBox.innerHTML = `Congratulations on making it to the final whistle ${quizEngine.userName.value}!`;
        document.getElementById('answer-feedback-outer').style.display = 'none';
        document.getElementById('end-quiz-message').style.display = 'flex';
        document.getElementById('end-quiz-message').style.animation = 'easeIn .3s ease-in-out 0s 1 normal forwards';
        document.getElementById('end-quiz-inner').innerHTML = `<p>You scored <strong>${quizEngine.goalsScored}</strong> out of <strong>11</strong> attempts on goal!<br><br>Learn more about the development of women's football at:<br><br><a href="https://www.fifa.com/womens-football" target="_blank"><strong>fifa.com/womens-football</strong></a></p>`;
        mainButton.innerText = "Rematch?";
    },

    varAssist: function () {

        if (quizEngine.varAssistCounter > 0) { // If there are VAR Assists remaining

            --quizEngine.varAssistCounter;
            document.getElementById(quizEngine.varAssists[quizEngine.questionCounter][0]).style.visibility = 'hidden';
            document.getElementById(quizEngine.varAssists[quizEngine.questionCounter][0]).previousElementSibling.innerText = 'Offside!';
            document.getElementById(quizEngine.varAssists[quizEngine.questionCounter][0]).parentNode.classList.remove('choice-container');
            document.getElementById(quizEngine.varAssists[quizEngine.questionCounter][0]).parentNode.classList.add('offside-container');
            document.getElementById(quizEngine.varAssists[quizEngine.questionCounter][0]).previousElementSibling.classList.add('offside-text');

            document.getElementById(quizEngine.varAssists[quizEngine.questionCounter][1]).style.visibility = 'hidden';
            document.getElementById(quizEngine.varAssists[quizEngine.questionCounter][1]).previousElementSibling.innerText = 'Offside!';
            document.getElementById(quizEngine.varAssists[quizEngine.questionCounter][1]).parentNode.classList.remove('choice-container');
            document.getElementById(quizEngine.varAssists[quizEngine.questionCounter][1]).parentNode.classList.add('offside-container');
            document.getElementById(quizEngine.varAssists[quizEngine.questionCounter][1]).previousElementSibling.classList.add('offside-text');


            document.getElementById('var-assist-remaining').innerHTML = `<span>${quizEngine.varAssistCounter} Remaining</span>`;
            document.getElementById('var-assist-button').disabled = true;
            document.getElementById('var-assist-button').classList.add('disabled');
            document.getElementById('var-assist-button').classList.remove('var-assist-button-style');

        } else { // If there are no VAR Assists remaining

            document.getElementById('var-assist-button').disabled = true;
            document.getElementById('var-assist-remaining').innerHTML = `<span>${quizEngine.varAssistCounter} Remaining</span>`;
            document.getElementById('var-assist-button').disabled = true;
            document.getElementById('var-assist-button').classList.add('disabled');
            document.getElementById('var-assist-button').classList.remove('var-assist-button-style');

        }
        
    },
 
};


// Event listeners assigned outside of quizEngine object to maintain functionality of the quiz
document.getElementById('enter-username').addEventListener("submit", quizEngine.handleUserNameSubmit);
document.getElementById('var-assist-button').addEventListener('click', quizEngine.varAssist);



