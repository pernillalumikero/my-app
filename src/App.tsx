import React from 'react';
import './App.css';
import Banner from './components/Banner';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Banner />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
