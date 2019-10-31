import React from 'react';
import './App.css';
import Layout from './Layout/Layout';
import { BrowserRouter } from 'react-router-dom';
import '../assets/js/main.js';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Layout />
      </div>
    </BrowserRouter>
  );
}

export default App;
