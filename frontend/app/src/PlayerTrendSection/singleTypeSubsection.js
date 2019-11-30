import React from "react";
// import {Row, Col, Nav, Navbar } from "react-bootstrap";
// import { MyFigure } from "./figure";
import {MyPlayerRow} from "./playerRow";
import {SectionHeader} from "../Navbar/sectionHeader";

export const SingleTypeSubsection = ({playerType, topFiveUp, topFiveDown, isLoading}) => {
    return (
        <div style={{width: '1250px', margin: '0 auto'}}>
            <SectionHeader header={playerType} />
            <br/>
            <MyPlayerRow playerType={playerType} priceType='Up' topFivePlayers={topFiveUp} isLoadin={isLoading}/>
            <MyPlayerRow playerType={playerType} priceType='Down' topFivePlayers={topFiveDown} isLoadin={isLoading}/>
            {/* <Navbar>
                <Navbar.Brand >Top Up</Navbar.Brand>
                    <Nav className="mr-auto"></Nav>
                    <Nav>
                        <Nav.Link href="/gold-list">See All</Nav.Link>
                    </Nav>
            </Navbar>
            <Row>
                {increasingPlayers.map(player => {
                    return (
                        <Col key={player.name}>
                            <MyFigure player={player}></MyFigure>
                        </Col>
                    );
                })}
            </Row>
            <Navbar>
                <Navbar.Brand >Top Down</Navbar.Brand>
                    <Nav className="mr-auto"></Nav>
                    <Nav>
                        <Nav.Link href="/gold-list">See All</Nav.Link>
                    </Nav>
            </Navbar>
            <Row>
                {decreasingPlayers.map(player => {
                    return (
                        <Col key={player.name} >
                            <MyFigure player={player}></MyFigure>
                        </Col>
                    );
                })}
            </Row> */}
        </div>
    );
}