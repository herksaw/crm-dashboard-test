import React from 'react';
import Header from './components/header';
import Sidebar from './components/sidebar';
import Dashboard from './components/dashboard';
import './app.scss';

const App = () => {
  return (
    <div className="app">
      <Header />

      <Sidebar />

      <Dashboard />
    </div>
  );
}

export default App;
