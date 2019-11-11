import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home } from '../Home/home';
import { PlayerList } from '../Player/playerList';
import { Profile } from '../Player/profile';

export const Main = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/gold-list" component={PlayerList}></Route>
            <Route path="/profile" component={Profile}></Route>
        </Switch>
    );
}