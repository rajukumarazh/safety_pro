import React from 'react';

import Header from '../Header';
import Home from '../HomePage/Home';
import Cntct from './Contact/Cntct';
import Cont from './Contact/Cont';

function Contact (){
  return(<>
    <Header></Header>
    <Cntct></Cntct>
    <Cont></Cont>
    <Home></Home>
  </>)
}
export default Contact;