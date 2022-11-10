import logo from './logo.svg';
import './index.css';
import React, { useState } from 'react';
import Login from './components/Login';
import { Routes , Route } from "react-router-dom";
import { signInWithGoogle } from './firebase';


function App() {
 // const [showLogin , setData] = React.useState(false);
  return (
    <>
      <button onClick={signInWithGoogle}>Sign in With Google</button>
      <Routes>
          <Route path="/" component={Login}/>
      </Routes>
    </>
  );
}

export default App;