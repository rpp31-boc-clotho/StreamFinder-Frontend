import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Profile from '../src/components/User_Profile/Profile.jsx';
import Providers from '../src/components/User_Profile/Providers.jsx';
import Subscriptions from '../src/components/User_Profile/Subscriptions.jsx';
import Update from '../src/components/User_Profile/Update.jsx';
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
  test('renders Profile Component', () => {
    act(() => {
      render(<Profile
              isLoggedIn={true}
              providersList={testData.userData.userProfile.subscriptions}
              username={'email12345'}
              email={'email12345@gmail.com'}
              recentlyWatched={[]}
              avatar={'/sflogo2.png'}
              updateSubscriptions={[]}
            />, container);
    });
    const component = document.getElementsByClassName('module_container');
    expect(component.length).toBe(1);
  });