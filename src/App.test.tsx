import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';
import {state} from "./Redux/State";

test('renders learn react link', () => {
  render(<App state={state} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
