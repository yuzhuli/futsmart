import React from 'react';
import {Tab, Tabs, Container} from 'react-bootstrap';
import {IndexLineChart} from './chart.js';


export const TimeRangeTab = ({sevenDaysIndices, allIndices, tabType}) => {
    return (
        <Container>
            <Tabs defaultActiveKey="sevenDays" id={tabType}>
                <Tab eventKey="sevenDays" title="Last 7 Days">
                    <IndexLineChart indices={sevenDaysIndices} chartType="seven-days"/>
                </Tab>
                <Tab eventKey="all" title="All Time">
                    <IndexLineChart indices={allIndices} chartType="all"/>
                </Tab>
            </Tabs>
        </Container>
    );
}
