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






## Bugs


## User Stories


## Manual Testing


## Deployment


## Technologies Used


## Credits


## Acknowledgements