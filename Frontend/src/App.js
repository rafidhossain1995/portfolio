import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from "../src/Component/NavBar"
import About from "../src/Component/About"
import Resume from "../src/Component/Resume"
import Portfolio from "../src/Component/Portfolio"
import MyForm from "../src/Component/MyForm"


function App() {
  return (
   <div>
    <NavBar/>
    <About/>
    <Resume/>
    <Portfolio/>
    {/* <MyForm/> */}
   </div>
  );
}

export default App;

