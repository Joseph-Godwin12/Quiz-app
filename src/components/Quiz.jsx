import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { quizModules } from "../data";

export default function Quiz() {
  const { profession } = useParams();
  const module = quizModules[profession];

  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState({});

  useEffect(() => {
    if (module) {
      const shuffled = [...module.questions].sort(() => 0.5 - Math.random());
      setSelectedQuestions(shuffled.slice(0, 10));
    }
  }, [module]);

  const question = selectedQuestions[currentQuestion];
  const selected = selectedAnswers[currentQuestion];

  const handleSelect = (option) => {
    if (selected !== undefined) return; // Prevent re-answering

    const correct = question.answer;
    setSelectedAnswers((prev) => ({ ...prev, [currentQuestion]: option }));
    if (option === correct) setScore((prev) => prev + 1);
  };

  const handleNext = () => {
    if (currentQuestion + 1 < selectedQuestions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) setCurrentQuestion(currentQuestion - 1);
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResults(false);
    setSelectedAnswers({});
    const shuffled = [...module.questions].sort(() => 0.5 - Math.random());
    setSelectedQuestions(shuffled.slice(0, 10));
  };

  if (!module || selectedQuestions.length === 0) return null;

  if (showResults) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 to-blue-500 text-center py-8">
       <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
        <h2 className="text-3xl font-semibold text-indigo-500 mb-4">🎉 Quiz Completed!</h2>
        <p className="text-xl mb-6">
          Your Score: <span className="font-bold">{score}</span> / {selectedQuestions.length}
        </p>
        <button
          onClick={handleRestart}
          className="bg-indigo-500 text-white px-8 py-3 rounded-lg hover:bg-gradient-to-r from-indigo-500 to-blue-500 transition-all"
        >
          Try Again
        </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 to-blue-500 p-6">
      <div className="max-w-xl w-full bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-center text-indigo-800 mb-6">
          {module.title}
        </h2>
        <div className="text-sm text-gray-500 mb-2">
          Question {currentQuestion + 1} of {selectedQuestions.length}
        </div>
        <p className="text-xl text-gray-700 mb-4">{question.question}</p>

        <div className="grid gap-3 mb-6">
          {question.options.map((opt, idx) => {
            const isCorrect = opt === question.answer;
            const isUserChoice = selected === opt;

            let btnStyle = "px-4 py-2 rounded-lg text-left border transition-all";
            if (selected !== undefined) {
              if (isUserChoice && isCorrect) {
                btnStyle += " bg-green-100 border-green-600 text-green-800 font-semibold";
              } else if (isUserChoice && !isCorrect) {
                btnStyle += " bg-red-100 border-red-600 text-red-800 font-semibold";
              } else if (isCorrect) {
                btnStyle += " bg-green-50 border-green-500 text-green-700";
              } else {
                btnStyle += " bg-white border-gray-300 text-gray-700";
              }
            } else {
              btnStyle += " bg-white text-gray-800 hover:bg-indigo-100 border-gray-300";
            }

            return (
              <button
                key={idx}
                onClick={() => handleSelect(opt)}
                className={btnStyle}
                disabled={selected !== undefined}
              >
                {opt}
              </button>
            );
          })}
        </div>

        <div className="flex justify-between">
          <button
            onClick={handlePrev}
            disabled={currentQuestion === 0}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg disabled:opacity-50"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            disabled={selected === undefined}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 disabled:opacity-50"
          >
            {currentQuestion + 1 === selectedQuestions.length ? "Finish" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}
