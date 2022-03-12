
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

var AddToWatch = (props) => {
  return(
    <div className="addToWatch">
      <Link to="/Search">
        Find more to watch
        <FontAwesomeIcon  id="faSearchPlus" icon={faSearchPlus} />
      </Link>
    </div>
  )
}

export default AddToWatch;
