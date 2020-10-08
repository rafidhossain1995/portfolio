import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from "../src/Component/NavBar"
import About from "../src/Component/About"
import Resume from "../src/Component/Resume"
import Portfolio from "../src/Component/Portfolio"
import ContactMe from "../src/Component/ContactMe"

function App() {
  return (
   <div>
    <NavBar/>
    <About/>
    <Resume/>
    <Portfolio/>
    <ContactMe/>
   </div>
  );
}

export default App;
