const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb')
      return userInput;
    else
      return console.log('Invalid input');
  }
  
  const getComputerChoice = () => {
    const randomNum = Math.floor(Math.random() * 3);
    switch (randomNum){
      case 0: 
        return 'paper';
      case 1:
        return 'rock';
      case 2:
        return 'scissors';
      default:
        return 'Invalid choice';
    }
  }
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice)
      return 'it\'s a tie';
    if (userChoice === 'bomb')
      return 'it\'s a secreat cheat code: you won!';
    if (userChoice === 'rock') {
      if (computerChoice === 'paper')
        return 'coputer won!';
      else if (computerChoice === 'scissors')
        return 'you won!';
    }
    else if (userChoice === 'paper') {
      if (computerChoice === 'scissors')
        return 'computer won!';
      else if (computerChoice === 'rock')
        return 'you won!';
    }
    else if (userChoice === 'scissors') {
      if (computerChoice === 'rock')
        return 'computer won!';
      else if (computerChoice === 'paper')
        return 'you won!';
    }
  }
  
  const playGame = () => {
    const userChoice = getUserChoice('bomb'); // or any other valid input
    const computerChoice = getComputerChoice();
    console.log('You chose: ' + userChoice);
    console.log('The computer chose: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
  };
  
  playGame();