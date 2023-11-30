// import logo from './logo.svg';
import './App.css';

// import Home from './components/Home';
import Login from './components/Login';
import Startpage from './components/Startpage';
import Signup from './components/Signup';
// import { Routes,Route} from "react-router-dom";
// import { useState } from 'react';
// import Startpage from './components/Startpage';
// import Meal from './components/Meal'
// import './components/style1.css';
import {Routes,Route, Navigate, BrowserRouter} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import RecipeInfo from './components/RecipeInfo';

function App() {
  return (
    <>
  <div className='App'>
    <BrowserRouter>
    <Navbar />
     <Routes> 
      <Route path='/' element={<Startpage />} /> 
       <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} >
        </Route> 
        <Route path='/home' element={<Home />} />
        <Route path='/:MealId' element={<RecipeInfo />} />
    </Routes>
    </BrowserRouter>
    </div>
    </>
  );
}

export default App;


