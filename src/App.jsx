import React, { useState, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Topbar from './components/Topbar';
import SidebarLeft from './components/SidebarLeft';
import SidebarRight from './components/SidebarRight';
import MainFeed from './components/MainFeed';
import Profile from './Profile';
import Footer from './components/Footer';
import Collaborators from './Collaborators';
import Admin from './Admin';
import './styles/Portfolio.css';

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme === 'dark' ? 'theme-dark' : 'theme-light'}>
        <Router>
          <Routes>
            <Route path="/" element={
              <>
                <Topbar />
                <div className="main-container">
                  <SidebarLeft />
                  <MainFeed />
                  <SidebarRight />
                </div>
                <Footer />
              </>
            } />
            <Route path="/profile" element={<><Profile /><Footer /></>} />
            <Route path="/collaborators" element={<><Collaborators /><Footer /></>} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
