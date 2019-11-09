import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MyFigure } from "./figure";

// export const MyPlayerList = ({players}) => {
//     return (
//         // <Container style={{ height: "200px", overflowY: 'scroll' }}>
//         <Container style={{ height: "200px", width: "800px", overflowX: 'scroll'}}>
//             <Row>
//                 {players.map(pp => {
//                     return (
//                         <Col xs={6} md={4}>
//                             <MyFigure player={pp}></MyFigure>
//                         </Col>
//                     );
//                 })}
//             </Row>
//         </Container>
//     );
// }

class MyPlayerList extends React.Component {
    constructor(props) {
        super(props);
        this.currentPlayer = 0;
    }
    
    plusSlides() {
        this.currentPlayer += 1
        showPlayer(this.currentPlayer);
    }
    
    currentSlide() {
        this.currentPlayer -= 1
        showPlayer(this.currentPlayer);
    }
    
    showPlayer(n) {
      var i;
    //   var players = document.getElementsByClassName("player");
      if (n > this.props.players.length) {this.currentPlayer = 0}
      if (n < 0) {this.currentPlayer = this.props.players.length}
      for (i = 0; i < players.length; i++) {
        players[i].className = players[i].className.replace(" active", "");
      }
      players[slideIndex-1].className += " active";
    }
}