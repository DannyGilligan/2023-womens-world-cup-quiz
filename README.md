# FIFA 2023 Women's World Cup Quiz



<!-- Introduction Section is below, with a 'Back to Top' anchor link, the link will be shown at the bottom of every section -->
## Introduction
The FIFA 2023 Women's World Cup Quiz is the 2nd project deliverable as part of the Code Insititute Diploma in Full Stack Software Development. It is a multiple choice quiz built using Javascript, HTML and CSS.
The topic of the quiz is general knowledge relating to the FIFA 2023 Women's World Cup. The quiz aims to be an entertaining and informative way of increasing exposure and knowledge of women's football, with the intention of helping to increase popularity.
It is aimed at anyone who enjoys quizzes and may have an interest in sports with the hopes of providing this audience with a fun, interactive Javascript product.

## Features




<!-- The Wireframces section is shown below, this will be disaplyed in a collapsible format, with screenshots -->  
## Wireframes  

Below is a series of wireframes depicting the layout of the screens that will be displayed to the user in different contexts throughout the quiz.  
  
<details>  
  <summary><b> Enter Username</b></summary>  
<br>
<!-- Wireframe 1 1 begins -->
The initial landing page will display the 'FIFA Women's World Cup Quiz 2023' logo, along with an input field to enter a username, and an 'enter' button. 

Validation will occur here, if the username does not meet the requirements a dialogue box will be displayed. If the input is accepted, the value will be assigned to a 'userName' variable.

The 'Enter' button will run the validation function and display the 'Quiz Rules' screen.

To note, the quiz will exist on a single page of HTML, with different sections being displayed to, or hidden from, the user depending on the context.

![Wireframe_01](assets/documentation/wireframe01_enter_username.webp)
</details>
<!-- Wireframe 1 ends -->
<!-- Wireframe 2 begins -->
<details>
  <summary> <b>Quiz Rules</b></summary>
<br>
Once the username is accepted, the rules of the quiz will then be displayed using the displayRules() function.

In summary, there will be 11 questions related to the 2023 Women's World Cup, with 4 choices per question along with a VAR Assist feature that will remove 2 incorrect answers. The VAR Assist name comes from the 'Video Assistant Referee' which is a controversial technology used in football to assist in refereeing decisions (hopefully it will only do good things in this quiz). The user will be granted 3 VAR Assists at the beginning, and can use a max of 1 per question until they run out. (To disambiguate completely, there is no relationship to the VAR variable declaration keyword!)

When a question is answered correctly, the user will score a goal, otherwise the attempt will be considered a miss.

The button on this screen will have an inner text of 'Kick Off!' and will call a function to display the quiz content.

![Wireframe Quiz Rules](assets/documentation/wireframe02_display_rules.webp)
</details>
<!-- Wireframe 2 ends -->
<!-- Wireframe 3 begins -->
<details>
  <summary> <b>Display Quiz</b></summary>
<br>
After the user kicks off the quiz, the questions and choices will be displayed using the displayQuiz() function. 

The inner HTML of the question and choice containers will be driven by the content of an object data structure existing in the javascript file, the object will be assigned to a variable named quizEngine. A 'Questions' property will have associated string values that will be accessed using dot notation and their index numbers, this will also be the case for the 'Choices' property, except the Choices property will have a nested array of 4 string values at each index. A questionCounter variable will be created and incremented after each question to drive the content displayed to the user by iterating over the Question and Choices properties accordingly.

A radio input will be used to allow the user to submit their choice, when checking the answer the radio inputs will be assigned as a HTML collection to a userChoice variable, then an IF conditional statement will determine which input is checked, the checked input will be compared against the correct answer (which will be stored as a string value in an 'Answers' property of the quizEngine). The 'Goals Scored' variable will then be incremented by 1 if the answer is correct.

The main button on this screen will have an inner text of 'Shoot!' and will be assigned the checkAnswer() function. 

A VAR Assist button will also be displayed to the user along with the remaining assists available.

In the bottom right hand corner, a score tracker will be visible showing the user's current score.

Just below the logo, a progress tracker will be located that gives the user feedback on the current active question and the questions they answered correctly or incorrectly. The active question will be styled with a prominent glowing effect to aid accessibility.

![Display Quiz](assets/documentation/wireframe03_display_quiz.webp)
</details>
<!-- Wireframe 3 ends -->
<!-- Wireframe 4 begins -->
<details>
  <summary> <b>VAR Assist Feature</b></summary>
<br>
The user can decide to trigger the varAssist() feature in order to remove 2 wrong answers from the screen. A 'varAssists' property will be included in the quizEngine object, this property will have 2 choice IDs held as string values in an array at each index that correspond to the wrong answers for each question, these choice IDs will be used to access the related HTML elements and set the display attribute to 'none'. The 'VAR Assists remaining' counter will be decremented upon use until it reaches 0, at this point the VAR Assist button will be disabled for the remainder of the quiz.

Once a choice has been made by the user. the 'Shoot!' button will then trigger the checkAnswer() function.

![VAR Assist Feature](assets/documentation/wireframe04_var_assist_feature.webp)
</details>
<!-- Wireframe 4 ends -->
<!-- Wireframe 5 begins -->
<details>
  <summary> <b>Check Answer</b></summary>
<br>
Once the user has decided on their choice and selected the corresponding radio input, they can then trigger the checkAnswer() function by clicking on the 'Shoot!' button. This will then assign the radio inputs to a HTML collection by utilising the getElementsByClass method (the radio inputs will have a class attribute of 'choices'). 

This HTML collection will then be iterated over using a 'for loop' to determine which input has been checked (using an IF conditional statement). Once the checked input has been identified, this will be stored in a variable named userChoice, which will be compared against the corresponding correct answer for the question held in the 'Answers' property of the quizEngine object (this will be accessed using dot notation and assigned to a variable named correctAnswer).

If the userChoice and correctAnswer variables are equal (===), then feedback will be presented to the user with a 'GOAL!' message and a picture being displayed, the HTML element of the corresponding tracker item will be assigned a class of .correct and the colour will be changed to green (the .active class will be removed). The 'Goals Scored' counter will also be incremented by 1.

If the userChoice and correctAnswer variables are not equal, the feedback will be presented to the user with a 'MISS!' message and a picture being displayed, the HTML element of the corresponding tracker item will be assigned a class of .incorrect and the colour will be changed to red  (the .active class will be removed). The 'Goals Scored' counter will not be incremented. 

The inner HTML of the main button will change to 'Play On!' which when pressed will invoke a nextQuestion() function that will increment the questionCounter variable and display the content of the next question and set of choices to the user.

![Check Answer](assets/documentation/wireframe05_check_answer.webp)
</details>
<!-- Wireframe 5 ends -->
<!-- Wireframe 6 begins -->
<details>
  <summary> <b>Display Next Question</b></summary>
<br>
The nextQuestion() function will continue the process of iterating over the quizEngine object using the value of the questionCounter variable to access the corresponding index of the questions and choices to display until the final question has been reached. 

This function will also change the HTML class attribute of the current question to .active in order to give the glowing effect on the tracker panel.

When the last question has been answered, the nextQuestion() function will change the inner HTML of the main button to 'View Result!' instead of 'Play On!' and assign to it a function of displayResult().

![Display Next Question 1](assets/documentation/wireframe06_display_next_question(1).webp)
![Display Next Question 2](assets/documentation/wireframe06_display_next_question(2).webp)
</details>
<!-- Wireframe 6 ends -->
<!-- Wireframe 7 begins -->
<details>
  <summary> <b>Display Result</b></summary>
<br>
Once the last question has been answered, the user can click on the 'View Result!' button. This will display feedback to the user on the total goals scored out of the 11 attempts along with a text message congratulating the user on completing the quiz.

An image will also be displayed to the user.

The main button's inner HTML will be changed to 'Rematch!' and have a rematch() function assigned to it.

This screen is the end of the current quiz session.

![Display Result](assets/documentation/wireframe07_display_result.webp)
</details>
<!-- Wireframe 7 ends -->
<!-- Wireframe 8 begins -->
<details>
  <summary> <b>Rematch</b></summary>
<br>
The end screen prompts the user with a 'Rematch!' that will guide them back to the start screen.

This will effectively reset the quiz.

![Rematch](assets/documentation/wireframe08_rematch.webp)
</details>
<!-- Wireframe 8 ends -->
<!-- Wireframe 9 begins -->
<details>
  <summary> <b>Whiteboard Wireframe</b></summary>
<br>
A little bonus for the whiteboard lovers :cupid:
<br>
<br>

![Whiteboard Wireframe](assets/documentation/wireframe09_whiteboard.webp)
</details>
<!-- Wireframe 9 ends -->


## Bugs


## User Stories


## Manual Testing


<!-- The Deployment section is shown below, this will be disaplyed in a collapsible format, with each item shown in tabular form -->
## Deployment

The site was deployed as a Minimum Viable Product using Github pages. 

<details>
    <summary><b>The steps for deployment are outlined here</b></summary>
<br>
<table>
<tr><th><b>Step Description</b></th><th><b>Status</b></th></tr>
<tr><td>In the Github repository, navigate to the 'Settings' tab</td><td rowspan="2">:heavy_check_mark:</td></tr>
<tr><td>

![Deployment Step 1](assets/documentation/deployment_01.webp)
</td></tr>
<tr><td>On the menu, navigate to 'Pages'</td><td rowspan="2">:heavy_check_mark:</td></tr>
<tr><td>

![Deployment Step 2](assets/documentation/deployment_02.webp)
</td></tr>
<tr><td>From the 'Branch' dropdown menu, select 'main'</td><td rowspan="2">:heavy_check_mark:</td></tr>
<tr><td>

![Deployment Step 3](assets/documentation/deployment_03.webp)
</td></tr>
<tr><td>Click the save button</td><td rowspan="2">:heavy_check_mark:</td></tr>
<tr><td>

![Deployment Step 4](assets/documentation/deployment_04.webp)
</td></tr>
<tr><td>The deployment process begins</td><td rowspan="2">:heavy_check_mark:</td></tr>
<tr><td>

![Deployment Step 5](assets/documentation/deployment_05.webp)
</td></tr>
<tr><td>Once the site deploys successfully, a confirmation is displayed and a live link generated</td><td rowspan="2">:heavy_check_mark:</td></tr>
<tr><td>

![Deployment Step 6](assets/documentation/deployment_06.webp)
</td></tr>
</table>
</details>

The live link to this site is https://dannygilligan.github.io/2023-womens-world-cup-quiz/


## Technologies Used


## Credits


## Acknowledgements