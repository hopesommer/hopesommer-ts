import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { NavBar } from "./components/NavBar"
import { Home } from "./views/Home"
import { Resume } from "./views/Resume"
import { Projects } from "./views/Projects"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/resume" element={<Resume/>}/>
          <Route path="/projects" element={<Projects/>}/>
        </Routes>
      </header>
    </div>
  );
}

export default App;
