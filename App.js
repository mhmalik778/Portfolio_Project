
import React from 'react';
import './App.css'; 
import Header from './components/Header';
import Skills from './components/Skills';
import About from './components/About';
import Services from './components/Services';
import Footer from './components/Footer';
import Scroll from './components/Scroll';

const App = () => {
  return (
    <div>
      
      <Header/>
      <About/>
      <Skills/>
      <Services/>
      <Scroll/>
      <Footer/>

      
    </div>
  );
};

export default App;
