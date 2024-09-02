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

  // varibles for form
  const [feeling, setFeeling] = useState(0);
  const [understanding, setUnderstanding] = useState(0);
  const [support, setSupport] = useState(0);
  const [comments, setComments] = ('');


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

  // AXIOS POST - add to Feedback Data

  const addData = (event) => {
    event.preventDefault();

    //pack up data

    const addToDB = {
      feeling: feeling,
      understanding: understanding,
      support: support,
      comments: comments
    }
  }


  return (
    <div className='App'>
    
      <Header />
    
      <label htmlFor="feeling">
          <input type='number'></input>
          <button>Next</button>
    </label>
     
      
    </div>
  );
}

export default App;
