import { HashRouter as Router, Route, Link } from "react-router-dom";

function Support({addData, setSupport, support}){
    return (
        <>
    <h1>Support</h1>
    
    
    <form onSubmit={addData}> 
    <label htmlFor="support">How well are you being supported?</label>
    <input type="number" id="support" onChange={(event) => setSupport(event.target.value)} value={support}></input>
            
    <Link to ='/comments' ><button>Next</button></Link>
            
        </form>
        </>
    )
}

export default Support;