//MyPolls.js
import React, { Component } from 'react';
import PollItemContainer from 'containers/PollItemContainer';

export default class MyPolls extends Component {
    render() {
        const pollItemNodes = this.props.data.map((pollItem, itemIndex) => {
            return (
                <PollItemContainer
                    pollTitle = { pollItem.pollTitle }
                    author = { pollItem.author }
                    key = { pollItem['_id']}
                    description = { pollItem.description }
                    numVotes = { pollItem.numVotes }
                    options = { pollItem.options }
                    handleVote = { this.props.handleVote }
                    itemIndex = { itemIndex }
                    itemData = { pollItem }
                />
            );
        })
        return (
            <div>
                { pollItemNodes }
            </div>
        );
    }
}
