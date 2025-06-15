import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import QuizFormData from "../Model/QuizFormData";
import Navbar from "./NavBar";

interface User {
  username: string;
}

const QuizViewPage: React.FC<User> = ({username}:User) => {
  const location = useLocation();
  const navigate = useNavigate();
  const quiz: QuizFormData = location.state["quiz"];
  console.log()

  if (!quiz) {
    return <div className="text-center text-red-500 mt-10">No quiz data found.</div>;
  }

  return (
    <>    
    <Navbar username={username}/>
   
    <div className="w-screen min-h-screen  flex  flex-row justify-center items-center px-16">
      <div className="max-w-3xl w-full bg-white rounded-xl shadow-lg p-6 space-y-6">
        <h1 className="text-2xl font-bold text-gray-800 text-center">Quiz Details</h1>
        <img  
          src={quiz.imgUrl}
          alt={quiz.title}
          className="w-full h-64 object-cover rounded-lg"
        />
        <div className="space-y-2">
          <p className="text-gray-700" ><strong >Title:</strong> {quiz.title}</p>
          <p className="text-gray-700"><strong >Category:</strong> {quiz.category}</p>
          <p className="text-gray-700"><strong >Date:</strong> {new Date(quiz.date).toDateString()}</p>
          <p>
            <strong className="text-gray-700">Privacy:</strong>{" "}
            <span className={`px-2 py-1 rounded text-white text-sm ${quiz.isPrivate ? "bg-red-500" : "bg-green-500"}`}>
              {quiz.isPrivate ? "Private" : "Public"}
            </span>
          </p>
          <p className="text-gray-700"><strong>Description:</strong></p>
          <p className="text-gray-600 bg-gray-100 p-3 rounded">{quiz.description}</p>
        </div>

        <div className="flex justify-end gap-4">
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 transition"
          >
            Back
          </button>
          <button
            onClick={() => navigate("/edit-quiz", { state: quiz })}
            className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Edit Quiz
          </button>
        </div>
      </div>
    </div>

    </>

  );
};

export default QuizViewPage;
