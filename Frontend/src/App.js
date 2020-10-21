import React from 'react';
import logo from './logo.svg';
import './App.css';
// import { FormspreeProvider } from '@formspree/react';
import NavBar from "../src/Component/NavBar"
import About from "../src/Component/About"
import Skills from "./Component/Skills"
import Portfolio from "../src/Component/Portfolio"
import Contact from "./Component/Contact"


function App() {
  return (
   <div>
    <NavBar/>
    <About/>
    <Skills/>
    <Portfolio/>
    <Contact/>
   </div>
  );
}

export default App;

