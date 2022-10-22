import React, { Component } from "react";
import "./PlutoReach.css";
import Footer from "./Footer";

class PlutoReach extends Component{

    render(){
        return(
            <>

            <>
  <div
    className="relative pt-16 pb-32 flex content-center items-center justify-center"
    style={{ minHeight: "75vh" }}
  >
    <div
      className="absolute top-0 w-full h-full bg-center bg-cover"
      style={{
        backgroundImage:
          'url("https://t4.ftcdn.net/jpg/04/11/80/31/360_F_411803141_LBHup3qPfsiaxzjQR3jKbe6vJ434CjLO.jpg")'
      }}
    >
      <span
        id="blackOverlay"
        className="w-full h-full absolute opacity-50 bg-black"
      />
    </div>
    <div className="container relative mx-auto">
      <div className="items-center flex flex-wrap">
        <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
          <div className="pr-12">
            <h1 className=" font-bold text-6xl"><span id="P">P</span>
              <span id="L">l</span>
              <span id="U">u</span>
              <span id="T">t</span>
              <span id="O">o</span>
              <selestion className="text-white">REACH</selestion>
            </h1>
            <p className="mt-4 text-xl text-gray-300">
              PlutoREACH is a robotic arm brace that aims to assist in substituting the movemenet of an arm.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div
      className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
      style={{ height: 70 }}
    >
      <svg
        className="absolute bottom-0 overflow-hidden"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        version="1.1"
        viewBox="0 0 2560 100"
        x={0}
        y={0}
      >
        <polygon
          className="text-white fill-current"
          points="2560 0 2560 100 0 100"
        />
      </svg>
    </div>
  </div>
  <p className="padding: 1.25rem">
    <br />
    <br />
    <br />
  </p>
  <div className="flex-auto">
    <div className="">
  <h1 className="text-center text-5xl font-bold text-black">
    Who Will This <selestion id="price">Help</selestion>?
  </h1>
  <div>
  <div className="grid grid-cols-3 gap-4 mt-5">
    <div className="container bg-slate-100 rounded-xl shadow border font-bold shadow-xl">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-black">NICU New Borns</h1>
        <p className="text-s px-8">
          A miniature version of this arm brace will be able to help you
          exercise your newborn's arm so they can have maximum functionality in
          the future.
        </p>
        <div className="">
          <img
            src="https://images.unsplash.com/photo-1569994651517-9651e895258a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2344&q=80"
            style={{ height: 200 }}
            className="shadow border m-auto mb-3"
            id="imgs"
          />
        </div>
      </div>
    </div>
    <div className="container bg-slate-100 rounded-xl shadow border font-bold shadow-xl">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-black">Stroke Survivors</h1>
        <p className="text-s px-8">
          A larger version of this arm will be able to assist teens and adults
          who need to work on the range of their arm from to the result of a
          stroke
        </p>
        <div className="">
          <img
            src="https://images.unsplash.com/photo-1505685679686-2490cab6217d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
            style={{ height: 200 }}
            className="m-auto shadow border"
            id="imgs"
          />
        </div>
      </div>
    </div>
    <div className="container bg-slate-100 rounded-xl shadow border font-bold shadow-xl">
        
      <div className="text-center">
        <h1 className="text-3xl font-bold text-black">Kids</h1>
        <p className="text-s px-8">
          A version of this can be made for kids who need therapy due to a broken
          arm.{" "}
        </p>
        <div className="">
          <img
            src="https://images.unsplash.com/photo-1472162072942-cd5147eb3902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2338&q=80"
            style={{ height: 200 }}
            className="m-auto shadow border"
            id="imgs"
          />
        </div>
        </div>
        </div>
      </div>
    </div>
  </div>
  <p>
    <br />
    <br />
    <br />
  </p>
  <div className=" py-12" id="Product">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div>
        <h2 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-white text-center text-5xl">
          About Our Product
        </h2>
      </div>
      <br />
      <div className="grid grid-cols-2 gap-4 text-left">
        <div className="container rounded-xl shadow border" id="imgs">
          <h1 className="text-white text-3xl mx-9">
            Some of our Features Include:{" "}
          </h1>
          <ul style={{ listStyleType: "circle" }} className="text-white mx-9 space-y-6 mt-5" id="">
            <li>Supporting the arm</li>
            <li>Being able to automatically exercise the arm</li>
            <li>Provide a temporary or permanent solution for failure of limb</li>
          </ul>
        </div>
        <div className="column float.right shadow border ml-12 rounded-xl">
          <img className=" rounded-xl"src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3412&q=80" />
        </div>
        </div>
      </div>
    </div>
  </div>
  <p>
    <br />
    <br />
    <br />
  </p>
  <div>
    <h1 className="text-center text-4xl font-bold">Price Ranges</h1>
    <br />
    <div className="grid grid-cols-2 gap-4 text-center">
      <div className="container bg-slate-100 rounded-xl shadow border font-bold shadow-xl ">
        <h2 className="text-2xl font-bold mb-4 ">Reach for the Kids</h2>
        <h3 className="text-6xl" id="price">$15</h3>
        <p></p>
        <br />
        <p className="md-4">
          With a humanitarian perspective, PlutoHelps does not aim to make a profit from the difficulties of others. In turn, the price reflects upon the material and upkeep costs.

        </p>
      </div>
      <div className="container bg-slate-100 rounded-xl shadow border font-bold shadow-xl">
        <h2 className="text-2xl font-bold mb-4 ">Reach for the Adults</h2>
        <h3 className="text-6xl" id="price">$25</h3>
        <p></p>
        <br />
        <p className="mb-4">
        With a humanitarian perspective, PlutoHelps does not aim to make a profit from the difficulties of others. In turn, the price reflects upon the material and upkeep costs. With an Adult order, a higher price is needed to equalize the higher amount of materials used
        </p>
      </div>
    </div>
  </div>
  <br />
  <br />
  <br />
  <div>
    
  </div>
  <div>
    <Footer/>
    </div>
</>

        
               
                </>
)}}

export default PlutoReach;