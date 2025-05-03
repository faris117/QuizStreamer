import React from "react";

interface Props {
  user: { username: string };
}

export default function JoinQuizPage({ user }: Props) {
  return (
    <div style={{ textAlign: "center", paddingTop: "100px" }}>
      <h2>Join Quiz Page</h2>
      <p>Hello {user.username}, enter a quiz code to join a session.</p>
    </div>
  );
}
