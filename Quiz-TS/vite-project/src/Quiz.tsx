import { useState } from 'react';
import { questions } from './question';

export default function Quiz() {
  const [score, setScore] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [isFinal, setIsFinal] = useState<boolean>(false);

  function handleAnswer(option: string) {
    setSelectedOption(option);
    if (option == questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    setTimeout(() => {
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setIsFinal(true);
      }
    }, 1000);
  }

  function handleClick() {
   setScore(0);
   setSelectedOption('');
   setCurrentQuestion(0);
   setIsFinal(false);
  }

  return (
    <div className='quiz-container'>
      {isFinal ? (
        <div className='result'>
          <h2>Quiz Completed</h2>
          <p>
            Your score is : {score} from {questions.length}
          </p>
        </div>
      ) : (
        <div className='question-box'>
          <h3>{questions[currentQuestion].question}</h3>
          <ul>
            {questions[currentQuestion].options.map(
              (option: string, index: number) => (
                <li
                  className={
                    selectedOption == option
                      ? option == questions[currentQuestion].answer
                        ? 'correct'
                        : 'wrong'
                      : ''
                  }
                  onClick={() => handleAnswer(option)}
                  key={index}
                >
                  {option}
                </li>
              )
            )}
          </ul>
        </div>
      )}
      <button onClick={handleClick}>Reset</button>
    </div>
  );
}
