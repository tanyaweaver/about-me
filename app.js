var visitorName = prompt('Hi! Welcome to my page!\nWhat is your name?');
console.log('Visitor Name is ' + visitorName);
alert('Nice to meet you, ' + visitorName + '!\nLet\'s play a guessing game about me! \n\nPress OK to continue.');

var rightAnswers = 0;
var counter = 0;

var questions = ['I was born and raised in Russia. Y/N?',
'I studied Industrial Engineering in Russia. Y/N?',
'I majored in Medical Lab Science at the University of Washington. Y/N?',
'My goal is to become a software developer in python. Y/N?',
'I love hiking and backpacking. Y/N?'];

var answersCorrect = ['You got it right! My hometown, Chelyabinsk, \
is the place where a meteor fell in February of 2013! \
It entered the atmosphere with a speed of 42,900 mph! \n\nPress OK to continue.',
'You got it right! \n\nPress OK to continue.',
'You got it right! I can diagnose Malaria or leukemia by looking at a blood smear! \n\nPress OK to continue.',
'\You got it right! \n\nPress OK to continue.',
'You got it right! I am getting ready to clime Mt.Rainier this July! \n\nPress OK to continue.'];

var answersWrong = [', you got it wrong :( \n\nPress OK to continue.',
', you got it wrong :( \n\nPress OK to continue.',
', you got it wrong :( \n\nPress OK to continue.',
', you got it wrong :( \n\nPress OK to continue.',
', you got it wrong :( \n\nPress OK to continue.'];

//5 Y/N questions;
var question = function(prompt_, correctAnswer, wrongAnswer) {
  'use strict';

  counter++;

  var wrongAnswerFormat = true; //checking for input format - must be 'Y/N'

  while(wrongAnswerFormat){
    var questions = prompt(prompt_).toUpperCase();
    console.log(visitorName + '\'s answer to the question: ' + questions);

    if(questions === 'Y' || questions === 'YES'){
      alert(correctAnswer);
      rightAnswers++;
      wrongAnswerFormat = false;
    }else if(questions === 'N' || questions === 'NO'){
      alert(visitorName + wrongAnswer);
      wrongAnswerFormat = false;
    }else{
      alert('Please enter Y/N');
      wrongAnswerFormat = true;
    }
  };
};

for (var i = 0; i < questions.length; i++) {
  question(questions[i], answersCorrect[i], answersWrong[i]);
}

//Question#6 - guess a number, 4 attempts, check for isNaN;
var questionSix = function(){
  'use strict';
  alert(visitorName + ', can you guess how many letters there are \
  in the Russian alphabet? Hint: it\'s a number between 25 and 35. Good luck! \n\nPress OK to continue.');
  var attempt = 1;

  while(attempt < 5){
    console.log('Question 6. Attempt number ' + attempt);

    var question6 = parseInt(prompt('You have ' + (5 - attempt) + ' attempts left. Please enter a number.'));
    console.log(visitorName + '\'s response: ' + question6);

    if(isNaN(question6)){
      alert('Oops, must be a number. \n\nPress OK to continue.');
      continue; //making sure the input is a number
    }
    if(question6 === 33){
      alert('Yes! You got it right! Russian alphabet has 33 letters. \n\nPress OK to continue.');
      rightAnswers++;
      break;
    }else if(question6 > 33){
      alert('Your guess is too high. \n\nPress OK to continue.');
      attempt++;
    }else{
      alert('Your guess is too low. \n\nPress OK to continue.');
      attempt++ ;
    }
  }
  if(attempt === 5 && question6 !== 33){
    alert('Sorry, ' + visitorName + ', you have no more attempts left. \
  \nRussian alphabet has 33 letters! \n\nPress OK to continue');
  }
};
questionSix();

//Question#7 - guess a value from an array, 6 attempts, give array values at the end;
var questionSeven = function() {
  'use strict';

  var favoriteFruits = ['apple', 'banana', 'mango', 'orange', 'kiwi'];
  alert(visitorName + ', can you guess what my favorite fruit is? \
  You have 6 attempts. Good luck! \n\nPress OK to continue');
  var attemptFruits = 1;

  while(attemptFruits < 7){
    console.log('Question 7. Attempt number ' + attemptFruits);
    var question7 = prompt('You have ' + (7 - attemptFruits) + ' attempts left. Enter a fruit.').toLowerCase();
    console.log(visitorName + '\'s response: ' + question7);
    var gotRightAnswer = false; //indicates whether the user got a right answer
    for (var i = 0; i < favoriteFruits.length; i++){
      if(question7 === favoriteFruits[i]){
        alert('Yes! I love ' + favoriteFruits[i] + 's! They are delicious! My favorite fruits are ' + favoriteFruits.toString() + '. \n\nPress OK to continue');
        rightAnswers++;
        gotRightAnswer = true;
        break; //break from the for - loop
      }
    }
    if(gotRightAnswer){
      break; //break from the while - loop if got the right answer
    }else if(attemptFruits < 7){
      alert('Nope! \n\nPress OK to continue');
      attemptFruits++;
    }
    if(attemptFruits === 7){
      alert('Sorry, you have no more attempts left. My favorite fruits are ' + favoriteFruits.toString() + '.');
    }
  }
};
questionSeven();
alert('I hope you enjoyed the game. You got ' + rightAnswers + ' out of 7 questions right. ' + visitorName + ', thank you for visiting my page! \n\nPress OK to continue.');
console.log(visitorName + ' got ' + rightAnswers + ' out of ' + counter + ' questions right.');
