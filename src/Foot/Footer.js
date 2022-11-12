import React from 'react'
import Foot from './Foot'
 const FootData=[
            {title:"MISFUELING PREVENTION",
                details:"Watch the video NOW! Only 4 minutes to save a life!"
            },
            {
                title:"FREE MISFUELING PROCEDURES",
                details:"Just register to get your free copy Energy institute publication E1-1597"       
            },
            {
                title:"SAFETYPRO INTRO VIDEO",
                details:"Let SafetyPro secure your future Watch today on your facebook page"
            }
        ];
export default function Footer() {
    return (
        <div className="bg-gray-400">          
        <div className="font-semibold  text-center text-lg text-black"></div>
          <section className="p-20 grid sm:grid-cols-2 md:grid-cols-3 gap-6"> 
          <Foot value={FootData}></Foot>
       </section>
        </div>);
}
