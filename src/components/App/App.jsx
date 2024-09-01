import React from 'react';
import axios from 'axios';
import './App.css';
import Understanding from '../Understanding/Understanding';
import Header from '../Header/Header';
import Support from '../Support/Support';
import { HashRouter as Router, Route, Link } from "react-router-dom";
//import Form from '../Form/Form';

function App() {

  return (
    <div className='App'>
    
      <Header />
      <Understanding />
      <Support />
     

      {/* <Router>
      <Understanding />
         <Route path='/support'>
      <Support />
      </Route>
      </Router> */}
     
      
    </div>
  );
}

export default App;
