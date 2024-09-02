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
  const [feeling, setFeeling] = useState();
  const [understanding, setUnderstanding] = useState();
  const [support, setSupport] = useState();
  const [comments, setComments] = ("");


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

    // POST route

    axios.post('/api/feedback', addToDB)
      .then((response) => {
        console.log(response);

        //clear out inputs

        setFeeling();
      })
      .catch((error) =>{
        console.log(error);
      })
  }


  return (
    <div className='App'>
    
      <Header />

      {/* <label>
          <input type='number'></input>
          <button onClick={() => addData()}>Next</button>
    </label> */}
    
  <form onSubmit={addData}> 
    <label htmlFor="feeling">How are you feeling today?</label>
    <input type="number" id="feeling" onChange={(event) => setFeeling(event.target.value)} value={feeling}></input>

    <label htmlFor="understanding">How well are you understanding the content?</label>
    <input type="number" id="understanding" onChange={(event) => setUnderstanding(event.target.value)} value={understanding}></input>

    <label htmlFor="support">How well are you being supported?</label>
    <input type="number" id="support" onChange={(event) => setSupport(event.target.value)} value={support}></input>

    <label htmlFor="comments">Any comments you want to leave?</label>
    <input type="text" id="comments" onChange={(event) => setComments(event.target.value)} value={comments}></input>

    <button type="submit">Next</button>
  </form>
     
      
    </div>
  );
}

export default App;
