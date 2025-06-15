import React from "react";
import { Link } from "react-router-dom";
import { dummyQuizList } from "../Model/QuizFormData";

interface QuizDetailTabProps{
    quizId:String
}

export default function QuizDetailTab({quizId}:QuizDetailTabProps){
    const findQuizDetails=(quizId:string)=>{
        console.log(quizId)
        return dummyQuizList[0]
    }
    const quiz=dummyQuizList[0]

    return(<div className="grid grid-cols-4 gap-4  place-content-around">
        <p className="text-gray-700" ><strong >Name:</strong> {quiz.title}</p>
        <p className="text-gray-700" ><strong >Category:</strong> {quiz.category}</p>
        <p className="text-gray-700" ><strong >Total No of Question:</strong> {20}</p>
        <Link to="/view-quiz" state={{quiz:quiz}}>View Quiz</Link>
    </div>)
}