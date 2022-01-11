import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';

let posts = [{ message: "Hi, how are you?", likeCounts: 15},
  { message: "It's my first post", likeCounts: 20}]

let dialogs = [{id: 1, name: 'Ann'},
  {id: 2, name: 'Natasha'},
  {id: 3, name: 'Dima'},
  {id: 4, name: 'Max'},
  {id: 5, name: 'Oksana'},
]

let messages = [{id: 1, message: 'hi'},
  {id: 2, message: 'YO'},
  {id: 3, message: 'Yo'},
]

test('renders learn react link', () => {
  render(<App dialogs={dialogs} messages={messages} posts={posts}/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
