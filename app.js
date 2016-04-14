var visitorName = prompt('Hi! Welcome to my page!\nWhat is your name?');
console.log('Visitor Name is ' + visitorName);
alert('Nice to meet you, ' + visitorName + '!\nLet\'s play a guessing game about me!');

var rightAnswers = 0;

var question1 = prompt('My goal is to become a software developer in python (Y/N)').toUpperCase();
console.log(visitorName + '\'s answer to the question1 was ' + question1);

if (question1[0] === 'Y')
{
  alert(visitorName + ', you got it right!');
  rightAnswers++;
}else{
  alert(visitorName + ', you got it wrong :(');
}

var question2 = prompt('I am from Russia (Y/N)').toUpperCase();
console.log(visitorName + '\'s answer to the question2 was ' + question2);

if (question2[0] === 'Y')
{
  alert(visitorName + ', you got it right!');
  rightAnswers++;
}
else
{
  alert(visitorName + ', you got it wrong :(');
}

var question3 = prompt('I love gardening (Y/N)').toUpperCase();
console.log(visitorName + '\'s answer to the question3 was ' + question3);

if (question3[0] === 'Y')
{
  alert(visitorName + ', you got it right!');
  rightAnswers++;
}
else
{
  alert(visitorName + ', you got it wrong :(');
}

var question4 = prompt('I studied Industrial Engineering in Russia (Y/N)').toUpperCase();
console.log(visitorName + '\'s answer to the question4 was ' + question4);

if (question4[0] === 'Y')
{
  alert(visitorName + ', you got it right!');
  rightAnswers++;
}
else
{
  alert(visitorName + ', you got it wrong :(');
}

var question5 = prompt('I majored in Medical Lab Science at the University of Washington(Y/N)').toUpperCase();
console.log(visitorName + '\'s answer to the question5 was ' + question5);

if (question5[0] === 'Y')
{
  alert(visitorName + ', you got it right!');
  rightAnswers++;
}
else
{
  alert(visitorName + ', you got it wrong :(');
}

alert(visitorName + ', can you guess how many letters there are \
in the Russian alphabet? Hint: it\'s a number between 25 and 35. Good luck! \
Press OK to continue');
var attempt = 1;

while(attempt < 5){
  console.log('Question 6. Attempt number ' + attempt);
  var question6 = parseInt(prompt(visitorName + ', you have ' + (5 - attempt) + ' attempts left. Please enter a number.'));
  if(question6 === 33 && !isNaN(question6)){
    alert('Yes! You got it right, ' + visitorName + ', Russian alphabet has 33 letters. \n\nPress OK to continue.');
    attempt = 5;
    rightAnswers++;
  }else if(question6 > 33 && !isNaN(question6)){
    alert('Your guess is too high. Press OK to continue.');
    attempt++;
  }else if(question6 < 33 && !isNaN(question6)){
    alert('Your guess is too low. Press OK to continue.');
    attempt++ ;
  }
  console.log(visitorName + '\'s response: ' + question6);
  if(isNaN(question6)){
    alert('Oops, must be a number. Press OK to continue.');
  }
}
if(attempt === 5 && question6 !== 33){
  alert('Sorry, ' + visitorName + ', you have no more attempts left. \
\nRussian alphabet has 33 letters! \n\nPress OK to continue');
}
alert('I hope you enjoyed the game. You got ' + rightAnswers + ' out of 7 questions right. ' + visitorName + ', thank you for visiting my page! \n\nPress OK to continue.');
console.log(visitorName + ' got ' + rightAnswers + ' out of 7 questions right.');
