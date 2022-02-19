

import React from 'react';
import renderer from 'react-test-renderer';
import Horizontal from '../../src/components/Landing/Horizontal.jsx';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';


it('renders correctly', () => {
  const tree = renderer
    .create(<Link page="http://www.facebook.com">Facebook</Link>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});