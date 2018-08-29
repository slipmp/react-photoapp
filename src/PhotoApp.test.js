import React from 'react';
import ReactDOM from 'react-dom';
import PhotoApp from './PhotoApp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PhotoApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
