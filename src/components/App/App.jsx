import React from 'react';
import axios from 'axios';
import './App.css';
import Understanding from '../Understanding/Understanding';
import Header from '../Header/Header';
import Support from '../Support/Support';
import { HashRouter as Router, Route, Link } from "react-router-dom";

function App() {

  return (
    <div className='App'>
    
      <Header />

      <Router>
      <Understanding />
         <Route path='/support'>
      <Support />
      </Route>
      </Router>
     
      
    </div>
  );
}

export default App;
