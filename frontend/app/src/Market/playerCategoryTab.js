import React, { useEffect, useState } from 'react'
import { Container, Tabs, Tab, Nav } from "react-bootstrap";
import { TimeRangeTab } from "./timeRangeTab";

function convert_str_data(str_data) {
    const arr_of_str = str_data.split(',');
    const arr_of_tuple = []
    for (var i = 0; i < arr_of_str.length - 1; i += 2) {
        arr_of_tuple.push([arr_of_str[i], parseInt(arr_of_str[i + 1])]);
    }
    return arr_of_tuple
}

export const PlayerCategoryTab = ({indices}) => {
    return (
        <Container>
            <Tabs defaultActiveKey="gold" id="player-charts">
                <Tab eventKey="gold" title="Gold Player Index">
                    
                    <TimeRangeTab sevenDaysIndices={convert_str_data(indices['goldSeven'])} allIndices={convert_str_data(indices['goldAll'])} tabType="gold-tab"/>
                    
                </Tab>
                <Tab eventKey="icon" title="Icon Player Index">
                    {/* {isLoading && <p>Wait I'm Loading indices for you</p>} */}

                    <TimeRangeTab sevenDaysIndices={convert_str_data(indices['iconSeven'])} allIndices={convert_str_data(indices['iconAll'])} tabType="icon-tab"/>

                </Tab>
                <Tab eventKey="inform" title="Inform Player Index">
                    {/* {isLoading && <p>Wait I'm Loading indices for you</p>} */}

                    <TimeRangeTab sevenDaysIndices={convert_str_data(indices['informSeven'])} allIndices={convert_str_data(indices['informAll'])} tabType="inform-tab"/>

                </Tab>
            </Tabs>
        </Container>
    );
}