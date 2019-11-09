import React from 'react';
import './App.css';
import MyNavbar from './Navbar';
import MyTab from './Market/tab';
import { MyPlayerList } from './Player/playerList';
import reus from './images/reus.png';
import pirlo from './images/pirlo.png';
import plinho from './images/plinho.png';
import { Container, Navbar } from 'react-bootstrap';

function App() {
  const players = [{
    image: reus,
    description: "test"
  },
  {
    image: pirlo,
    description: "test"
  },
  {
    image: plinho,
    description: "test"
  },
  {
    image: reus,
    description: "test"
  },
];

  return (
    <div>
      <MyNavbar />
      <br/>

      <Container>
        <Navbar bg="light" variant="light" expand="lg">
          <Navbar.Brand>Index 100</Navbar.Brand>
        </Navbar>
      </Container>
      <br/>
      <MyTab />
      <br/>

      <Container>
        <Navbar bg="light" variant="light" expand="lg">
          <Navbar.Brand>Player Trends</Navbar.Brand>
        </Navbar>
      </Container>
      <br/>
      <MyPlayerList players={players}/>
    </div>
  );
}

export default App;
