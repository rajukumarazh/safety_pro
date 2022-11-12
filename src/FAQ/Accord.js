import React,{useState} from 'react'

export default function Accord({title,content}) {
    //console.log(props.data)
    const [show,setShow]= useState(false);
    return (
        <div>
           <div className="bg-white" onClick={()=>setShow(!show)}>
               <h1 className="text-black font-medium ml-4"><button onClick={()=>setShow(!show)}>{title}</button></h1>
           </div>
           <br/>
           <div className="ml-4 bg-gray-300"> {show &&<p className="text-black ml-4 ">{content}</p>}</div>
        </div>
    )
}
