import React from "react";

interface Child{
    children:React.ReactNode
}
export default function QuestionLayout({children}:Child){
return(
    <div className="w-screen min-h-24 bg-fuchsia-950 rounded-full border-3 border-amber-500 outline-2 outline-amber-500 text-2xl p-4" >
        {children}
</div>)
}