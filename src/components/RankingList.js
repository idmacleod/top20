import React from 'react';
import RankingDetails from './RankingDetails';

const RankingList = (props) => {
    const list = props.entries.map((entry, index) => {
        return <RankingDetails rank={index + 1} entry={entry} />
    });

    return (
        <ol>
            {list}
        </ol>
    );
}

export default RankingList;