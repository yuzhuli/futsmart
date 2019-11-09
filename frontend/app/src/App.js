import React from 'react';
import './App.css';
import MyNavbar from './Navbar';
import MyTab from './Market/tab';
import { MyPlayerList } from './Player/playerList';
import reus from './images/reus.png';
import pirlo from './images/pirlo.png';
import plinho from './images/plinho.png';
import thiago from './images/thiago.png';
import malen from './images/malen.png';
import { Container, Navbar } from 'react-bootstrap';

function App() {
  const players = [{
    image: reus,
    name: "reus",
    price: "3000",
    percent: "50%",
  },
  {
    image: pirlo,
    name: "pirlo",
    price: "2500",
    percent: "30%",
  },
  {
    image: plinho,
    name: "plinho",
    price: "300",
    percent: "10%",
  },
  {
    image: thiago,
    name: "thiago",
    price: "1500",
    percent: "20%",
  },
  {
    image: malen,
    name: "malen",
    price: "1000",
    percent: "5%",
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
          <Navbar.Brand>Golden Player Trends</Navbar.Brand>
        </Navbar>
      </Container>
      <br/>
      <MyPlayerList increasingPlayers={players} decreasingPlayers={players}/>
    </div>
  );
}

export default App;
