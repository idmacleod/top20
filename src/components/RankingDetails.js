import React from 'react';

const RankingDetails = (props) => {
    return (
        <li>{props.entry['im:name'].label}</li>
    );
}

export default RankingDetails;