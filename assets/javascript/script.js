

let quizEngine = {

    /* Object Properties */
    userName: null,
    mainButton: document.getElementById("main-button"),


    /* Object Methods */
    handleUserNameSubmit: function (event) {
        event.preventDefault();
        quizEngine.userName = document.getElementById('username-input');
        document.getElementById('top-panel-inner').innerText = `Ok ${quizEngine.userName.value}, let's get the rules out of the way..`;
        console.log(quizEngine.userName.value);
        document.getElementById('main-button').innerText = 'Kick Off!';
        document.getElementById('enter-username-container').style.display = 'none';
        document.getElementById('quiz-rules-inner-container').style.display = 'flex';
    }
};

let enterUsernameForm = document.getElementById('enter-username');
enterUsernameForm.addEventListener("submit", quizEngine.handleUserNameSubmit);


/*
let user = document.getElementById('username-input');
*/

