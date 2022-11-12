import React from 'react'
import {Link} from "react-router-dom"
import LogInHeader from './LogInHeader'

export default function LogIn() {
    return (
        <div className="">
      <div className="justify-center">  <span className="block"> <img src="./america.png"></img></span></div>
     <div className="inline-block"> <a href="">  <p>create Account</p></a></div>
        <div className="inline-block ml-2"><a href=""><p>logIn</p></a></div>
        <p className="text-right rounded-sm my-2 mr-8" > <input type="text" placeholder="SEARCH"
         className="placeholder-black"></input></p>
        <LogInHeader></LogInHeader>
        <div className="ml-10"><h1>Home</h1></div>
        <p className="text-right"> You are not logged in.</p><br/>
        <br/>
        <br/>
            <div className="grid grid-cols-2">
<div className="content-center">
    <h1 className="text-center text-lg text-black">Log In</h1><br/>
    <h1 className="ml-2 text-center">Username:<input type="text" className="rounded-md mb-2"></input></h1> 
    <h1 className="ml-2 text-center">Password:<input type="text" className="rounded-md mb-2"></input></h1>
   <h1 className="text-center"> <input type="checkbox" className=""></input>Remember username</h1><br/>
   <div className="flex items-center justify-center">
   <button className="bg-gray-500 rounded-md "> <p>  </p> Log  In<p>  </p>   </button>
   </div>
   <a href="" className="text-center ml-10">
<p>Forgotten your username or password?</p></a>
<p className="ml-10 text-center">Cookies must be enabled in your browser </p>
</div>
<div>
    <h1 className="text-center mt-2">Is this your first time here?</h1><br/>
    <p className="text-center">For full access to this site, you first need to create an account.</p><br/>
    <div className="flex items-center justify-center mt-2">
    <Link to="/SignUp"><button className="bg-green-500 rounded-sm"> Create New Account</button></Link>
    </div>
</div>
</div>
        </div>
    )
}
