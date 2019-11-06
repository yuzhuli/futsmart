import React from 'react';
import './App.css';
import MyNavbar from './Navbar';
import MyTab from './Market/tab';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div>
      <MyNavbar />
      <MyTab />
    </div>
  );
}

export default App;
