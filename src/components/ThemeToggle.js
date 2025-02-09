import React, { useContext } from 'react';
import {ThemeContext} from "../context";
import Translate from "./Translate";

const ThemeToggle = () => {
  const { isDarkTheme, setIsDarkTheme } = useContext(ThemeContext);
  
  return (
    <button
      onClick={() => setIsDarkTheme(!isDarkTheme)}
      className={`px-5 py-2 rounded ${
        isDarkTheme 
          ? 'bg-dark text-light border border-light' 
          : 'bg-light text-dark border border-dark'
      }`}
    >
      {isDarkTheme ? <Translate msg={'TOGGLE_LIGHT'}/> : <Translate msg={'TOGGLE_DARK'}/> }
    </button>
  );
};

export default ThemeToggle;