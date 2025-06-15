import React from "react";
import Navbar from "./NavBar";
import ActionCard from "./ActionCard";

interface Props {
  user: { username: string };
}

export default function JoinQuizPage({ user }: Props) {
  return (
    <div className="w-screen min-h-screen flex flex-row justify-center item-center  px-8">
        <Navbar username={user.username}/>
        <div className="flex flex-row justify-center px-8">
          

        </div>
      </div>
  );
}
