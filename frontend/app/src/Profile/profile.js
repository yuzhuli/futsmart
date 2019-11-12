import React from 'react';
import { MyBadge } from './badge';

const pirlo = {
    name: 'pirlo',
    score: '94',
}
export const Profile = () => {
    return (
        <MyBadge player={pirlo}/>
    );
}