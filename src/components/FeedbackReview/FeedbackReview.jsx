import { useSelector } from 'react-redux';

function FeedbackReview() {

    const feedbacklist = useSelector(store => store.feedbacklist);

    console.log('list from use selector', feedbacklist);

    return (
        <>
        <h2>Feedback List</h2>
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

        </>
    )
}

export default FeedbackReview;