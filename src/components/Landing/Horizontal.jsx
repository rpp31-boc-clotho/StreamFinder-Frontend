

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons';
import Display from './Display.jsx';


var Horizontal = function(props) {
  var id="";
  var header = "";
  var list = "";
  if(props.popularMovies) {
    id="popularMovies";
    header = "Popular Movies";
    list = props.popularMovies;
  }else if(props.popularTV){
    id="popularTV";
    header= "Popular TV Shows"
    list = props.popularTV;
  }else if(props.recommended){
    id="recommended";
    header= "Recommended List"
    list = props.recommended;
  }
  else if(props.watched){
    console.log("inside THIS");
    id="watchList";
    header= "Watched"
    list = props.watched;
  }
  let leftScroll = function(event, offset){
    console.log(event);
    console.log(event.target.parentElement.nextSibling);
    let element = event.target.parentElement.nextSibling;
    element.scrollLeft = element.scrollLeft + offset;

  }
  let rightScroll = function(event, offset){
    console.log(event.target.parentElement.previousSibling);
    let element = event.target.parentElement.previousSibling;
    console.log(element);
    element.scrollLeft = element.scrollLeft + offset;
  }

  return(

    <div className = "horizontal" id={id}>
        <div className="horizontalHeader">
          {header}
        </div>
        <div className="horizontalScrollBar">
          <FontAwesomeIcon  id="leftScrollIcon" onClick={(event) => leftScroll(event, -1000)} icon = {faAngleLeft} />
          <Display list={list} />
          <FontAwesomeIcon  id="rightScrollIcon" onClick={(event) => rightScroll(event, 1000)} icon = {faAngleRight} />
        </div>
    </div>
  );
}

export default Horizontal;

// <button className="nextMovies" ><FontAwesomeIcon  onClick={(event) => rightScroll(event)} icon = {faAngleRight} /></button>
// <button className="previousMovies"><FontAwesomeIcon  onClick={(event) => leftScroll(event)} icon = {faAngleLeft} /></button>