import React, { useState, FormEvent } from "react";
import "./AuthForm.css";

interface AuthFormProps {
  onLogin: (user: { username: string }) => void;
}

export default function AuthForm({ onLogin }: AuthFormProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");
  //method to handle SignIn
  const handleSignIn=()=>{
   //
  }
   //method to handle SignUp
  const handleSignUp=()=>{
   
    alert("sign up")
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if(isLogin){
      if(username.length>0 && password.length>0){
      handleSignIn()
      }
    }
    else{
      if(username.length>0 && password==password1){
      handleSignUp()}
    }
    //need to change this part
    if (username.trim()) {
      onLogin({ username });
    }
  };

  
  return (
    <div className="auth-container">
      <h2>{isLogin ? "Login" : "Sign Up"} to QuizStream</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {!isLogin&&<input
          type="password"
          placeholder="Comfirm Password"
          value={password1}
          onChange={(e) => setPassword1(e.target.value)}
          required
        />}
        <button type="submit">{isLogin ? "Login" : "Sign Up"} 
         
      </button>
      </form>
      <p onClick={() => setIsLogin(!isLogin)} className="toggle-link">
        {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
      </p>
    </div>
  );
}
