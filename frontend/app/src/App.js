import React from 'react';
import './App.css';
import MyNavbar from './Navbar';
import MyTab from './Market/tab';
import { MyPlayerList } from './Player/playerList';
import reus from './images/reus.png';

function App() {
  const players = [{
    image: reus,
    description: "test"
  },
  {
    image: reus,
    description: "test"
  }
];

  return (
    <div>
      <MyNavbar />
      <MyTab />
      <MyPlayerList players={players}/>
    </div>
  );
}

export default App;
