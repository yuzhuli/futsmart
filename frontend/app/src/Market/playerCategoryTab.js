import React from 'react'
import { Tabs, Tab} from "react-bootstrap";
// import { TimeRangeTab } from "./timeRangeTab";
import {IndexLineChart} from './chart.js';

// function convert_str_data(str_data) {
//     const arr_of_str = str_data.split(',');
//     const arr_of_tuple = []
//     for (var i = 0; i < arr_of_str.length - 1; i += 2) {
//         arr_of_tuple.push([arr_of_str[i], parseInt(arr_of_str[i + 1])]);
//     }
//     return arr_of_tuple
// }

export const PlayerCategoryTab = ({indices, isLoading}) => {
    return (
        <div>
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
        </div>
    );
}