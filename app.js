var visitorName = prompt('Hi! Welcome to my page! What is your name?');
console.log('Visitor Name is ' + visitorName);

var visitorWantsToPlay = prompt(visitorName + ', do you want to play a quessing game about me? (Y/N)').toUpperCase();
console.log('Did ' + visitorName + ' want to play the guessing game? ' + visitorWantsToPlay);

if (visitorWantsToPlay === 'N' || visitorWantsToPlay === 'No')
{
  alert('Ok, ' + visitorName + ', whatever :/. We will play it anyway!');
};

var question1 = prompt('My goal is to become a software developer in python (Y/N)').toUpperCase();
console.log('Did ' + visitorName + ' get the answer right? ' + question1);

if (question1 === 'Y' || question1 === 'YES')
{
  alert(visitorName + ', you got it right! See you later!');
}
else
 {
  alert(visitorName + ', you got it wrong :( See you later!');
};
