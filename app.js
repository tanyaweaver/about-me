var visitorName = prompt('Hi! Welcome to my page! What is your name?');

var visitorWantsToPlay = prompt(visitorName + ', do you want to play a quessing game about me? (Y/N)').toUpperCase();

if (visitorWantsToPlay === 'N' || visitorWantsToPlay === 'No')
{
  alert('Ok, ' + visitorName + ', whatever :/. We will play it anyway!');
};

var question1 = prompt('My goal is to become a software developer in python (Y/N)').toUpperCase();

if (question1 === 'Y' || question1 === 'YES')
{
  alert(visitorName + ', you got it right! See you later!');
}
else
{
  alert(visitorName + ', you got it wrong :( See you later!');
};
