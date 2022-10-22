import question from "./Contactor.png"
import Sticker from "./Sticker.png";
import React, { Component } from "react";


class PlutoArm1 extends Component{
  constructor(props){
    super(props);
    this.state = {theNames : "", message:""}
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeMessage = this.handleChangeMessage.bind(this); 
   

  }

  handleChangeName(e){ 
    this.setState({theNames : e.target.value})
  }

  handleChangeMessage(e){
    this.setState({message : e.target.value})
  }



  handleSubmit(e){
    e.preventDefault();
    alert("Thank you! Message Submitted!")
    this.setState({theNames : "", message: ""})
  }




render(){
    return (
    
      <div class="flex flex-nowrap place-content-center ... " id='cont'>
    <div class= " bg-white rounded-xl shadow border m-12 ml-8 font-bold w-65" id='cont'> 
   <div className="flex">
    <img src={question} className="object-fill rounded-xl shadow border"></img>
      <div className="flex flex-col items-end justify-end ">
    <form class="absolute container bg-slate-200 rounded-xl shadow border border-2 m-12 ml-3 w-full max-w-lg border-black p-6" onSubmit={this.handleSubmit}>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        First and Last Name
      </label>
      <input class="appearance-none block w-full bg-white text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-100"  value={this.state.theNames}  onChange={this.handleChangeName}  id="grid-first-name" type="text" placeholder="First and Last Name Please!">
    </input>  <p class="text-red-500 text-xs italic">Please fill out this field.</p>
    </div>
    
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="text">
        Leave your message!
      </label>
      <input class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-10" id="text" type="text" value={this.state.message} onChange={this.handleChangeMessage} placeholder="Your Message">
     </input> <p class="text-gray-600 text-xs italic">We'll store it on our Deskree database</p>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-2">
    
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <div class="relative">
       
      </div>
    </div>
    
  </div>
  <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-9 border border-blue-500 hover:border-transparent rounded ml-80" id="button">
  Submit
</button>
</form>
</div>
</div>
    
    
    
    </div>
    </div>
    )}

}
export default PlutoArm1;