
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

var PlusCard = (props) => {
  return(
    <div className="plusCard">
      Add to WatchList
      <FontAwesomeIcon  id="plusIcon" icon = {faPlus} />
    </div>
  )
}

export default PlusCard;