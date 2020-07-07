import React from 'react';

class RankingContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            entries: [],
            selectedEntry: {} 
        }
    }

    componentDidMount() {
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(res => res.json())
        .then(data => this.setState({entries: data.feed.entry}));
    }

    render() {
        return (
            <h1>iTunes Top 20</h1>
        );
    }
}

export default RankingContainer;