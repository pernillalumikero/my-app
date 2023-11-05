import React from 'react';
import './App.css';
import Banner from './components/Banner';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import { Provider } from 'react-redux';
import store from '../src/components/store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Banner />
        <Outlet />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
