var visitorName = prompt('Hi! Welcome to my page! What is your name?');
console.log('Visitor Name is ' + visitorName);

var visitorWantsToPlay = prompt(visitorName + ', do you want to play a guessing game about me? (Y/N)').toUpperCase();
console.log('Did ' + visitorName + ' want to play the guessing game? ' + visitorWantsToPlay);

if (visitorWantsToPlay === 'Y' || visitorWantsToPlay === 'YES')
{
  //alert('Ok, ' + visitorName + ', whatever :/. We will play it anyway!');
//};

  var question1 = prompt('My goal is to become a software developer in python (Y/N)').toUpperCase();
  console.log(visitorName + '\s answer to the question was ' + question1);

  if (question1 === 'Y' || question1 === 'YES')
  {
    alert(visitorName + ', you got it right!');
  }
  else
  {
    alert(visitorName + ', you got it wrong :(');
  }
}
alert('See you later, ' + visitorName);
