import { useSelector } from 'react-redux';

function FeedbackList(){

    const feedbacklist = useSelector(store => store.feedbacklist);

    console.log('list from use selector', feedbacklist);

    return (
        <>
        <h2>Feedback List</h2>
        <ul>
      {
      feedbacklist.map((feedback) =>
        <li key={feedback.id}>{feedback.feeling}{feedback.understanding}{feedback.support}{feedback.comments}</li>
      )}
    </ul>
        </>
    )
}

export default FeedbackList;