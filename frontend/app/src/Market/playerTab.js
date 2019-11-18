import React, { useEffect, useState } from 'react'
import { Container, Tabs, Tab, Nav } from "react-bootstrap";
import { ChartCategoryTab } from "./chartTab";


export const PlayerCategoryTab = () => {
    const [sevenDaysIndices, setSevenDaysIndices] = useState([]);
    const [allIndices, setAllIndices] = useState([]);

    useEffect( () => {
        fetch("http://localhost:3001/index/gold?type=sevendays").then(response =>
            response.json().then(data => {
                setSevenDaysIndices(data);
            }))
    }, []);

    useEffect( () => {
        fetch("http://localhost:3001/index/gold?type=all").then(response =>
            response.json().then(data => {
                setAllIndices(data);
            }))
    }, []);


    console.log(sevenDaysIndices);

    return (
        <Container>
            <Tabs defaultActiveKey="gold" id="player-charts">
                <Tab eventKey="gold" title="Gold Player Index">
                    <ChartCategoryTab sevenDayIndices={sevenDaysIndices} allIndices={allIndices} tabType="gold-charts"/>
                </Tab>
                <Tab eventKey="icon" title="Icon Player Index">
                    <ChartCategoryTab sevenDayIndices={sevenDaysIndices} allIndices={allIndices} tabType="gold-charts"/>
                </Tab>
                <Tab eventKey="inform" title="Inform Player Index">
                    <ChartCategoryTab sevenDayIndices={sevenDaysIndices} allIndices={allIndices} tabType="gold-charts"/>
                </Tab>
            </Tabs>
        </Container>
    );
}