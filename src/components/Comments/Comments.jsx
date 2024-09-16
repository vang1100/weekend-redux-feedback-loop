import { HashRouter as Router, Route, Link } from "react-router-dom";
function Comments({addData, setComments, comments}){
    return(
        <>
        <h1>Comments</h1>
        <Link to ='/' >Main Page</Link>
        <form onSubmit={addData}> 
        <label htmlFor="comments">Any comments you want to leave?</label>
        <input type="text" id="comments" onChange={(event) => setComments(event.target.value)} value={comments}></input> 
            <button type="submit">Next</button>
            
        </form>
        </>
    )
}

export default Comments;