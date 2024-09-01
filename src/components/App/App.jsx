import React from 'react';
import axios from 'axios';
import './App.css';
import Understanding from '../Understanding/Understanding';
import Header from '../Header/Header';
import Support from '../Support/Support';


function App() {

  return (
    <div className='App'>
    
      <Header />
      <Understanding />
      <Support />
    </div>
  );
}

export default App;
