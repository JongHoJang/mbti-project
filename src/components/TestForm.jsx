import { useState } from 'react';
import { questions } from '../data/questions';

const TestForm = ({ onSubmit }) => {
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));

  const handleChange = (index, answer) => {
    const newAnswers = [...answers];
    newAnswers[index] = answer;
    setAnswers(newAnswers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(answers);
  };

  return (
    <form onSubmit={handleSubmit} className="w-[500px] flex flex-col gap-20">
      {questions.map((q, index) => (
        <div key={q.id} className="mb-4 w-full h-full bg-white shadow-lg rounded-lg p-6">
          <div className="m-20">
            <p className="font-semibold text-16">
              {q.id}. {q.question}
            </p>

            <div className="flex flex-col">
              {q.options.map((option, i) => (
                <label
                  key={i}
                  className={`flex items-center space-x-2 cursor-pointer w-full h-[40px] border-2 rounded-md mt-10 hover:border-sky ${
                    answers[index] === option ? 'border-sky' : 'border-gray-400'
                  }`}
                >
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={option}
                    checked={answers[index] === option}
                    onChange={() => handleChange(index, option)}
                    className="ml-12 mr-6"
                  />
                  <span className="text-14">{option}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      ))}
      <button type="submit" className="w-full h-[40px] mb-60 bg-sky text-white py-2 rounded hover:bg-blue-600">
        제출하기
      </button>
    </form>
  );
};

export default TestForm;
