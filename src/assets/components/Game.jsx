
import React, { useState } from 'react';
import ScoreBoard from './ScoreBoard';

import pedraImg from "../images/pedra.png";
import papelImg from "../images/papel.png";
import tesouraImg from "../images/tesoura.png";

const options = ['pedra', 'papel', 'tesoura'];

function Game() {
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [ties, setTies] = useState(0);
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState('');

  const getComputerChoice = () => {
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
  };

  const play = (choice) => {
    const computerChoice = getComputerChoice();
    setPlayerChoice(choice);
    setComputerChoice(computerChoice);

    if (choice === computerChoice) {
      setTies(ties + 1);
      setResult('Empate!');
    } else if (
      (choice === 'pedra' && computerChoice === 'tesoura') ||
      (choice === 'papel' && computerChoice === 'pedra') ||
      (choice === 'tesoura' && computerChoice === 'papel')
    ) {
      setPlayerScore(playerScore + 1);
      setResult('Você venceu!');
    } else {
      setComputerScore(computerScore + 1);
      setResult('Você perdeu!');
    }
  };

  const resetGame = () => {
    setPlayerScore(0);
    setComputerScore(0);
    setTies(0);
    setPlayerChoice(null);
    setComputerChoice(null);
    setResult('');
  };

  return (
    <div>
      <h1>Pedra, Papel, Tesoura</h1>
      <ScoreBoard playerScore={playerScore} computerScore={computerScore} ties={ties} />
      <div>
        <button onClick={() => play('pedra')}>
          <img src={pedraImg} alt="Pedra" />
        </button>
        <button onClick={() => play('papel')}>
          <img src={papelImg} alt="Papel" />
        </button>
        <button onClick={() => play('tesoura')}>
          <img src={tesouraImg} alt="Tesoura" />
        </button>
      </div>
      <div>
        <p>Você escolheu: {playerChoice}</p>
        <p>Computador escolheu: {computerChoice}</p>
        <p>{result}</p>
      </div>
      <button onClick={resetGame}>Jogar Novamente</button>
    </div>
  );
}

export default Game;
