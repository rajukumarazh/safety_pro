import React from 'react'
import {Link} from "react-router-dom";
export default function LogInHeader() {
    return (
        <div className="space-x-4 bg-green-300">
        <br/>
        <ul><div>
            <li>
            <div className="inline-block ml-8"> <a href=""><img src="./SafetyPro.png" 
             className="w-60 h-12"></img></a></div>
              <div className="inline-block"> <Link to="/"> <a className="ml-5" href=""> HOME</a> </Link></div>
              <div className="inline-block"> <Link to="/Course">  <a className="ml-5"  href="">COURSES</a></Link></div>
              <div className="inline-block"> <Link to="/AboutUs">  <a className="ml-5" href=""> ABOUT US</a></Link></div>
              <div className="inline-block"> <Link to="/Contact">  <a className="ml-5" href="">CONTACT US</a></Link></div>
              <div className="inline-block"> <Link to ="/FAQ">  <a className="ml-5" href=""> FAQ</a></Link></div>
              <div className="inline-block"> <Link to="/"> <a className="ml-5" href="">MY COURSES</a></Link></div>
            </li>
            </div>
        </ul>
            
        </div>
    )
}
