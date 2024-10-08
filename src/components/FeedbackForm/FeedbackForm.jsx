import { useState } from 'react';
import axios from 'axios';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Home from '../Home/Home';
import FeedbackReview from '../FeedbackReview/FeedbackReview';
import ThankYou from '../ThankYou/ThankYou';


function FeedbackForm({getFeedback}) {

    const [feeling, setFeeling] = useState('');
    const [understanding, setUnderstanding] = useState('');
    const [support, setSupport] = useState('');
    const [comments, setComments] = useState('');
    
    // / AXIOS POST - add to Feedback Data

  const addData = (event) => {
    event.preventDefault();

    // pack up data

    const addToDB = {
      feeling: feeling,
      understanding: understanding,
      support: support,
      comments: comments
    };

    // POST route

    axios.post('/api/feedback', addToDB)
      .then((response) => {
        console.log(response);

        //clear out inputs
        setFeeling('');
        setUnderstanding('');
        setSupport('');
        setComments('');
        
        getFeedback();
      })
      .catch((error) =>{
        console.log(error);
      })
  }

return (
        <>
    <Router>
    
        <Route path='/' exact>
            <Home/>
        </Route>

        <Route path='/feeling'>
            <Feeling addData={addData} setFeeling={setFeeling} feeling={feeling} />
        </Route>

        <Route path='/understanding'>
            <Understanding addData={addData} setUnderstanding={setUnderstanding} understanding={understanding}/>
        </Route>

        <Route path='/support'>
            <Support addData={addData} setSupport={setSupport} support={support} />
        </Route>

        <Route path='/comments'>
            <Comments addData={addData} setComments={setComments} comments={comments} />
        </Route>

        <Route path='/review'>
            <FeedbackReview />
        </Route>

        <Route path ='/thankyou'>
            <ThankYou/>
        </Route>
    </Router>
    
    
   
    
    
    
   {/* <form onSubmit={addData}>  */}
    

    {/* <label htmlFor="feeling">How are you feeling today?</label>
    <input type="number" id="feeling" onChange={(event) => setFeeling(event.target.value)} value={feeling}></input> */}

    {/* <label htmlFor="understanding">How well are you understanding the content?</label>
    <input type="number" id="understanding" onChange={(event) => setUnderstanding(event.target.value)} value={understanding}></input>

    <label htmlFor="support">How well are you being supported?</label>
    <input type="number" id="support" onChange={(event) => setSupport(event.target.value)} value={support}></input>

    <label htmlFor="comments">Any comments you want to leave?</label>
    <input type="text" id="comments" onChange={(event) => setComments(event.target.value)} value={comments}></input> */}

    {/* <button type="submit">Next</button> */}
  {/* </form>  */}
     
        </>
    )
}

export default FeedbackForm;