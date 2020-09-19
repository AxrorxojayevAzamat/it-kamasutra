import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import SamuraiJS from "./App";

test('renders learn react link', () => {
  // const { getByText } = render(<SamuraiJS />);
  // const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
  const div = document.createElement('div')
  ReactDOM.render(<SamuraiJS/>, div)
  ReactDOM.unmountComponentAtNode(div)
});
