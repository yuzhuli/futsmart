import React, { useEffect, useState }from 'react'
import {PlayerCategoryTab} from './playerCategoryTab'

function create_defaul_indices() {
    const indices = {}
    const categories = ['goldSeven', 'goldAll', 'iconSeven', 'iconAll', 'informSeven', 'informAll'];
    categories.map(category => {
        if (category.includes('Seven')) {
            for (var i = 0; i < 14; i++) {
                indices[category] += '7/' + (i + 1) + ',' + 10 + ',';
                indices[category] += 'test, 10,';
            }
        } else {
            for (var i = 0; i < 12; i++) {
                indices[category] += (i + 1) + '/1' + ',' + 10 + ',';
                indices[category] += 'test, 10,';
            }
        }
    });
    return indices;
}

export const MarketTrend = () => {
    const default_indices = create_defaul_indices();
    const [indices, setIndices] = useState(default_indices);
    const [isLoading, setIsLoading] = useState(true);

    useEffect( () => {
        fetch("http://localhost:3001/indices").then(response =>
            response.json()).then(data => {
                setIsLoading(false);
                setIndices(data);
                console.log('data: ', data)
            }).catch(error => console.log('error when fetching data from api: ', error));
    }, []);

    return (
        <PlayerCategoryTab isLoading={isLoading} indices={indices}/>
    );
} 