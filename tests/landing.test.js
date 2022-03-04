


import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import TestRenderer from 'react-test-renderer';

import Landing from '../src/components/Landing/Landing.jsx';
import Horizontal from '../src/components/Landing/Horizontal.jsx';
import Header from '../src/components/Landing/Header.jsx';
import Display from '../src/components/Landing/Display.jsx';
import exampleData from '../exampleData.js';

let container = null;
let isLoggedIn = true;
let recentlyWatched=exampleData.movies;
let watchList=exampleData.movies;
let username= "Sangeetha";
let  email= 'sangeetha.prasanth@gmail.com';
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});
afterEach(() => {
  // cleanup on exiting
  //if (container && container.isMounted()) {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  //}

});

describe("Landing Page Component", () => {
  test("renders landing component", () => {
    act(() => {

       render(<Router><Landing
        isLoggedIn={isLoggedIn}
        recentlyWatched={recentlyWatched}
        watchList={watchList} username={username}
        email={email} /></Router>, container);
    });
    const component = document.getElementsByClassName('landingPage');
    expect(component.length).toEqual(1);
    const horizontal = document.getElementsByClassName('horizontal');
    expect(horizontal.length).toEqual(5);
    const header = document.getElementsByClassName('horizontalHeader');
    expect(header.length).toEqual(5);

  });
  test("passing isWatchList value false if popular movies list is passed", () => {

    let testRenderer = TestRenderer.create(
       <Horizontal popularMovies ={exampleData.movies} />
    );
    let testInstance = testRenderer.root;
    expect(testInstance.findByType(Display).props.isWatchList).toBe(false);
  });
  test("movie display component is rendered", () => {

    act(() => {

      render(<Router><Horizontal  recentlyWatched={exampleData.movies}/></Router>, container);
   });
   const component = document.getElementsByClassName('movieDisplay');
   expect(component.length).toEqual(1);


  });
  test("Recently Watched header is displayed", () => {

    act(() => {

      render(<Router><Horizontal  recentlyWatched={exampleData.movies}/></Router>, container);
   });


   expect(container.textContent).toMatch(new RegExp('Recently Watched?'))

  });
  test("Watchlist header is displayed", () => {

    act(() => {

      render(<Router><Horizontal  watchList={exampleData.movies}/></Router>, container);
   });


   expect(container.textContent).toMatch(new RegExp('Watchlist?'))

  });
  test("popular Movies header is displayed", () => {

    act(() => {

      render(<Router><Horizontal  popularMovies={exampleData.movies}/></Router>, container);
   });


   expect(container.textContent).toMatch(new RegExp('Popular Movies?'))

  });
  test("popular TV header is displayed", () => {

    act(() => {

      render(<Router><Horizontal  popularTV={exampleData.movies}/></Router>, container);
   });


   expect(container.textContent).toMatch(new RegExp('Popular TV Shows?'))

  });
  test("recommended header is displayed", () => {

    act(() => {

      render(<Router><Horizontal  recommended={exampleData.movies}/></Router>, container);
   });

   expect(container.textContent).toMatch(new RegExp('Recommended?'))

  });

})