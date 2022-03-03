import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import {render, screen} from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import {MemoryRouter} from 'react-router-dom';
import {createMemoryHistory} from 'history'
import { useNavigate } from 'react-router-dom';
import {BrowserRouter, Router} from 'react-router-dom';

import LoginButton from '../src/components/Landing/LoginButton.jsx';

// let container = null;
// beforeEach(() => {
//   // setup a DOM element as a render target
//   container = document.createElement('div');
//   document.body.appendChild(container);
// });

// afterEach(() => {
//   // cleanup on exiting
//   unmountComponentAtNode(container);
//   container.remove();
//   container = null;
// });

// describe('Rendering Components', () => {
//   test('renders Login Button Component', () => {
//     // act(() => {
//       render(
//         <Router>
//           <LoginButton/>
//         </Router>)
//     // });
//     // const component = document.getElementsByClassName('login-button');
//     // expect(component.length).toBe(1);
//     expect(screen.getByTestId('profile-test')).toBeTruthy()
//   });
// })

const renderWithRouter = (ui, {route = '/'} = {}) => {
  window.history.pushState({}, 'Test page', route)

  return render(ui, {wrapper: BrowserRouter})
}

test('rendering Profile Component', () => {
  const route = '/settings'
  renderWithRouter(<LoginButton />, {route})

  expect(screen.getByTestId('login-button-test')).toBeTruthy()
})
