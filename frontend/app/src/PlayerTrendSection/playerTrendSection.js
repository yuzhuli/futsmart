import React, { useState, useEffect } from "react";
import {SingleTypeSubsection} from "./singleTypeSubsection";

export const PlayerTrendSection = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        fetch("/trendy_players")
        .then(response => response.json())
        .then(data => {
            setIsLoading(false);
            setPlayers(data);
        })
        .catch();
    }, []);

    return (
        <>
        <SingleTypeSubsection 
            playerType="Gold" 
            topFiveUp={players['top-increasing-gold'].slice(0, 5)}
            topFiveDown={players['top-decreasing-gold'].slice(0, 5)}
            isLoading={isLoading}
        />
        <br/>
        <SingleTypeSubsection
            playerType="Icon"
            topFiveUp={players['top-increasing-icon'].slice(0, 5)}
            topFiveDown={players['top-decreasing-icon'].slice(0, 5)}
            isLoading={isLoading}
        />
        </>
    );
}