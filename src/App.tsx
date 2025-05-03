import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import AuthForm from "./components/AuthForm";
import HomePage from "./components/HomePage";
import CreateQuizPage from "./components/CreateQuizPage";
import JoinQuizPage from "./components/JoinQuizPage";
import ProfilePage from "./components/ProfilePage";

interface User {
  username: string;
}

export default function App() {
  const [user, setUser] = useState<User | null>(null);

  if (!user) {
    return <AuthForm onLogin={(userData) => setUser(userData)} />;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage user={user} />} />
        <Route path="/create" element={<CreateQuizPage user={user} />} />
        <Route path="/join" element={<JoinQuizPage user={user} />} />
        <Route path="/profile" element={<ProfilePage user={user}/>}/>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}
