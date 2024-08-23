import React, { createContext ,useState,useContext } from 'react'; 
import Context from './context';
import ThemeContext from './create_context';
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'react-bootstrap';
 

export default function Contextapp() {
  const [theme, setTheme] = useState('light'); 
  
  return (
    <div className="App">
      <header className="App-header">
        <ThemeContext.Provider value={theme}>
          <Context />
        </ThemeContext.Provider>
      </header>
    </div>
  );
}

