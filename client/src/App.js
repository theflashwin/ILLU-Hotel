import logo from './logo.svg';
import React from 'react'
import './App.css';
import Navbar from './components/Navbar.js'
import Homescreen from './screens/Homescreen';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ReactDOM from "react-dom/client";
import Bookingscreen from './screens/Bookingscreen';
import Loginscreen from './screens/Loginscreen';
import Registerscreen from './screens/Registerscreen';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Routes>
          <Route path="/home" exact element={<Homescreen/>} />
          <Route path="/book/:roomid" exact element={<Bookingscreen/>} />
          <Route path="/login" exact element={<Loginscreen/>} />
          <Route path="/register" exact element={<Registerscreen/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;