
import React from 'react';
import './input.css';
import Title from "./components/Title2.PNG"
import PlutoNav from "./components/PlutoNav"
import Container1 from './components/Container1';
import PlutoArm1 from './components/PlutoArm';
import Container2 from './components/Container2';
import Footer from './components/Footer';
import {Route, Routes, NavLink} from "react-router-dom";
import PlutoView from './components/PlutoView';
import Box1 from './components/Box1';
import PlutoReach from './components/PlutoReach';
import PlutoViewPage from './components/PlutoViewPage';
import Poster from './components/Poster';



function App() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 mb-3" id="navvy">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <img src={Title} className="object-contain h-10 w-40"></img>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="https://plutohacks-2022.devpost.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i><span className="ml-2">DevPost</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="https://github.com/ZBGC/PlutoHacks"
                  target="_blank"
                  rel="noreferrer noopener"
                  
                >
                  <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i><span className="ml-2">GitHub</span>
                </a>
              </li>
              <li className="nav-item">
                
                  <NavLink className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" exact to="/Home">Home</NavLink>
                
              </li>
            </ul>
          </div>
          
        </div>
      </nav>
    


            <Routes>
              <Route exact path="/Home" element={[<Poster/>,<Box1/>,<PlutoArm1/>, <Footer/>]}/>
              <Route exact path="/PlutoReach" element={<PlutoReach/>}/>
              <Route exact path="/PlutoView" element={<PlutoViewPage/>}/>
            </Routes>
    </>
  );
}

export default App;
