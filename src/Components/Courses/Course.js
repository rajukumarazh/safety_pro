import React from 'react'
import Header from '../../Header'
import Home from '../../HomePage/Home'
import FeaturedCourses from '../FeaturedCourses'

export default function Course() {

    return (
        <div>
        <Header></Header>
<div className="grid grid-cols-2 gap-4">
<div className="ml-4 w-40 h-40">
<h1 className="text-black font-bold text-lg"> CATEGORIES</h1>
<ul className="font-semibold text-lg text-black">
    <li>
        <a className="text-black" href="">AIRPORT SAFETY</a><br/>
        <a className="text-black" href="">ALL COURSES</a><br/>
        <a className="text-black" href="">FAA FUEL SAFETY</a><br/>
        <a className="text-black" href="">ENVIRONMENTAL</a><br/>
        <a className="text-black" href="">SIDA AND DRIVER</a><br/>
    </li>
</ul>
</div>
<div>
<div className="bg-blue-700 rounded-md ml-4 mr-4">
    <h1 className="ml-5">
    COURSES
    </h1></div>
    <div>
    <div className="grid grid-cols-4 gap-1 mr-4 ml-4 h-50">
    <div className="mt-2">
    <figure className="bg-white h-70 rounded-lg shadow-md pt-5">
       <img alt="Courses" className="w-52 h-32  mx-auto" src="./fuelSafety.png"/>
       <figcaption className="text-center text-gray font-semibold text-l mb-2 pt-2">
          <p> Fuel Safety Supervisor 14 CFR 139.321(e)(1)</p>
         <button className="mt-5 text-center bg-pink-400 rounded-lg "> Course Details</button>
       </figcaption> 
       </figure> 
       </div>
       <div className="mt-2">
       <figure className="bg-white h-70 rounded-lg shadow-md pt-5">
       <img alt="Courses" className="w-52 h-32  mx-auto" src="./LineFuel.png"/>
       <figcaption className="text-center text-gray font-semibold text-l mb-2 pt-2">
          <p> Fuel Safety Supervisor 14 CFR 139.321(e)(1)</p>
         <button className="mt-5 text-center bg-pink-400 rounded-lg "> Course Details</button>
       </figcaption> 
       </figure> 
       </div>
       <div className="mt-2">
       <figure className="bg-white h-70 rounded-lg shadow-md pt-5">
       <img alt="Courses" className="w-52 h-32  mx-auto" src="./Aviation.png"/>
       <figcaption className="text-center text-gray font-semibold text-l mb-2 pt-2">
          <p> Fuel Safety Supervisor 14 CFR 139.321(e)(1)</p>
         <button className="mt-5 text-center bg-pink-400 rounded-lg "> Course Details</button>
       </figcaption> 
       </figure> 
       </div>
       <div className="mt-2">
       <figure className="bg-white h-70 rounded-lg shadow-md pt-5">
       <img alt="Courses" className="w-52 h-32  mx-auto" src="./aviationSelf.png"/>
       <figcaption className="text-center text-gray font-semibold text-l mb-2 pt-2">
          <p> Fuel Safety Supervisor 14 CFR 139.321(e)(1)</p>
         <button className="mt-5 text-center bg-pink-400 rounded-lg"> Course Details</button>
       </figcaption> 
       </figure>
       </div>
    </div>
    </div>
</div>
</div> 
<div className="grid  grid-cols-4 gap-4 mt-6">
       <FeaturedCourses></FeaturedCourses>  
</div>
<Home></Home>
     </div>
    )
}
