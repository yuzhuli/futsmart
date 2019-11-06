import React, { Component } from 'react';
import {Tab, Tabs, Container} from 'react-bootstrap';
import LineExample from './chart.js';


class MyTab extends React.Component {
    render() {
        return (
            <Container>
                <Tabs defaultActiveKey="Monthly" id="market-trends">
                    <Tab eventKey="Monthly" title="Monthly">
                        <LineExample />
                    </Tab>
                    <Tab eventKey="Daily" title="Daily">
                        <LineExample />
                    </Tab>
                    <Tab eventKey="Hourly" title="Hourly" disabled>
                        <LineExample />
                    </Tab>
                </Tabs>
            </Container>
        )
    }
}

export default MyTab;