import React from 'react';

const RankingDetails = (props) => {
    const position = props.position;
    const title = props.entry['im:name'].label;
    const artist = props.entry['im:artist'].label;
    const image = props.entry['im:image'][2].label;
    const category = props.entry.category.attributes.label;
    const clip = props.entry.link[1].attributes.href;

    return (
        <div className="ranking-details">
            <h1 className="position">{position}</h1>
            <img src={image} alt={title} />
            <ul>
                <li className="title">{title}</li>
                <li className="artist">{artist} ~ {category}</li>
                <li><audio controls src={clip} crossOrigin="anonymous"></audio></li>
            </ul>
        </div>
    );
}

export default RankingDetails;