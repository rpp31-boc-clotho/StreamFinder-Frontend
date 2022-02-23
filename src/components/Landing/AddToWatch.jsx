
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

var AddToWatch = (props) => {
  return(
    <div>


      <Link to="/Search"><button className="addToWatch">
        Add to WatchList
        <FontAwesomeIcon  id="plusIcon" icon = {faPlus} />
        </button></Link>
    </div>
  )
}

export default AddToWatch;
