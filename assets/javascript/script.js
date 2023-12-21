

let quizEngine = {
    userName: null,
    mainButton: document.getElementById("main-button"),


    handleUserNameSubmit: function (event) {
        event.preventDefault();
        quizEngine.userName = document.getElementById('username-input');
        console.log(quizEngine.userName.value);
        document.getElementById('enter-username-container').style.display = 'none';
        document.getElementById('quiz-rules-inner-container').style.display = 'flex';
    }
};

let enterUsernameForm = document.getElementById('enter-username');
enterUsernameForm.addEventListener("submit", quizEngine.handleUserNameSubmit);


/*
let user = document.getElementById('username-input');
*/

