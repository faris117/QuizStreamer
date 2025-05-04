import React from "react";
import Navbar from "./NavBar";
import QuizDetailForm from "./QuizDetailForm";

interface Props {
  user: { username: string };
}

export default function CreateQuizPage({ user }: Props) {
  return (
    <div className="outer-container">
      <div className="home-container">
        <Navbar username={user.username}/>
        
        <QuizDetailForm/>
    </div>
    </div>
  );
}
