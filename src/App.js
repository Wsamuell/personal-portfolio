import React, { useState } from 'react';
import Nav from './component/Nav'
import Hero from './component/Hero'
import About from './component/About-me'
import './App.css';




function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <About />
    </div>
  );
}

export default App;
