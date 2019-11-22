import React, { useEffect, useState } from 'react'
import { Container, Tabs, Tab, Nav } from "react-bootstrap";
import { ChartCategoryTab } from "./chartTab";

function convert_str_data(str_data) {
    const arr_of_str = str_data.split(',');
    const arr_of_tuple = []
    for (var i = 0; i < arr_of_str.length - 1; i += 2) {
        arr_of_tuple.push([arr_of_str[i], parseInt(arr_of_str[i + 1])]);
    }
    return arr_of_tuple
}

export const PlayerCategoryTab = () => {
    const [goldSevenDaysIndices, setGoldSevenDaysIndices] = useState([]);
    const [goldAllIndices, setGoldAllIndices] = useState([]);

    const [iconSevenDaysIndices, setIconSevenDaysIndices] = useState([]);
    const [iconAllIndices, setIconAllIndices] = useState([]);

    const [informSevenDaysIndices, setInformSevenDaysIndices] = useState([]);
    const [informAllIndices, setInformAllIndices] = useState([]);

    // Fetch index data for gold players
    useEffect( () => {
        fetch("http://localhost:3001/index/gold?type=sevendays").then(response =>
            response.json().then(data => {
                setGoldSevenDaysIndices(convert_str_data(data));
            }))
    }, []);

    useEffect( () => {
        fetch("http://localhost:3001/index/gold?type=all").then(response =>
            response.json().then(data => {
                setGoldAllIndices(convert_str_data(data));
            }))
    }, []);

    // Fetch index data for icon players
    useEffect( () => {
        fetch("http://localhost:3001/index/icon?type=sevendays").then(response =>
            response.json().then(data => {
                setIconSevenDaysIndices(convert_str_data(data));
            }))
    }, []);

    useEffect( () => {
        fetch("http://localhost:3001/index/icon?type=all").then(response =>
            response.json().then(data => {
                setIconAllIndices(convert_str_data(data));
            }))
    }, []);

    // Fetch index data for inform players
    useEffect( () => {
        fetch("http://localhost:3001/index/inform?type=sevendays").then(response =>
            response.json().then(data => {
                setInformSevenDaysIndices(convert_str_data(data));
            }))
    }, []);

    useEffect( () => {
        fetch("http://localhost:3001/index/inform?type=all").then(response =>
            response.json().then(data => {
                setInformAllIndices(convert_str_data(data));
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