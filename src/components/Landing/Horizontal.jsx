

import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons';
import Display from './Display.jsx';
import AddToWatch from './AddToWatch.jsx';
import $ from 'jquery';

var Horizontal = function(props) {
  /*var id="";
  var header = "";
  var list = "";
  var isWatchList = false;*/
  const hideStyle = {"visibility":"hidden"};
  const visibleStyle = {"visibility":"visible"};
  const rightOffset = 700;
  const leftOffset = -700;
  const [id, setId] = useState("");
  const [header, setHeader] = useState("");
  const [list, setList] = useState([]);
  const [isWatchList, setIsWatchList] = useState(false);
  const [leftScrollStyle, setLeftScrollStyle] = useState({});
  const [rightScrollStyle, setRightScrollStyle] = useState({});
  const [elementLeftScroll, setElementLeftScroll] = useState(0);
  const [maxScrollWidth, setMaxScrollWidth] = useState(0);

  let chooseStyle = (inputList) => {
    if(inputList.length <= 6) {
      setRightScrollStyle(hideStyle, [list]);
    }else {
      setRightScrollStyle(visibleStyle, [list]);
    }
  }
  let calculateScrollWidth = () => {
    let selector = "#"+id+" div.movieDisplay";
    let maxScroll = $(selector)[0].scrollWidth - $(selector)[0].clientWidth;
    setMaxScrollWidth(maxScroll);
  }
  useEffect(() => {
    setLeftScrollStyle(hideStyle);
   if(props.popularMovies) {
      setId("popularMovies");
      setHeader("Popular Movies");
      setList(props.popularMovies);
      chooseStyle(props.popularMovies);
    }else if(props.popularTV){
      setId("popularTV");
      setHeader("Popular TV Shows");
      setList(props.popularTV);
      chooseStyle(props.popularTV);
      console.log('props.popularTV.length:',props.popularTV.length);
    }else if(props.recommended){
      setId("recommended");
      setHeader("Recommended");
      setList(props.recommended);
      chooseStyle(props.recommended);
    }
    else if(props.watched){
      setId("watchList");
      setHeader("Watch List");
      setList(props.watched);
      setIsWatchList(true);
      chooseStyle(props.watched);
    }

  }, [props]);
  useEffect(() => {

    console.log('elementLeftScroll:',elementLeftScroll);
    if(elementLeftScroll <= 0) {
      setLeftScrollStyle(hideStyle);
      setRightScrollStyle(visibleStyle);
    } else if(elementLeftScroll >= maxScrollWidth){
      setRightScrollStyle(hideStyle);
      setLeftScrollStyle(visibleStyle);
    } else if(elementLeftScroll > 0 && elementLeftScroll < maxScrollWidth) {
      setLeftScrollStyle(visibleStyle);
      setRightScrollStyle(visibleStyle);
    }
  }, [elementLeftScroll]);
  let scroll = function(event, offset) {

      let selector = "#"+id+" div.movieDisplay";
      let element = $(selector);
      let scrollLeftThrJQuery = element.scrollLeft();
      scrollLeftThrJQuery += offset;
      element.scrollLeft(scrollLeftThrJQuery);
      console.log('scrollLeftThrJQuery:',scrollLeftThrJQuery);
      setElementLeftScroll(scrollLeftThrJQuery);
      if(JSON.stringify(hideStyle) === JSON.stringify(leftScrollStyle)) {
        calculateScrollWidth();
      }

  }
  /*let scroll1 = function(event, offset, leftOrRight){
    if(leftOrRight === 1) {
      /*console.log("The left scroll click")
      let element = event.target.parentElement.nextSibling;
      element.scrollLeft = element.scrollLeft + offset;
      console.log('element.scrollLeft',element.scrollLeft);

      if (element.scrollLeft >= 0) {
        setElementLeftScroll(element.scrollLeft);
      }*/
      /*let selector = "#"+id+" div.movieDisplay";
      let element = $(selector);
      let scrollLeftThrJQuery = element.scrollLeft();
      scrollLeftThrJQuery += offset;
      element.scrollLeft(scrollLeftThrJQuery);
      if(scrollLeftThrJQuery >= 0) {
        setElementLeftScroll(scrollLeftThrJQuery);
      }
    }else if (leftOrRight === 2) {
     let selector = "#"+id+" div.movieDisplay";
     let element = $(selector);
     let scrollLeftThrJQuery = element.scrollLeft();
      scrollLeftThrJQuery += offset;
      element.scrollLeft(scrollLeftThrJQuery);
      if(scrollLeftThrJQuery >= 0) {
        setElementLeftScroll(scrollLeftThrJQuery);
      }*/
      //let element = event.target.parentElement.previousSibling;
      //element.scrollLeft = element.scrollLeft + offset;
      //console.log('element.scrollLeft',element.scrollLeft);
      //console.log('width:',element.width());
      //console.log(event);

      /*if (element.scrollLeft >= 0) {
        setElementLeftScroll(element.scrollLeft);
      }*/

   // }


  //}


  return(

    <div className = "horizontal" id={id}>
        <div className="horizontalHeader">
          {header}
        </div>
        <div className="horizontalScrollBar">
          <FontAwesomeIcon  style={leftScrollStyle} id="leftScrollIcon" onClick={(event) => scroll(event, leftOffset)} icon = {faAngleLeft} />
          <Display list={list} isWatchList={isWatchList}/>
          <FontAwesomeIcon  style={rightScrollStyle} id="rightScrollIcon" onClick={(event) => scroll(event, rightOffset)} icon = {faAngleRight} />
          {isWatchList
          ?<div className="addToWatch"><AddToWatch/></div>
          :<div></div>
          }
        </div>
    </div>
  );
}


export default Horizontal;

// <button className="nextMovies" ><FontAwesomeIcon  onClick={(event) => rightScroll(event)} icon = {faAngleRight} /></button>
// <button className="previousMovies"><FontAwesomeIcon  onClick={(event) => leftScroll(event)} icon = {faAngleLeft} /></button>