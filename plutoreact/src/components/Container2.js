
import React, { Component } from "react"
import Header2 from "./PlutoReach.png"
import PlutoReach from "./PlutoReach";
import {NavLink, Routes, Route} from 'react-router-dom'

class Container2 extends Component { 
    

render(){

return(
<div class="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-2xl hover:bg-gray-200" id="component1s">
<img src={Header2}></img>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2 text-center">PlutoREACH</div>
    <p class="text-gray-700 text-base mb-6">
    a humanitarian response to aid physically-impaired persons with navigating daily lives
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
   


  <div className="">

    
    <NavLink className={(navData) => navData.isActive? "active-link" : ""} exact to ='/PlutoReach'>

    <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-8 border border-blue-500 hover:border-transparent rounded mt-12" id="button">
  More Info
</button>

    </NavLink>
    
        </div>




    <Routes>
    
      <Route exact path="/PlutoReach"   component={<PlutoReach/>} />

      </Routes>
  </div>
</div>
)
}
}

export default Container2;