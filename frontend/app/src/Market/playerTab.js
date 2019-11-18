import React, { useEffect, useState } from 'react'
import { Container, Tabs, Tab, Nav } from "react-bootstrap";
import { ChartCategoryTab } from "./chartTab";

// const sevenDayIndices = [
//     ['Mon1', 10],
//     ['test', 5],
//     ['Mon2', 30],
//     ['test', 5],
//     ['Tue1', 20],
//     ['test', 5],
//     ['Tue2', 60],
//     ['test', 5],
//     ['Wed1', 30],
//     ['test', 5],
//     ['Wed2', 40],
//     ['test', 5],
//     ['Thurs1', 40],
//     ['test', 5],
//     ['Thurs2', 50],
//     ['test', 5],
//     ['Fri1', 50],
//     ['test', 5],
//     ['Fri2', 40],
//     ['test', 5],
//     ['Sat1', 60],
//     ['test', 5],
//     ['Sat2', 30],
//     ['test', 5],
//     ['Sun1', 20],
//     ['test', 5],
//     ['Sun2', 40],
//     ['test', 5],
// ];

const allIndices = [
    ['Jan', 10],
    ['test', 5],
    ['Feb', 20],
    ['test', 5],
    ['Mar', 30],
    ['test', 5],
    ['Apr', 40],
    ['test', 5],
    ['May', 50],
    ['test', 5],
    ['Jun', 60],
    ['test', 5],
    ['Jul', 30],
    ['test', 5],
    ['Aug', 40],
    ['test', 5],
    ['Sep', 50],
    ['test', 5],
    ['Oct', 20],
    ['test', 5],
    ['Nov', 10],
    ['test', 5],
    ['Dec', 25]
]

export const PlayerCategoryTab = () => {
    const [sevenDaysIndices, setSevenDaysIndices] = useState([]);

    useEffect( () => {
        fetch("http://localhost:3001/api/getGoldSeven").then(response =>
            response.json().then(data => {
                setSevenDaysIndices(data);
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