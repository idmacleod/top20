import React, { useState, useEffect } from 'react';
import RankingList from '../components/RankingList';

const RankingContainer = (props) => {
    const [entries, setEntries] = useState([]);

    useEffect(() => {
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
            .then(res => res.json())
            .then(data => setEntries(data.feed.entry));
    }, []);

    return (
        <div className="ranking-container">
            <h1>iTunes UK Top 20 ~ ~ ~</h1>
            <RankingList entries={entries} />
        </div>
    );
}

export default RankingContainer;