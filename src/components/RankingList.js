import React from 'react';

const RankingList = (props) => {
    const list = props.entries.map((entry, index) => {
        return <li key={index}>{entry['im:name'].label}</li>
    });

    return (
        <ul>
            {list}
        </ul>
    );
}

export default RankingList;