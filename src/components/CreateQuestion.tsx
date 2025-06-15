import React, { useEffect, useRef, useState } from "react";
import Navbar from "./NavBar";
import QuestionInputOption from "./QuestionOption";
import QuestionLayout from "./QuestionLayout";
import QuizDetailTab from "./QuizDetailTab";

interface Question{
    quiz_id:string,
    question:string,
    option1:string,
    option2:string,
    option3:string,
    option4:string,
    answer:string
}

interface Quiz{
    quizId:string,
    quiz_name:string
    username:string
}

export default function CreateQuestion({quizId,quiz_name,username}:Quiz){

    const [imageFile,setImageFile]=useState<File|null>(null)
    const [imageFileUrl,setImageFileUrl]=useState("")
    const imageRef=useRef<HTMLInputElement|null>(null)
    const handleImageFile=(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        const files=imageRef.current?.files
        if(files!=null && files.length>0){
            setImageFile(files[0])
            let url=URL.createObjectURL(files[0])
            setImageFileUrl(url)
        }
    }
    const triggerInput=()=>{
        
        imageRef.current?.click()
    }
    const [quest,setQuest]=useState<Question>({
        quiz_id:"",
        question:"",
        option1:"",
        option2:"",
        option3:"",
        option4:"",
        answer:""
    })
    const handleInput=(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        e.preventDefault()
        const {name,value}=e.target;


        setQuest((prev)=>({...prev,[name]:value}))
         
    }
    const handleAddQuest=()=>{

    }
    useEffect(()=>{
        setQuest((prev)=>({...prev,quiz_id:quizId}))
    },[])

    return (<>
        
        <div className="w-screen min-h-screen flex flex-row justify-center item-center  px-8">
            <Navbar username={username}>
                <QuizDetailTab quizId={quizId}/>
            </Navbar>
            <div className="flex flex-col justify-end">
                <div className="w-screen px-4 flex flex-row justify-center ">
                    <input type="file" ref={imageRef}  onChange={handleImageFile} hidden={true}/> 
                    
                    {imageFile!=null?<img className="w-[850px] h-[550px] object-coverl object-cover" src={imageFileUrl} onClick={triggerInput}/>:<div className="grid grid-col-1 gap-4">
                    <h5>Select Reactangular shaped image for the Questions</h5>
                    <button type="button" onClick={triggerInput} >Browse Image </button></div>}
                
                </div>
                <div className="py-2">
                    <QuestionLayout>
                    <textarea name="question" placeholder="Enter the Question?" value={quest.question} onChange={handleInput}
                     className="w-full outline-0 rounded-full px-4 overflow-hidden">  
                    </textarea>
                    </QuestionLayout>
                
                </div>
                <div className="grid grid-cols-5 gap-4 py-2">
                    
                    <QuestionInputOption>
                        <input type="text" name="option1" className="w-full rounded-full px-4 outline-0"  placeholder="Option1" value={quest.option1} onChange={handleInput}/>
                    </QuestionInputOption>
                    <QuestionInputOption>
                        <input type="text" name="option2" className="w-full rounded-full px-4 outline-0"  placeholder="Option2" value={quest.option2} onChange={handleInput}/>
                    </QuestionInputOption>
                    <QuestionInputOption>
                        <input type="text" name="option3" className="w-full rounded-full px-4 outline-0"  placeholder="Option3" value={quest.option3} onChange={handleInput}/>
                    </QuestionInputOption>
                    <QuestionInputOption>
                        <input type="text" name="option4" className="w-full rounded-full px-4 outline-0"  placeholder="Option4" value={quest.option4} onChange={handleInput}/>
                    </QuestionInputOption>
                    <QuestionInputOption>
                        <input type="text" name="answer" className="ow-full rounded-full px-4 outline-0"  placeholder="answer" value={quest.answer} onChange={handleInput}/>
                    </QuestionInputOption>
                </div>
                <div className="flex flex-row justify-center">
                    <button type="button" onClick={handleAddQuest}>Add Question</button>
                </div>
            </div>
        </div>
        
    
    
    
    </>)
}