import React from "react";
import { Link } from "react-router-dom";
import ActionCard from "./ActionCard";
import "./HomePage.css";
import Navbar from "./NavBar";

interface User {
  username: string;
}

interface HomePageProps {
  user: User;
}

export default function HomePage({ user }: HomePageProps) {
  return (
    <div className="outer-container">
    
    <div className="home-container">
      <Navbar username={user.username}/>
      <h1>Welcome, {user.username} 👋</h1>
      <p className="subtitle">Ready to host or join a quiz?</p>
      <div className="action-grid">
      <Link to="/create">
          <ActionCard
            title="Create a Quiz"
            description="Host your own quiz and invite others to join!"
            buttonText="Create"
          />
        </Link>
        <Link to="/join">
          <ActionCard
            title="Join a Quiz"
            description="Enter a quiz code and start playing!"
            buttonText="Join"
          />
        </Link>
        
      </div>
      
    </div>
    </div>
  );
}
