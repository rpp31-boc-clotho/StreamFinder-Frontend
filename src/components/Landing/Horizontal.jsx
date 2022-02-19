

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons';
import Display from './Display.jsx';
import PlusCard from './PlusCard.jsx';

var Horizontal = function(props) {
  var id="";
  var header = "";
  var list = "";
  var isWatchList = false;
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
    header= "Recommended"
    list = props.recommended;
  }
  else if(props.watched){

    id="watchList";
    header= "Watched"
    list = props.watched;
    isWatchList=true;
  }
  let scroll = function(event, offset, leftOrRight){
    if(leftOrRight === 1) {
      console.log("The left scroll click")
      let element = event.target.parentElement.nextSibling;
      element.scrollLeft = element.scrollLeft + offset;
    }else if (leftOrRight === 2) {
      console.log("The right scroll click")
      let element = event.target.parentElement.previousSibling;
      element.scrollLeft = element.scrollLeft + offset;
    }

  }


  return(

    <div className = "horizontal" id={id}>
        <div className="horizontalHeader">
          {header}
        </div>
        <div className="horizontalScrollBar">
          <FontAwesomeIcon  id="leftScrollIcon" onClick={(event) => scroll(event, -1000, 1)} icon = {faAngleLeft} />
          <Display list={list} isWatchList={isWatchList}/>
          <FontAwesomeIcon  id="rightScrollIcon" onClick={(event) => scroll(event, 1000 , 2)} icon = {faAngleRight} />
          {isWatchList
          ?<div className="plusCard"><PlusCard/></div>
          :<div></div>
          }
        </div>
    </div>
  );
}

export default Horizontal;

// <button className="nextMovies" ><FontAwesomeIcon  onClick={(event) => rightScroll(event)} icon = {faAngleRight} /></button>
// <button className="previousMovies"><FontAwesomeIcon  onClick={(event) => leftScroll(event)} icon = {faAngleLeft} /></button>