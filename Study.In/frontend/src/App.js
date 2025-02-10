import './App.css';
import "./index.css";
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp';
import Login from './components/Login';

// import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          {/* <Route element={<PrivateRoute/>}>/</Route> */}
          <Route path= "/signUp" element={<SignUp/>}/>
          <Route path='/login' element={<Login/>}/>

          
        </Routes>      
      </BrowserRouter>
    
    
    </div>
  );
}

export default App;
