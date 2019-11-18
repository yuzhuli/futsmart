import React, { useEffect, useState } from 'react'
import { Container, Tabs, Tab, Nav } from "react-bootstrap";
import { ChartCategoryTab } from "./chartTab";


export const PlayerCategoryTab = () => {
    const [goldSevenDaysIndices, setGoldSevenDaysIndices] = useState(Array(28).fill(['', 10]));
    const [goldAllIndices, setGoldAllIndices] = useState(Array(24).fill(['', 10]));

    const [iconSevenDaysIndices, setIconSevenDaysIndices] = useState(Array(28).fill(['', 10]));
    const [iconAllIndices, setIconAllIndices] = useState(Array(24).fill(['', 10]));

    const [informSevenDaysIndices, setInformSevenDaysIndices] = useState(Array(28).fill(['', 10]));
    const [informAllIndices, setInformAllIndices] = useState(Array(24).fill(['', 10]));

    // Fetch index data for gold players
    useEffect( () => {
        fetch("http://localhost:3001/index/gold?type=sevendays").then(response =>
            response.json().then(data => {
                setGoldSevenDaysIndices(data);
            }))
    }, []);

    useEffect( () => {
        fetch("http://localhost:3001/index/gold?type=all").then(response =>
            response.json().then(data => {
                setGoldAllIndices(data);
            }))
    }, []);

    // Fetch index data for icon players
    useEffect( () => {
        fetch("http://localhost:3001/index/icon?type=sevendays").then(response =>
            response.json().then(data => {
                setIconSevenDaysIndices(data);
            }))
    }, []);

    useEffect( () => {
        fetch("http://localhost:3001/index/icon?type=all").then(response =>
            response.json().then(data => {
                setIconAllIndices(data);
            }))
    }, []);

    // Fetch index data for inform players
    useEffect( () => {
        fetch("http://localhost:3001/index/inform?type=sevendays").then(response =>
            response.json().then(data => {
                setInformSevenDaysIndices(data);
            }))
    }, []);

    useEffect( () => {
        fetch("http://localhost:3001/index/inform?type=all").then(response =>
            response.json().then(data => {
                setInformAllIndices(data);
            }))
    }, []);


    return (
        <Container>
            <Tabs defaultActiveKey="gold" id="player-charts">
                <Tab eventKey="gold" title="Gold Player Index">
                    <ChartCategoryTab sevenDaysIndices={goldSevenDaysIndices} allIndices={goldAllIndices} tabType="gold-charts"/>
                </Tab>
                <Tab eventKey="icon" title="Icon Player Index">
                    <ChartCategoryTab sevenDaysIndices={iconSevenDaysIndices} allIndices={iconAllIndices} tabType="gold-charts"/>
                </Tab>
                <Tab eventKey="inform" title="Inform Player Index">
                    <ChartCategoryTab sevenDaysIndices={informSevenDaysIndices} allIndices={informAllIndices} tabType="gold-charts"/>
                </Tab>
            </Tabs>
        </Container>
    );
}