import React, { Component } from "react";
import Footer from "./Footer";
import "./PlutoView.css";


class PlutoViewPage extends Component{


    render(){
        return(
            
            <>
  <div
    className="relative pt-16 pb-32 flex content-center items-center justify-center"
    style={{ minHeight: "75vh" }}
  >
    <div
      className="absolute top-0 w-full h-full bg-center bg-cover"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80")'
      }}
    >
      <span
        id="blackOverlay"
        className="w-full h-full absolute opacity-75 bg-black"
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
              <span id="O">o</span><selestion className="text-white">VIEW</selestion>
            </h1>
            <p className="mt-4 text-xl text-gray-300">
              PlutoVIEW is a vision aid to help you navigate your world
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
  <h1 className="text-center text-5xl font-bold text-blue-900 mb-5">
    The  <selestion id="text">Benefits</selestion>
  </h1>
  <br />
  <br />
  <div className=" flex py-12" id="PlutoView">
  <div className=" flex flex-col space-y-40 mt-14 ">
    <div className="container bg-slate-100 rounded-xl shadow border font-bold shadow-xl ml-9">
      <div className="text-center">
        
        <h1 className="text-3xl font-bold text-blue-800">Completely Blind</h1>
        <p className="text-s px-8">
          This device will assist those who are completely blind to help detect
          what is in front of them.{" "}
        </p>
        <div className="shadow border m-auto">
          <img
            src="https://plus.unsplash.com/premium_photo-1661413277751-2aaefed19ae4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
            style={{ height: 200 }}
            className="h-7 m-auto rounded-xl"
          />
        </div>
      </div>
    </div>
    <div className="container bg-slate-100 rounded-xl shadow border font-bold shadow-xl ml-9">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-blue-800">Partially Blind</h1>
        <p className="text-s px-8">
          This product will be able to assist those who are partially blind to
          navigate their world.
        </p>
        <div className="shadow border m-auto">
          <img
            src="https://images.unsplash.com/photo-1516714819001-8ee7a13b71d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80"
            style={{ height: 200 }}
            className="shadow border m-auto rounded-xl"
          />
        </div>
      </div>
    </div>
  </div>
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div>
        <h2 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-white text-center text-5xl">
        </h2>
      </div>
      <br />
      <div className="text-white">
        <p
          className="text-center text-white text-xl"
          style={{ marginLeft: "20%", marginRight: "20%" }}
        >
         
        </p>
        <div>
        <img
          src="https://i.imgur.com/JTmsN4v.png"
          style={{ width: "75%", marginLeft: "auto", marginRight: "auto" }}
          className="center mt-14 shadow border rounded-xl"
        />
      </div>
        <br />
      </div>
    </div>
  </div>
  <br />
  <br />
  <br />
  <div>
    <h1 className="text-center text-4xl font-bold" id="text">Our Prices</h1>
    <br />
    <div>
      <div
        className="text-center rounded-lg"
        id="PlutoView"
        style={{
          marginLeft: "10em",
          marginRight: "10em",
          padding: "2em",
          paddingTop: "4em",
          paddingBottom: "4em"
        }}
      >
        <div className="container bg-slate-100 rounded-xl shadow border font-bold shadow-xl mx-auto">
          <h2 className="text-2xl font-bold  mb-4">Basic Package</h2>
          <h3 className="text-6xl" id="text">$35</h3>
          <p>Base Model</p>
          <br />
          <p className="">
            For the hat and the camera you will be able to transverse the
            streets with more ease.
          </p>
        </div>
      </div>
    </div>
    <br />
    <br />
    <br />
    <div>

    </div>
  </div>
  <div>
    <Footer/>
  </div>
</>

            
            
            
            )
    }
}

export default PlutoViewPage;