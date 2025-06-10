import React, { useContext } from 'react';

export const ThemeContext = React.createContext('light'); // Step 1: Create context

function DisplayTheme() {
  const theme = useContext(ThemeContext); // Step 2: Use context
  return <p>The theme is {theme}</p>;
}
export default DisplayTheme;