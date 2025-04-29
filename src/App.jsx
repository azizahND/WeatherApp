import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Weather from "./pages/weather";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
        <Router>
            <Routes>
                <Route path="/cuaca"  element={<Weather />} />

    
            </Routes>
        </Router>
    </>
  )
}

export default App;
