import React from "react";
import "./ActionCard.css";

interface ActionCardProps {
  title: string;
  description: string;
  buttonText: string;
  onClick?: () => void;
}

export default function ActionCard({
  title,
  description,
  buttonText,
  onClick,
}: ActionCardProps) {
  return (
    <div className="card" onClick={onClick}>
      <h3>{title}</h3>
      <p>{description}</p>
      <button>{buttonText}</button>
    </div>
  );
}