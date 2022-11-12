import React from 'react'
import Banner from '../Components/Banner'
import CoursesCard from '../Components/CoursesCard'
import Header from '../Header'
import Home from './Home'
import Footer from "../Foot/Footer"
export default function Homepage() {
    return (
        <div>
        <Header></Header>
       <Banner></Banner>
       <CoursesCard></CoursesCard>
       <Footer></Footer>
        <Home></Home>
        </div>
    )
}
