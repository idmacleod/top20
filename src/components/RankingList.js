import React from 'react';
import RankingDetails from './RankingDetails';

const RankingList = (props) => {
    const list = props.entries.map((entry, index) => {
        return <RankingDetails key={index} position={index + 1} entry={entry} />
    });

    return (
        <div className="ranking-list">
            {list}
        </div>
    );
}

export default RankingList;