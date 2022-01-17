import './App.css';
import React from 'react'
import Home from './pages/Home/Home'
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
        <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}>
        </Route>
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
