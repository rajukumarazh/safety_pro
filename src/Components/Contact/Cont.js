import React from 'react'

export default function Cont() {
    return (
        <div>
<div className="grid grid-cols-2 gap-4 ml-12 my-9"><div>
<h1 className="text-lg font-semibold text-black">CONTACT US</h1>
  <div className="bg-grey-300 border-1 "> <input type="text" placeholder="Name"></input></div><br/>
  <div className="bg-grey-300 w-10"> <input type="text" placeholder="Email"></input></div><br/>
  <div className="bg-grey-300"> <input type="text" placeholder="Subject"></input></div><br/>
  <div className="bg-grey-300"> <input type="text" placeholder="Message"></input></div><br/>
  <div className="cls my-6" > <img alt="img"src="./captcha.png"></img></div><br/>
  <div><button className="my-2 mx-2.5 bg-green-500 text-xl block rounded-md"> Submit</button></div>
  </div>
  <div className=" content-end"> <img alt= "uni" src="./Contact.png"></img></div>
</div>
      </div>
    )
}
