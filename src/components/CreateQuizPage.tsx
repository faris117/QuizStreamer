import React from "react";

interface Props {
  user: { username: string };
}

export default function CreateQuizPage({ user }: Props) {
  return (
    <div style={{ textAlign: "center", paddingTop: "100px" }}>
      <h2>Create Quiz Page</h2>
      <p>Welcome, {user.username}! Here you can create your quiz.</p>
    </div>
  );
}
