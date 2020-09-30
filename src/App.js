import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from "../src/Component/NavBar"
import About from "../src/Component/About"
import Resume from "../src/Component/Resume"

function App() {
  return (
   <div>
    <NavBar/>
    <About/>
    <Resume/>
   </div>
  );
}

export default App;
