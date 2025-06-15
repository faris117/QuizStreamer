import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

interface NavbarProps {
  username: string;
  children?:React.ReactNode
}

export default function Navbar({ username,children }: NavbarProps) {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/" className="brand">QuizStream</Link>
      </div>
      {children }
      <div className="nav-right">
        <Link to="/Profile" className="nav-link"><span className="username">👤 {username}</span></Link>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/create" className="nav-link">Create Quiz</Link>
        <Link to="/join" className="nav-link">Join Quiz</Link>
      </div>
      
    </nav>
  );
}
