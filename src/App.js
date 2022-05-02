import React from 'react';
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Login from './components/login';
import SignUp from './components/signUp';

function App() {
  return (
    <div className='App'>
      <Routes >
        <Route exact path='/' element = {<Home/>} />
        <Route exact path='/login' element = {<Login/>} />
        <Route exact path='/signUp' element = {<SignUp/>} />
        {/* <Route exact path='/' element = {<Home/>} /> */}

      </Routes>
    </div>
  );
}

export default App;
