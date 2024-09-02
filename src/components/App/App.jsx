import React from 'react';
import axios from 'axios';
import './App.css';
import Understanding from '../Understanding/Understanding';
import Header from '../Header/Header';
import Support from '../Support/Support';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import {useState, useEffect} from 'react';

//import Form from '../Form/Form';

function App() {

  const [feedback, setFeedback] = useState([]);


  useEffect(() => {
    getFeedback();
  }, []);

  // AXIOS GET - to grab sample data


  const getFeedback = () => {
    axios.get('/api/feedback')
      .then((response) => {
        let feedback = response.data;
        console.log('feedback data', feedback);
        setFeedback(feedback);
      })
      .catch((error) => {
        console.log('GET /api/feedback error:', error)
      })
  }


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
