
import { HashRouter as Router, Route, Link } from "react-router-dom";

function Understanding({addData, setUnderstanding, understanding}){
    return (
        <>
        <h1>Understanding</h1>
        <Link to ='/' ><button>Main Page</button></Link>
        <form onSubmit={addData}> 
        <label htmlFor="understanding">How well are you understanding the content?</label>
        <input type="number" id="understanding" onChange={(event) => setUnderstanding(event.target.value)} value={understanding}></input>
        <Link to ='/support' ><button>Next</button></Link>
        </form>
        </>
        
    )
}

export default Understanding;