
import React, { Component } from "react"
import Header from "./Plutoview.png"
import {NavLink, Routes, Route, Switch} from "react-router-dom";
import PlutoView from "./PlutoView";
import PlutoViewPage from "./PlutoViewPage";




class Container1 extends Component { 
    
render(){

return(
<div class="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-2xl hover:bg-gray-200" id="component1">
<img src={Header}></img>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2 text-center">PlutoVIEW</div>
    <p class="text-gray-700 text-base">
      PlutoVIEW aims to increase awareness to visually-impared folks. With a built-in UltraSonic sensor, the gear aims to inform the wearer of nearby obstacles to avoid during their peaceful walk.
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    
    <div className="">
        
    <NavLink className={(navData) => navData.isActive? "active-link" : ""} exact to ='/PlutoView'><button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-9 border border-blue-500 hover:border-transparent rounded" id="button">
  More Info
</button></NavLink>
    
        </div>
    




    <Routes>
    
      <Route exact path="/PlutoView"   component={<PlutoViewPage/>} />

      </Routes>

  </div>
</div>
)
}
}

export default Container1;