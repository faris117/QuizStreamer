import React from "react";
import  QuizFormData from "../Model/QuizFormData";
import { Link } from "react-router-dom";


interface QuizCardProps {
  quiz: QuizFormData;
}
const QuizCard: React.FC<QuizCardProps> = ({ quiz }) => {
    return (
      <div className="min-w-[280px] max-w-sm bg-white rounded-xl shadow hover:shadow-lg transition duration-300">
        <img
          src={quiz.imgUrl}
          alt={quiz.title}
          className="w-full h-44 object-cover rounded-t-xl"
        />
        <div className="p-4">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold text-gray-800">{quiz.title}</h2>
            <span
              className={`text-xs font-medium px-2 py-1 rounded-full ${
                quiz.isPrivate ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600"
              }`}
            >
              {quiz.isPrivate ? "Private" : "Public"}
            </span>
          </div>
          <p className="text-sm text-gray-600 mb-1">📂 {quiz.category}</p>
          <p className="text-sm text-gray-500 mb-2">📅 {new Date(quiz.date).toDateString()}</p>
          <p className="text-gray-700 text-sm">{quiz.description}</p>
          <Link to="/view-quiz" state={{quiz:quiz}}>View Quiz</Link>
        </div>
      </div>
    );
  };
  

export default QuizCard;
