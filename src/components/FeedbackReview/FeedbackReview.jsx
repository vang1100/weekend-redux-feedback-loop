import { useSelector } from 'react-redux';
import { HashRouter as Router, Route, Link } from "react-router-dom";

function FeedbackReview() {

    const feedbacklist = useSelector(store => store.feedbacklist);

    console.log('list from use selector', feedbacklist);

    return (
        <>
        <h2>Submission Review</h2>
        <ul>
      {
      feedbacklist.map((feedback) =>
        <p key={feedback.id}>
            <h3> Submitter # : {feedback.id} </h3>
            Feeling: {feedback.feeling} < br/>
            Understanding: {feedback.understanding} < br/>
            Support: {feedback.support}< br/>
            Comments: {feedback.comments}</p>
      )}
    </ul>
    
    <Link to='/thankyou'><button>EXIT</button></Link>
        </>
    )
}

export default FeedbackReview;