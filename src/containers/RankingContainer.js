import React from 'react';
import RankingList from '../components/RankingList';

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
            <div className="ranking-container">
                <h1>iTunes Top 20</h1>
                <RankingList entries={this.state.entries} />
            </div>
        );
    }
}

export default RankingContainer;