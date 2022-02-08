

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons';
import Display from './Display.jsx';


var Horizontal = function(props) {
  var id="";
  var header = ""
  if(props.popularMovies) {
    id="popularMovies";
    header = "Popular Movies"
  }else if(props.popularTV){
    id="popularTV";
    header= "Popular TV Shows"
  }else if(props.recommended){
    id="popularTV";
    header= "Popular TV Shows"
  }
  else if(props.watched){
    id="popularTV";
    header= "Popular TV Shows"
  }

  return(
    <div className = "horizontal" id={id}>
        <div className="horizontalHeader">
          {header}
        </div>
        <div className="horizontalScrollBar">
          <button className="previousMovies"><FontAwesomeIcon  icon = {faAngleLeft} /></button>
          <Display/>
          <button className="nextMovies" ><FontAwesomeIcon  icon = {faAngleRight} /></button>
        </div>
    </div>
  );
}

export default Horizontal;