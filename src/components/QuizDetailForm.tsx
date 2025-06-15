import React, { useRef, useState } from "react";
import "./QuizDetailForm.css";
import pic from "../assets/react.svg"
import { quizCategories } from "../Model/QuizCategories"; 

interface QuizFormData {
  title: string;
  category: string;
  date: string;
  isPrivate: boolean;
  description: string;
}

export default function QuizDetailForm() {
  const [imageFile,setImageFile]=useState<File>()
  const [imageFileUrl,setImageFileUrl]=useState("")
  const imageFileRef=useRef<HTMLInputElement |null>(null)
  const handleImage=()=>{
    const files=imageFileRef.current?.files
    if(files!=null && files.length>0){
      setImageFile(files[0])
      let url=URL.createObjectURL(files[0])
      setImageFileUrl(url)
    }
  }
  const triggerInput=()=>{
    imageFileRef.current?.click()
  }
  
  const [formData, setFormData] = useState<QuizFormData>({
    title: "",
    category: "",
    date: "",
    isPrivate: false,
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement|HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if(type==="checkbox"){
        const checked=(e.target as HTMLInputElement).checked
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
          }));
    }
    else{
      if(type==="select-one" && value==="default"){
        console.log("select category")
        return
      }
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
        
      <img className="quiz-image" src={imageFileUrl?imageFileUrl:pic}  />
      <div id="EditButtonRow">
      <button id="EditButton" onClick={triggerInput}  >
          <i className="material-icons">edit</i>
      </button>
      </div>
      
        <h2>Create a New Quiz</h2>
        <input type="file" ref={imageFileRef} onChange={handleImage} hidden={true}/>
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
          <select 
          name="category"
          onChange={handleChange}
          required
          className="w-full p-2 border rounded shadow "
          >
            <option value="default">Select Category</option>
            {quizCategories.map((category,index)=><option value={category} key={index}>{category}</option>)}
          </select>
          
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
