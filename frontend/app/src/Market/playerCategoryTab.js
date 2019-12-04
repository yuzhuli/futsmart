import React from 'react'
import { Tabs, Tab} from "react-bootstrap";
// import { TimeRangeTab } from "./timeRangeTab";
import {IndexLineChart} from './chart.js';


export const PlayerCategoryTab = ({indices, isLoading}) => {
    return (
        <Tabs defaultActiveKey="gold" id="player-charts">
            
            <Tab eventKey="gold" title="Gold Player Index">
                <br/>
                {/* <TimeRangeTab sevenDaysIndices={convert_str_data(indices['goldSeven'])} allIndices={convert_str_data(indices['goldAll'])} tabType="gold-tab"/> */}
                <IndexLineChart indices={indices['gold_indices_all']} chartType="all"/>
            </Tab>

            <Tab eventKey="icon" title="Icon Player Index">
                <br/>
                {/* <TimeRangeTab sevenDaysIndices={convert_str_data(indices['iconSeven'])} allIndices={convert_str_data(indices['iconAll'])} tabType="icon-tab"/> */}
                <IndexLineChart indices={indices['icon_indices_all']} chartType="all"/>
            </Tab>

            {/* <Tab eventKey="inform" title="Inform Player Index">
                <TimeRangeTab sevenDaysIndices={convert_str_data(indices['informSeven'])} allIndices={convert_str_data(indices['informAll'])} tabType="inform-tab"/>
            </Tab> */}
        </Tabs>
    );
}