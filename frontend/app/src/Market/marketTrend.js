import React, { useEffect, useState }from 'react';
import {PlayerCategoryTab} from './playerCategoryTab';
import {API_PREFIX} from '../globalConstants';

function create_defaul_indices() {
    const dummy_indices = {
        'gold_indices_all': [],
        'icon_indices_all': []
    };
    const dummy_index = {
        'timestamp': 'Sep 1',
        'index_value': 400
    };

    for (const key in dummy_indices) {
        for (let i = 0; i < 24; i ++) {
            dummy_indices[key].push(dummy_index);
        }
    }
    return dummy_indices;
}

function process_raw_indices(raw_indices) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    for (const key in raw_indices) {
        raw_indices[key].forEach(element => {
            const date = new Date(element['timestamp'] * 1000);
            const month = months[date.getMonth()];
            const day = date.getDate();
            element['timestamp'] = month + ' ' + day.toString();
            const rounded_index_value = parseInt(element['index_value'].toFixed(0));
            element['index_value'] = rounded_index_value;
        });
    }
}

export const MarketTrend = () => {
    const [indices, setIndices] = useState(create_defaul_indices());

    useEffect( () => {
        fetch(API_PREFIX + "/api/indices").then(response =>
            response.json()).then(data => {
                process_raw_indices(data)
                setIndices(data);
            }).catch(error => console.log('error when fetching data from api: ', error));
    }, []);

    return (
        <div style={{width: '1250px', margin: '0 auto', position: 'relative'}}>
            <br/>
            <div style={{fontWeight: 800, fontSize: '24px', fontFamily: 'sans-serif !important', color: 'rgb(72, 72, 72)'}}>
                Market Index
            </div>
            <br/>
            <PlayerCategoryTab indices={indices}/>
        </div>
    );
} 