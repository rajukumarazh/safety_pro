import React,{useState} from "react";
//import data from "./data";
function FeaturedCourses(){
    const crse=[
{id:1,
name:"fuel Safety Supervisor",
image:"./fuelSupervisor.png"
},
{ id:2,
 name:"Line Fuel Service",
 image:"./lineFuel.png"
 },
 {
     id:3,
     name:"Aviation Fuel Quality Control",
     image:"./AviationF.png"
 },
{
    id:4,
    name:"Aviation Self Fueling Course",
    image:"./aviationSelf.png"
},
{
    id:5,
  name:"Aviation Human Factors",
  image:"./HumanFactor.png"
    
},
{
    id:6,
    name:"Movement and Non-Movement Training (Generic)",
    image:"./airportGround.png"
},
{
    id:7,
    name:"SIDA Training (Generic)",
    image:"./sida.png"
},
{
    id:8,
    name:"Fuel Safety Manual",
    image:"./fuelSafety.png"
},
{
    id:9,
    name:"Hazardous Materials Transportation Training",
    image:"./Hazardous.png"
}];
    const [Courses,setCourses]=useState();
    return(<>
    {crse.map((course)=>{
        return(<>
            <figure className="bg-white h-70 rounded-lg shadow-md pt-5">
       <img alt="Courses" className="w-52 h-32  mx-auto" src= {course.image} />
       <figcaption className="text-center text-gray font-semibold text-l mb-2 pt-2">
          <p> {course.name}</p>
         <button className="mt-5 text-center bg-pink-400 rounded-lg "> Course Details</button>
       </figcaption> 
       </figure> 
        </>)
    })          
    }  
    </>)
}export default FeaturedCourses;