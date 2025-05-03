import React, { useState } from "react";
import "./QuizDetailForm.css";

interface QuizFormData {
  title: string;
  category: string;
  date: string;
  isPrivate: boolean;
  description: string;
}

export default function QuizDetailForm() {
  const [formData, setFormData] = useState<QuizFormData>({
    title: "",
    category: "",
    date: "",
    isPrivate: false,
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if(type==="checkbox"){
        const checked=(e.target as HTMLInputElement).checked
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
          }));
    }else{
        setFormData((prev) => ({
            ...prev,
            [name]: value,
          }));
    }
   
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Quiz submitted:", formData);
    // Here, you can send formData to your backend API
    alert(formData.title+" "+formData.category+" "+formData.date+" "+formData.isPrivate+" "+formData.description)
  };

  return (
    <div className="create-quiz-container">
      <form className="quiz-form" onSubmit={handleSubmit}>
        <h2>Create a New Quiz</h2>

        <label>
          Title:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Category:
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Date:
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </label>

        <label className="checkbox-label">
          <input
            type="checkbox"
            name="isPrivate"
            checked={formData.isPrivate}
            onChange={handleChange}
          />
          Make Quiz Private
        </label>

        <label>
          Description:
          <textarea
            name="description"
            rows={4}
            value={formData.description}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Create Quiz</button>
      </form>
    </div>
  );
}
