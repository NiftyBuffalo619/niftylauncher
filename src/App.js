import logo from './logo.svg';
import './index.css';
import React, { useState } from 'react';
import Login from './components/Login';
import { BrowserWindow as Rounter , Switch , Route } from 'react-router-dom';


function App() {
  const [showLogin , setData] = React.useState(false);
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={Login}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;