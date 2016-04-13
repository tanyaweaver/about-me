var visitorName = prompt('Hi! Welcome to my page! What is your name?');
console.log('Visitor Name is ' + visitorName);
alert(visitorName + ', let\'s play a guessing game about me!');

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

alert('See you later, ' + visitorName);
