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
      <h2>Create Quiz Page</h2>
      <p>Welcome, {user.username}! Here you can create your quiz.</p>
      <QuizDetailForm/>
    </div>
    </div>
  );
}
