var visitorName = prompt('Hi! Welcome to my page!\nWhat is your name?');
console.log('Visitor Name is ' + visitorName);
alert('Nice to meet you, ' + visitorName + '!\nLet\'s play a guessing game about me! \n\nPress OK to continue.');

var rightAnswers = 0;

//5 Y/N questions;
var question1 = prompt('I was born and raised in Russia. Y/N?').toUpperCase();
console.log(visitorName + '\'s answer to the question1: ' + question1);

if (question1[0] === 'Y')
{
  alert('You got it right! My hometown, Chelyabinsk, \
is the place where a meteor fell in February of 2013! \
It entered the atmosphere with a speed of 42,900 mph! \n\nPress OK to continue.');
  rightAnswers++;
}
else
{
  alert(visitorName + ', you got it wrong :( \n\nPress OK to continue.');
}

var question2 = prompt('I studied Industrial Engineering in Russia. Y/N?').toUpperCase();
console.log(visitorName + '\'s answer to the question2: ' + question2);

if (question2[0] === 'Y')
{
  alert('You got it right! \n\nPress OK to continue.');
  rightAnswers++;
}
else
{
  alert(visitorName + ', you got it wrong :( \n\nPress OK to continue.');
}

var question3 = prompt('I majored in Medical Lab Science at the University of Washington. Y/N?').toUpperCase();
console.log(visitorName + '\'s answer to the question3: ' + question3);

if (question3[0] === 'Y')
{
  alert('You got it right! I can diagnose Malaria or leukemia by looking at a blood smear! \n\nPress OK to continue.');
  rightAnswers++;
}
else
{
  alert(visitorName + ', you got it wrong :( \n\nPress OK to continue.');
}

var question4 = prompt('My goal is to become a software developer in python. Y/N?').toUpperCase();
console.log(visitorName + '\'s answer to the question4: ' + question4);

if (question4[0] === 'Y')
{
  alert('You got it right! \n\nPress OK to continue.');
  rightAnswers++;
}else{
  alert(visitorName + ', you got it wrong :( \n\nPress OK to continue.');
}

var question5 = prompt('I love hiking and backpacking. Y/N?').toUpperCase();
console.log(visitorName + '\'s answer to the question5: ' + question5);

if (question5[0] === 'Y')
{
  alert('You got it right! I am getting ready to clime Mt.Rainier this July! \n\nPress OK to continue.');
  rightAnswers++;
}
else
{
  alert(visitorName + ', you got it wrong :( \n\nPress OK to continue.');
}

//Question#6 - guess a number, 4 attempts, check for isNaN;
alert(visitorName + ', can you guess how many letters there are \
in the Russian alphabet? Hint: it\'s a number between 25 and 35. Good luck! \n\nPress OK to continue.');
var attempt = 1;

while(attempt < 5){
  console.log('Question 6. Attempt number ' + attempt);
  var question6 = parseInt(prompt('You have ' + (5 - attempt) + ' attempts left. Please enter a number.'));
  console.log(visitorName + '\'s response: ' + question6);
  if(isNaN(question6)){
    alert('Oops, must be a number. \n\nPress OK to continue.');
    continue;
  }
  if(question6 === 33){
    alert('Yes! You got it right! Russian alphabet has 33 letters. \n\nPress OK to continue.');
    rightAnswers++;
    break;
  }else if(question6 > 33){
    alert('Your guess is too high. \n\nPress OK to continue.');
    attempt++;
  }else if(question6 < 33){
    alert('Your guess is too low. \n\nPress OK to continue.');
    attempt++ ;
  }
}

if(attempt === 5 && question6 !== 33){
  alert('Sorry, ' + visitorName + ', you have no more attempts left. \
\nRussian alphabet has 33 letters! \n\nPress OK to continue');
}

//Question#7 - guess a value from an array, 6 attempts, give array values at the end;
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

alert('I hope you enjoyed the game. You got ' + rightAnswers + ' out of 7 questions right. ' + visitorName + ', thank you for visiting my page! \n\nPress OK to continue.');
console.log(visitorName + ' got ' + rightAnswers + ' out of 7 questions right.');
