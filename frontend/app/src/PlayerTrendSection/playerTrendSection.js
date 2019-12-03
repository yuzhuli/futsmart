import React, { useState, useEffect } from "react";
import {SingleTypeSubsection} from "./singleTypeSubsection";

export const PlayerTrendSection = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/api/trendy_players")
        .then(response => response.json())
        .then(data => {
            setPlayers(data);
            setIsLoading(false);
        })
        .catch(err => {console.log(err);});
    }, []);

    return (
        <>
        {isLoading &&
            <p>loading data</p>
        }
        {!isLoading &&
            <SingleTypeSubsection 
                playerType="Gold" 
                topFiveUp={players["top_increasing_gold"].slice(0, 5)}
                topFiveDown={players["top_decreasing_gold"].slice(0, 5)}
                isLoading={isLoading}
            />
        }
        {!isLoading &&
            <SingleTypeSubsection
                playerType="Icon"
                topFiveUp={players["top_increasing_icon"].slice(0, 5)}
                topFiveDown={players["top_decreasing_icon"].slice(0, 5)}
                isLoading={isLoading}
            />
        }
        </>
    );
}