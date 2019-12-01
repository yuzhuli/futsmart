import React, { useEffect, useState }from 'react'
import {PlayerCategoryTab} from './playerCategoryTab'

function create_defaul_indices() {
    const indices = {}
    const categories = ['gold_indices_all', 'icon_indices_all'];
    categories.map(category => {
        if (category.includes('seven')) {
            for (var i = 0; i < 14; i++) {
                indices[category] += '7/' + (i + 1) + ',' + 10 + ',';
                indices[category] += 'test, 10,';
            }
        } else {
            indices[category] = [];
            for (var i = 0; i < 24; i++) {
                indices[category].push({'timestamp': '', 'index_value': 400});
            }
        }
    });
    return indices;
}

export const MarketTrend = () => {
    const default_indices = create_defaul_indices();
    const [indices, setIndices] = useState(default_indices);

    useEffect( () => {
        fetch("http://localhost:3001/indices").then(response =>
            response.json()).then(data => {
                setIndices(data);
                // console.log('data: ', data)
            }).catch(error => console.log('error when fetching data from api: ', error));
    }, []);

    return (
        <div>
        <PlayerCategoryTab indices={indices}/>
        </div>
    );
} 