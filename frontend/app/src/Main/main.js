import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home } from '../Home/home';
import { PlayerListSection } from '../PlayerList/playerListSection';
import { Profile } from '../Profile/profile';

export const Main = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/list/:type" component={PlayerListSection}></Route>
            <Route path="/profile/:playerid" component={Profile}></Route>
        </Switch>
    );
}