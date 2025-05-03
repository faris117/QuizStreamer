import React from "react";
import Navbar from "./NavBar";

interface Props {
  user: { username: string };
}

export default function JoinQuizPage({ user }: Props) {
  return (
    <div className="outer-container">
        <div className="home-container">
          <Navbar username={user.username}/>
          <h2> Join Quiz Page</h2>
         
        </div>
        </div>
  );
}
