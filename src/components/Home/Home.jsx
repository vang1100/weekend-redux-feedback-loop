import { HashRouter as Router, Route, Link } from "react-router-dom";
function Home(){
    return (
        <> 
            Welcome. Please click start to fill out form. 
        < br/>
        < br/>
            <Link to ='/feeling'><button>Start</button></Link>
        </>
    )
}

export default Home;