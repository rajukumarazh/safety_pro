import React from 'react'
import FormBrowchers from '../Components/FormBrouchers'
import Header from '../Header'
import Home from '../HomePage/Home'

export default function Browcher() {
    return (
        <div>
           <Header></Header>
            <FormBrowchers></FormBrowchers>
            <Home></Home>
        </div>
    )
}
