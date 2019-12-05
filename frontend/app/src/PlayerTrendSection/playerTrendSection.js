import React, { useState, useEffect } from "react";
import {SingleTypeSubsection} from "./singleTypeSubsection";

const PLAYER_TYPE_GOLD = 'Gold';
const PLAYER_TYPE_ICON = 'Icon';

function generate_players() {
    const dummy_players = {
        'top_increasing_gold': [],
        'top_decreasing_gold': [],
        'top_increasing_icon': [],
        'top_decreasing_icon': [],
    };

    for (const key in dummy_players) {
        for (let i = 0; i < 20; i++) {
            const dummy_player = {
                "Name":"",
                "last_name": "",
                "rating":0,
                "position":"",
                "Club":"",
                "main_pace":0,
                "main_shooting":0,
                "main_passing":0,
                "main_dribbling":0,
                "main_defending":0,
                "main_physicality":0,
                "price_diff_percentage":"0%",
                "price_diff":0,
                "price":0,
                "club_img_url":"",
                "nation_img_url":"",
                "player_img_url":"",
                "id": -i,
            };
            dummy_players[key].push(dummy_player);
        }
    }
    return dummy_players;
}

function process_raw_player_data(raw_players) {
    for (const key in raw_players) {
        raw_players[key].forEach(player => {
            const percentage = Math.abs(player['price_diff_percentage']) * 100;
            const rounded_percentage = percentage.toFixed(2) + "%";
            player["price_diff_percentage"] = rounded_percentage
            const name_arr = player['Name'].split(' ');
            player["last_name"] = name_arr[name_arr.length - 1];
        });
    }
}

export const PlayerTrendSection = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [players, setPlayers] = useState(generate_players());

    useEffect(() => {
        fetch("http://localhost:3001/api/trendy_players")
        .then(response => response.json())
        .then(data => {
            process_raw_player_data(data);
            setPlayers(data);
            setIsLoading(false);
        })
        .catch(err => {console.log(err);});
    }, []);

    return (
        <>

        <SingleTypeSubsection 
            playerType={PLAYER_TYPE_GOLD} 
            topFiveUp={players["top_increasing_gold"].slice(0, 5)}
            topFiveDown={players["top_decreasing_gold"].slice(0, 5)}
            isLoading={isLoading}
        />


        <SingleTypeSubsection
            playerType={PLAYER_TYPE_ICON}
            topFiveUp={players["top_increasing_icon"].slice(0, 5)}
            topFiveDown={players["top_decreasing_icon"].slice(0, 5)}
            isLoading={isLoading}
        />

        </>
    );
}