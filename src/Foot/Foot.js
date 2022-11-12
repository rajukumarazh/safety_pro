import React from 'react'

export default function Foot({value}) {
    console.log(value);
    return (<>{value.map((value)=>{
        return(<>
            <div className="bg-gray-200">
            <div className="">
    <div className="font-semibold  text-center text-lg text-black "> 
    </div>
    <h1 className="text-center text-lg to-green-400 font-bold my-3">{value.title}</h1>
    <br/>
    <h2 className="text-center text-base to-black font-semibold"> {value.details}</h2>
    <div className="align-middle">
    <button className="text-black bg-green-200 font-semibold rounded-lg block align-middle mr-10"> Click Here
    </button>
    </div>
      <section className="p-20 grid sm:grid-cols-2 md:grid-cols-4 gap-6"> 
    </section>
    </div>
        </div>
        </>)
    })}
        
   </>)
}