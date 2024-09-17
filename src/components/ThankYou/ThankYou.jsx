import { HashRouter as Router, Route, Link } from "react-router-dom";

function ThankYou(){
    return(
        <>
        <h1>
         Thank you for your feedback!!
         <p> Please click <Link to='/'>HERE</Link> to go back to main page.</p> 
        </h1>
       
        
        </>
    )
}

export default ThankYou;