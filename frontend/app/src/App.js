// import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import MyNavbar from './Navbar';
import {Main} from './Main/main';
import './App.css';


function App() {
  return (
      <div>
        <MyNavbar/>
        <br/>
        <Main />
      </div>
  );
}

export default App;
