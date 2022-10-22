import React, { Component } from "react";
import Container1 from "./Container1";
import Container2 from "./Container2";

class Box1 extends Component{
    render(){
        return(
            <div className='flex flex-wrap mt-12'>
      <div className='ml-auto mx-12'> 
      <Container1/>
      </div>
      <div className='mr-auto mx-12'>
      <Container2/>
      </div>
      </div>
        )
    }
}

export default Box1;