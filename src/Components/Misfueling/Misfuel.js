import React from 'react'

export default function Misfuel() {
    return (<div className="">
    <div className="bg-grey-900">
    <h1 className="text-lg font-bold text-black text-center bg-green-500">Misfueling Prevention Resources</h1>
    </div>
        <section class="grid grid-cols-2 grid-rows-2 gap-4 ml-5 mx-7">
      <figure className="bg-white h-60 w-30 rounded-lg shadow-md pt-5 ">
       <figcaption className="text-center text-gray font-semibold text-l mb-2 pt-2">
         <h1 className="text-center text-lg text-green">MISFUELING PREVENTION</h1>
         <p className="text-black mx-9 text-sm">
                 Watch the video NOW!
                   Only 4 minutes to save a life!
         </p>
         <button className="mt-5 text-center bg-blue-400 rounded-lg "> Click Here</button>
       </figcaption> 
       </figure> 
       
       <div className="bg-green-200 row-span-2 w-0px">
           <h1 className="text-center font-bold text-black"> 
           Request a Save A Life - Verify Fuel Type Decals</h1>
           <a href=""><p className="text-blue-600">Download this Save A Life - Verify Fuel Type 
           promotional order form for decals and key chains.
            </p></a>
           <div className=""> <img alt="text" src="./save.png" className=""></img></div>
       </div>
       <figure className="bg-white h-60 w-50 rounded-lg shadow-md pt-5  ">
       <figcaption className="text-center text-gray font-semibold text-l mb-2 pt-2">
         <h1 className="text-center text-lg text-green">FREE MISFUELING PROCEDURES</h1>
         <p className="text-black mx-9 text-sm">
         Just register to get your free copy
        Energy institute publication E1-1597
         </p>
         <button className="mt-5 text-center bg-blue-400 rounded-lg "> Click Here</button>
       </figcaption> 
       </figure>
        </section>
        
        </div> )
}
