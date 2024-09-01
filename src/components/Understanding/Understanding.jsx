import react from 'react';
import { useHistory, Link } from 'react-router-dom';

function Understanding() {

const history = useHistory();

  const handleClick = () => {
    alert("got to support");
    history.push('/support');
    console.log(history);
  };

   return(
<>
    Understanding jsx
    <button onClick={handleClick}>Next</button>
    <Link to='/support'>Link to support</Link>
</>
   )
}

export default Understanding;