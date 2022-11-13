import './index.css';
import React, { Suspense, useState } from 'react';
import { lazy } from 'react';
import Login from './components/Login';
import { Routes , Route } from "react-router-dom";
import ShowProfile from './components/ShowProfile';
import Loading from "./components/Loading";


function App() {
 // const [showLogin , setData] = React.useState(false);
  return (
    <>
      <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/home" element={<ShowProfile />}/>
      </Routes>
    </>
  );
}

export default App;