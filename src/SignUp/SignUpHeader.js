import React from 'react'
import {Link} from "react-router-dom";
export default function SignUpHeader() {
    return (
        <div>
            <div className="text-right bg-gray-100">
            <ul className=" text-lg font-bold text-black"> 
            <li>
               <Link to="/SignUp"> <button className="bg-blue-500 rounded-md mt-2">Create Account</button><br/></Link>
                <Link to="/LogIn"><button className="bg-blue-500 rounded-md mt-2">Log In</button><br/></Link>
              {/* <Link to="">  <button className="bg-blue-500 rounded-md mt-2">Search</button><br/></Link> */}
              
            </li>
        </ul>
        </div>
        </div>
    )
}

