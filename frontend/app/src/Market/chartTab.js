import React, { Component } from 'react';
import {Tab, Tabs, Container} from 'react-bootstrap';
import {IndexLineChart} from './chart.js';


export const ChartCategoryTab = ({sevenDaysIndices, allIndices, tabType}) => {
    return (
        <Container>
            <Tabs defaultActiveKey="sevenDays" id={tabType}>
                <Tab eventKey="sevenDays" title="Last 7 Days">
                    <IndexLineChart indices={sevenDaysIndices} chartType="sevenDays"/>
                </Tab>
                <Tab eventKey="all" title="All Time">
                    <IndexLineChart indices={allIndices} chartType="all"/>
                </Tab>
            </Tabs>
        </Container>
    );
}
