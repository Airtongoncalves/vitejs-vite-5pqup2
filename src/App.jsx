import { useState,useContext } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import NavBar from './components/NavBar';

import { Outlet } from 'react-router-dom';

import {ThemeContext} from  './context/ThemeContext';

function App() {
  const {theme} = useContext(ThemeContext);

  return (
    <div className={`App ${theme === "dark" ? "dark-theme" : ""}`}>
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
