import react from 'react';
import { useHistory, Link } from 'react-router-dom';
import Form from '../Form/Form';

function Understanding() {

const history = useHistory();

//   const handleClick = () => {
//     alert("got to support");
//     history.push('/support');
//     console.log(history);
//   };

   return(
<>
How well are you understanding the content?

    <label>
          <input type='number'></input>
          <button>Next</button>
    </label>

</>
   )
}

export default Understanding;