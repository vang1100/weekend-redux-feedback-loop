import { HashRouter as Router, Route, Link } from "react-router-dom";
function Feeling({addData, setFeeling, feeling}){
    return(
        <>
        <h1>Feeling</h1>
        

        <form onSubmit={addData}> 
            <label htmlFor="feeling">How are you feeling today?</label>
            <input type="number" id="feeling" onChange={(event) => setFeeling(event.target.value)} value={feeling}></input>
            <Link to ='/understanding' ><button>Next</button></Link>
            
            {/* <button type="submit">Next</button> */}

        </form>
        </>
    )
}

export default Feeling;