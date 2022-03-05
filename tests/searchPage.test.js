import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import {render, screen} from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import {MemoryRouter} from 'react-router-dom';
import {createMemoryHistory} from 'history'
import { useNavigate } from 'react-router-dom';
import {BrowserRouter, Router} from 'react-router-dom';
import SearchPage from '../src/components/Search/SearchPage.jsx';
import SearchBar from '../src/components/Search/SearchBar.jsx';
import SearchResults from '../src/components/Search/SearchResults.jsx';
import exampleData from '../exampleData.js';

const renderWithRouter = (ui, {route = '/'} = {}) => {
  window.history.pushState({}, 'Test page', route)

  return render(ui, {wrapper: BrowserRouter})
}

test('rendering SearchPage Component', () => {
  const route = '/search'
  renderWithRouter(<SearchPage />, {route})

  expect(screen.getByTestId('searchPage-test')).toBeTruthy()
})

test('rendering SearchResult Component', () => {
  const route = '/search'
  renderWithRouter(<SearchResults results={exampleData.movies}/>, {route})

  expect(screen.getByTestId('searchResults-test')).toBeTruthy()
})

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('Rendering Components', () => {
  test('renders SearchBar Component', () => {
    act(() => {
      render(
        <SearchBar/>, container)
    });
    const component = document.getElementsByClassName('searchDiv');
    expect(component.length).toBe(1);
  });

});