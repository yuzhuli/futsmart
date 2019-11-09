import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MyFigure } from "./figure";

export const MyPlayerList = ({increasingPlayers, decreasingPlayers}) => {
    return (
        <Container>
            <h5 style={{backgroundColor: "grey"}}>Increasing</h5>
            <Row>
                {increasingPlayers.map(player => {
                    return (
                        <Col key={player.name}>
                            <MyFigure player={player}></MyFigure>
                        </Col>
                    );
                })}
            </Row>
            <h5 style={{backgroundColor: "grey"}}>Decreasing</h5>
            <Row>
                {decreasingPlayers.map(player => {
                    return (
                        <Col key={player.name} >
                            <MyFigure player={player}></MyFigure>
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );
}

// class MyPlayerList extends React.Component {
//     constructor(props) {
//         super(props);
//         this.currentPlayer = 0;
//     }
    
//     plusSlides() {
//         this.currentPlayer += 1
//         showPlayer(this.currentPlayer);
//     }
    
//     currentSlide() {
//         this.currentPlayer -= 1
//         showPlayer(this.currentPlayer);
//     }
    
//     showPlayer(n) {
//       var i;
//     //   var players = document.getElementsByClassName("player");
//       if (n > this.props.players.length) {this.currentPlayer = 0}
//       if (n < 0) {this.currentPlayer = this.props.players.length}
//       for (i = 0; i < players.length; i++) {
//         players[i].className = players[i].className.replace(" active", "");
//       }
//       players[slideIndex-1].className += " active";
//     }
// }