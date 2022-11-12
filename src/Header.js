import React from 'react'
import {Link} from "react-router-dom";
import SignUpHeader from './SignUp/SignUpHeader';
export default function Header() {
    return (
        <div>
     <SignUpHeader></SignUpHeader>
        <div className="bg-gray-100 h-45 flex flex-wrap content-start ">
       
        <img alt="header" src="./logo.png" className="h-12 w-13 mr-7"></img>
        <ul>
         <Link to="/"> <button className=" text-center font-semibold  text-opacity-3 mr-9"> Home</button> </Link>    
         <Link to ="/Course">  <button className=" text-center font-semibold  text-opacity-3 mr-9"> Courses</button></Link>
         <Link to="/AboutUs"><button className=" text-center font-semibold  text-opacity-3 mr-9"> AboutUs</button></Link>
         <Link to="/Contact"><button className=" text-center font-semibold  text-opacity-3 mr-9"> ContactUs</button></Link>
        <Link to="FAQ">   <button className=" text-center font-semibold  text-opacity-3 mr-9"> FAQ</button></Link>
          <Link to="/Browcher">  <button className=" text-center font-semibold  text-opacity-3 mr-9"> Forms and Browchers</button></Link>
          <Link to="/Misfueling"><button className=" text-center font-semibold  text-opacity-3 mr-9"> Misfueling</button></Link>
           </ul>
        </div>
        </div>
    )
}
