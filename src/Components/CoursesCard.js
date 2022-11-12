import React from 'react'
import FeaturedCourses from './FeaturedCourses'

export default function CoursesCard() {
    return (
    <div>        
    <div className="bg-gray-400">
    <section>
    </section>
    <div className="font-semibold  text-center text-lg text-black"> <h1>FEATURED COURSES</h1>
    </div>
      <section className="p-20 grid sm:grid-cols-2 md:grid-cols-4 gap-6"> 
      <FeaturedCourses/>
    </section>
    </div>
        </div>
    )
}
