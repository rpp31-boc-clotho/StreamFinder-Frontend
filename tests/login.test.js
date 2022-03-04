import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import {render, screen} from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import {MemoryRouter} from 'react-router-dom';
import {createMemoryHistory} from 'history'
import { useNavigate } from 'react-router-dom';
import {BrowserRouter, Router} from 'react-router-dom';

import LoginButton from '../src/components/Landing/LoginButton.jsx';

const renderWithRouter = (ui, {route = '/'} = {}) => {
  window.history.pushState({}, 'Test page', route)

  return render(ui, {wrapper: BrowserRouter})
}

test('rendering Profile Component', () => {
  const route = '/settings'
  renderWithRouter(<LoginButton />, {route})

  expect(screen.getByTestId('login-button-test')).toBeTruthy()
})
