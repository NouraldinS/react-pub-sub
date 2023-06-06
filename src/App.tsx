import React from 'react';

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import About from './pages/aboutPage';
import Dashboard from './pages/dashboardPage';
import Home from './pages/homePage';
import LoginModal from './components/loginModal';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <ul>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/dashboard'>Dashboard</Link></li>
            <li><Link to='/'>Home</Link></li>
          </ul>
        </div>
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
      <LoginModal />
    </BrowserRouter>
  );
}

export default App;
