

let quizEngine = {

    /* Object Properties */
    userName: null,
    mainButton: document.getElementById("main-button"),
    questionCounter: 0,

    /* Object Methods */

    /**
     * The handleUserNameSubmit method is triggered when the user enters their username,
     * the default behaviour of the form is prevented and
     * the value of the input is assigned to the userName property in the quizEngine object,
     * to note, the validation here occurs in the HTML element itself using the minlength, maxlength
     * and required attributes
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

