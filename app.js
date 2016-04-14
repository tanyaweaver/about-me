var visitorName = prompt('Hi! Welcome to my page! What is your name?');
console.log('Visitor Name is ' + visitorName);
alert('Nice to meet you, ' + visitorName + '! Let\'s play a guessing game about me!');

var question1 = prompt('My goal is to become a software developer in python (Y/N)').toUpperCase();
console.log(visitorName + '\'s answer to the question1 was ' + question1);

if (question1 === 'Y' || question1 === 'YES')
{
  alert(visitorName + ', you got it right!');
}
else
{
  alert(visitorName + ', you got it wrong :(');
}

var question2 = prompt('I am from Russia (Y/N)').toUpperCase();
console.log(visitorName + '\'s answer to the question2 was ' + question2);

if (question2 === 'Y' || question2 === 'YES')
{
  alert(visitorName + ', you got it right!');
}
else
{
  alert(visitorName + ', you got it wrong :(');
}

var question3 = prompt('I moved to the US in 2006 (Y/N)').toUpperCase();
console.log(visitorName + '\'s answer to the question3 was ' + question3);

if (question3 === 'Y' || question3 === 'YES')
{
  alert(visitorName + ', you got it right!');
}
else
{
  alert(visitorName + ', you got it wrong :(');
}

var question4 = prompt('I studied Industrial Engineering in Russia (Y/N)').toUpperCase();
console.log(visitorName + '\'s answer to the question4 was ' + question4);

if (question4 === 'Y' || question4 === 'YES')
{
  alert(visitorName + ', you got it right!');
}
else
{
  alert(visitorName + ', you got it wrong :(');
}

var question5 = prompt('I majored in Medical Lab Science (Y/N)').toUpperCase();
console.log(visitorName + '\'s answer to the question5 was ' + question5);

if (question5 === 'Y' || question5 === 'YES')
{
  alert(visitorName + ', you got it right!');
}
else
{
  alert(visitorName + ', you got it wrong :(');
}

var question6 = parseInt(prompt(visitorName + ', can you guess how many letters there are \
in the Russian alphabet? Choose between 25 and 35. You have 4 attempts. Good luck!'));
var attempt = 1;

while(attempt < 5){
  if(question6 === 33){
    console.log(visitorName + '\'s response to question6, attempt number' + attempt + ', was: ' + question6);
    alert('Yes! You got it right, ' + visitorName + ', Russian alphabet has 33 letters. \
 Press OK to continue.');
    attempt = 5;
  }else if(question6 > 33){
    console.log(visitorName + '\'s response for question6, ' + attempt + ' was: ' + question6);
    question6 = prompt('Oops, ' + visitorName + ', you guessed to high.\
 You have ' + (4 - attempt) + ' attempts left. Press OK to continue.');
    attempt++;
  }else{
    console.log(visitorName + '\'s response for question6, ' + attempt + ' was: ' + question6);
    if(attempt < 4){
      question6 = prompt('Oops, ' + visitorName + ', you guessed to low.\
 You have ' + (4 - attempt) + ' attempts left. Try again.');
      attempt++ ;
    }else{
      alert('Nope! Sorry, ' + visitorName + ', you have no more attempts. Russian alphabet has 33 letters!\
 Press OK to continue');
      attempt++ ;
    }
  }
}

// if(attempt === 5){
//   alert('Russian alphabet has 33 letters! Press OK to continue');
// }
alert('See you later, ' + visitorName);
