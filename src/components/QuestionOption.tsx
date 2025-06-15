import React from "react";

interface Child{
    children:React.ReactNode
}
export default function QuestionInputOption({children}:Child){
return(
    <div className="bg-fuchsia-950 rounded-full border-3 border-amber-500 outline-2 outline-amber-500 text-2xl p-4" >
        {children}
</div>)
}