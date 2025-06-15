import React, { useState, ChangeEvent } from "react";
import { Link } from "react-router-dom";
import "./ProfilePage.css";
import pic from "../assets/image.png"
import Navbar from "./NavBar";
import QuizList from "./QuizList";
import QuizCard from "./QuizCard";
import { dummyQuizList } from "../Model/QuizFormData";


interface Quiz {
  id: string;
  title: string;
  date: string;
  score: number;
}

interface User {
  username: string;
}

interface ProfilePageProps {
  user: User;
}

interface QuizFormData {
  imgUrl:string
  title: string;
  category: string;
  date: string;
  isPrivate: boolean;
  description: string;
}

export default function ProfilePage({ user }: ProfilePageProps) {
  // dummyData.ts




  const quizDetails: Quiz[] = [
    { id: "1", title: "React Basics", date: "2025-04-10", score: 85 },
    { id: "2", title: "JavaScript Deep Dive", date: "2025-04-05", score: 92 },
    { id: "3", title: "CSS Challenge", date: "2025-04-01", score: 78 },
  ];

  const [profilePic, setProfilePic] = useState<string | null>(null);

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (<>
   
    <div className="outer-container">
    <Navbar username={user.username} />
    <div className="profile-container">
       
      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-pic-container">
            <img
              src={profilePic || pic}
              alt="Profile"
              className="profile-pic"
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="profile-pic-input"
            />
          </div>
          <div className="profile-info">
            <h2>{user.username}</h2>
            <p><strong>Email:</strong> example@email.com</p>
            <p><strong>Member since:</strong> April 2025</p>
          </div>
        </div>

        <hr />

        <section className="profile-section">
          <h3>🎯 Achievements</h3>
          <ul className="achievement-list">
            <li>🏅 Completed 10 Quizzes</li>
            <li>🔥 High Score: 92%</li>
            <li>💡 Learning Streak: 5 days</li>
          </ul>
        </section>

        <section className="profile-section">
          <h3>🧾 Quiz History</h3>
          <ul className="quiz-history">
            {quizDetails.map((quiz) => (
              <li key={quiz.id}>
                <strong>{quiz.title}</strong> — {quiz.date} — Score: {quiz.score}%
              </li>
            ))}
          </ul>
        </section>
        <section className="profile-section">
          <h3>🧾 My Quiz</h3>
          <br/>
          <QuizList>{dummyQuizList.map((quiz, index) => (
            <QuizCard key={index} quiz={quiz} />
          ))}</QuizList>
        </section>
        

        <Link to="/" className="back-link">← Back to Home</Link>
      </div>
    </div>
    </div>
    </>
  );
}
