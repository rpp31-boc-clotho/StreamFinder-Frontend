import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import {render, screen} from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import {MemoryRouter} from 'react-router-dom';
import {createMemoryHistory} from 'history'
import { useNavigate } from 'react-router-dom';
import {BrowserRouter, Router} from 'react-router-dom';

import Profile from '../src/components/User_Profile/Profile.jsx';
import Providers from '../src/components/User_Profile/Providers.jsx';
import Subscriptions from '../src/components/User_Profile/Subscriptions.jsx';
import Update from '../src/components/User_Profile/Update.jsx';
import Activity from '../src/components/User_Profile/Activity.jsx';
import testData from './testData.js';

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
  test('renders Subscriptions Component', () => {
    act(() => {
      render(
        <Subscriptions providersList={testData.userData.userProfile.subscriptions}/>, container)
    });
    const component = document.getElementsByClassName('subscribedProviders');
    expect(component.length).toBe(1);
  });

  test('renders Providers Component', () => {
    act(() => {
      const providers = Object.keys(testData.userData.userProfile.subscriptions)
      render(
        <div>
            {providers.map((providers, i) =>
              <Providers key={i} provider={providers} status={testData.userData.userProfile.subscriptions[providers]} />
            )}
        </div>
      , container)
    })
    const component = document.getElementsByClassName('providerLabel');
    expect(component.length).toBe(11);
  });

  test('renders Update Component', () => {
    act(() => {
      render(
        <Update show={true} providersList={testData.userData.userProfile.subscriptions} />, container)
    });
    const component = document.getElementsByClassName('modal');
    expect(component.length).toBe(1);
  });

})

const renderWithRouter = (ui, {route = '/'} = {}) => {
  window.history.pushState({}, 'Test page', route)

  return render(ui, {wrapper: BrowserRouter})
}

test('rendering Profile Component', () => {
  const route = '/settings'
  renderWithRouter(<Profile />, {route})

  expect(screen.getByTestId('profile-test')).toBeTruthy()
})

test('rendering Activity Component', () => {
  const route = '/settings'
  renderWithRouter(<Activity title={'Testing'} id={1} type={'movie'} />, {route})

  expect(screen.getByTestId('activity-test')).toBeTruthy()
})

