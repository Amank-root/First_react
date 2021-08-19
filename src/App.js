// import logo from './logo.svg';
// import './App.css';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './Components/Hero';
// import Footer from './Components/Footer';
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
      <Navbar title="React" />
      <Hero />
      {/* <Footer title="Footer" /> */}
    </>
      );
}

      export default App;
