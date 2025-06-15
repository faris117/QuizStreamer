import React from "react";
import { Link } from "react-router-dom";
import ActionCard from "./ActionCard";
import "./HomePage.css";
import Navbar from "./NavBar";
import QuizList from "./QuizList";
import { dummyQuizList } from "../Model/QuizFormData";
import QuizCard from "./QuizCard";

interface User {
  username: string;
}

interface HomePageProps {
  user: User;
}

export default function HomePage({ user }: HomePageProps) {

  return (
    <div className="w-screen min-h-screen flex flex-row justify-center items-center ">
      <Navbar username={user.username}/>
      <div className="flex flex-col justify-center min-h-screen">
      <div className="flex flex-row justify-center item-center pt-32 pb-8">
            <h1 className="text-white-900">Welcome, {user.username} 👋</h1>
            <p className="text-white-900">Ready to host or join a quiz?</p>
            </div>
         <div className="flex flex-row justify-center item-center h-full " >
           
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-4xl px-4 ">
                <Link className="w-full"
                 to="/create">
                  <ActionCard
                  title="Create a Quiz"
                  description="Host your own quiz and invite others to join!"
                  buttonText="Create"
                  />
                </Link>
                <Link  className="w-full"
                to="/join">
                  <ActionCard
                  title="Join a Quiz"
                  description="Enter a quiz code and start playing!"
                  buttonText="Join"
                  />
               </Link>
              </div>
        </div>
        <div className=" h-full grid grid-cols-1 overflow-y-scroll overflow-hidden">
        <div className="w-full grid grid-cols-1 px-16">
            <QuizList>
              {dummyQuizList.map((quiz, index) => (
                <QuizCard key={index} quiz={quiz} />
              ))}
            </QuizList>
        </div>
        <div className="w-full grid grid-cols-1 px-16">
            <QuizList>
              {dummyQuizList.map((quiz, index) => (
                <QuizCard key={index} quiz={quiz} />
              ))}
            </QuizList>
        </div>
        <div className="w-full grid grid-cols-1 px-16">
            <QuizList>
              {dummyQuizList.map((quiz, index) => (
                <QuizCard key={index} quiz={quiz} />
              ))}
            </QuizList>
        </div>
        </div>
      </div>
      
    </div>
 
  );
}
