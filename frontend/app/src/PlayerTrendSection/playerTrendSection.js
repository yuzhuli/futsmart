import React, { useState, useEffect } from "react";
import {SingleTypeSubsection} from "./singleTypeSubsection";

export const PlayerTrendSection = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/trendy_players")
        .then(response => response.json())
        .then(data => {
            setPlayers(data);
            setIsLoading(false);
        })
        .catch();
    }, []);

    return (
        <>
        {isLoading &&
            <p>loading data</p>
        }
        {!isLoading &&
            <SingleTypeSubsection 
                playerType="Gold" 
                bgImgScr = "https://i.imgur.com/vosofhc.jpg"
                topFiveUp={players["top-increasing-gold"].slice(0, 5)}
                topFiveDown={players["top-decreasing-gold"].slice(0, 5)}
                isLoading={isLoading}
            />
        }
        <br/>
        {!isLoading &&
            <SingleTypeSubsection
                playerType="Icon"
                bgImgScr = "https://i.imgur.com/V3ajLIp.png"
                topFiveUp={players["top-increasing-icon"].slice(0, 5)}
                topFiveDown={players["top-decreasing-icon"].slice(0, 5)}
                isLoading={isLoading}
            />
        }
        </>
    );
}