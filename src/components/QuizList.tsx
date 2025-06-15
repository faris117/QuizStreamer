import React from "react";
import QuizCard from "./QuizCard";
import { dummyQuizList } from "../Model/QuizFormData";

interface QuizListProps{
  children:React.ReactNode;
}

const QuizList: React.FC<QuizListProps> = ({children}:QuizListProps) => {
    return (
      <div className="w-full overflow-x-auto " style={{scrollbarWidth:"none"}}>
        <div className="flex gap-6 px-4 py-6 w-max">
          {children}
          
        </div>
      </div>
    );
  };
  
  export default QuizList;
