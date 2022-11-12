import React from 'react';
import {Link } from "react-router-dom"
function Home(){
  return(<div className="bg-green-200 ">
  <div className="">
  <div className="bg-gray-200 my-6 -mx-7">
 <h1 className="text-center font-semibold text-gray-900 text-xl"> 
 <centre>CALL FOR INFORMATION ON DEMO COURSES AND GROUP / CORPORATE RATES 877-322-7139</centre>
 </h1>
</div>
<div className="grid grid-rows-1 grid-flow-col gap-5">
<div>
<ul>
  <li className="ml-4">
 <Link to="/Contact"> <a href="" className="text-black font-semibold">Contact Us</a></Link><br/>
   <Link to="/FAQ"><a href=""className="text-black font-semibold">FAQ</a><br/></Link>
   <Link to="/FAQ"><a href=""className="text-black font-semibold">Terms of Use</a><br/></Link>
   <a href=""className="text-black font-semibold">Privacy Policy</a><br/>
   <Link to="/Browcher"><a href=""className="text-black font-semibold">Forms and Brouchers</a><br/></Link>
  </li>
</ul>
 <Link to="/SignUp"><button className="ml-4 text-center font-semibold bg-gray-400 rounded-md">Email NewsLetter sign Up</button></Link>
</div>
<div className="ml-4 -mx-4">
<h1 className="font-bold text-start">TESTIMONIALS</h1>
  <p className="font-semibold">
  I have just completed your online course “FUEL SAFETY SUPERVISOR PROGRAM”.
   I found the course very interesting and informative. The format was excellent; the information
    was direct, to the point and up to date. I am the resident State Fire Marshal for Columbia Metro
     and deal with NFPA codes and FAA requirements every day. By taking this course I have a better 
     understanding about mobile fuelers and fuel 
  farm operation while doing quarterly inspections. I thought the course was excellent....
  </p>
</div>
<div>
<a href="">
<img alt="log" src="./logo2.png" className=" object-right-top "></img>
</a>
</div>
</div>
<p className="ml-4 font-light mx-6 my-7 text-gray-700">Copyright © 2020 SafetyPro™ Training Center. All Rights Reserved.</p>
</div> </div>)
}
export default Home;