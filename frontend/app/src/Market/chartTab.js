import React, { Component } from 'react';
import {Tab, Tabs, Container} from 'react-bootstrap';
import {IndexLineChart} from './chart.js';


export const ChartCategoryTab = ({sevenDayIndices, allIndices, tabType}) => {
    return (
        <Container>
            <Tabs defaultActiveKey="sevenDay" id={tabType}>
                <Tab eventKey="sevenDay" title="Last 7 Days">
                    <IndexLineChart indices={sevenDayIndices} chartType="sevenDays"/>
                </Tab>
                <Tab eventKey="all" title="All Time">
                    <IndexLineChart indices={allIndices} chartType="all"/>
                </Tab>
            </Tabs>
        </Container>
    );
}
