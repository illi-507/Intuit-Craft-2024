import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

//Render:
//1. Snapshot test, 
//2. Conditional rendering, conditions. Check out the first card. 
//3. Search bar, country list, toBeInTheDocument();

//User interaction
//4. click view more button, make sure modal is pop up
//5. Click the X mark, modal disappear
//6. User can input text
//7. CLick search button, search result is showing up as expected. 

//fetch doesn't work in test envi
// need to modify it manually, give it a mockData. 
//jest.spyOn(global, "fetch").

