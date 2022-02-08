

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
  let leftScroll = function(event){
    console.log(event);
    console.log(event.target.parentElement.nextSibling);
  }
  let rightScroll = function(event){
    console.log(event.target.parentElement.previousSibling);
  }
  return(
    <div className = "horizontal" id={id}>
        <div className="horizontalHeader">
          {header}
        </div>
        <div className="horizontalScrollBar">
          <FontAwesomeIcon  id="leftScrollIcon" onClick={(event) => leftScroll(event)} icon = {faAngleLeft} />
          <Display/>
          <FontAwesomeIcon  id="rightScrollIcon" onClick={(event) => rightScroll(event)} icon = {faAngleRight} />
        </div>
    </div>
  );
}

export default Horizontal;

// <button className="nextMovies" ><FontAwesomeIcon  onClick={(event) => rightScroll(event)} icon = {faAngleRight} /></button>
// <button className="previousMovies"><FontAwesomeIcon  onClick={(event) => leftScroll(event)} icon = {faAngleLeft} /></button>