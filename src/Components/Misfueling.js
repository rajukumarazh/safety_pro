import React from 'react';
import Header from '../Header';
import Home from '../HomePage/Home';
import Misfuel from './Misfueling/Misfuel';
function Misfueling(){
  return(<>
  <Header></Header>
    <Misfuel></Misfuel>
    <Home></Home>
  </>)
}
export default Misfueling;