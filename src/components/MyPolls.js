//MyPolls.js
import React, { Component } from 'react';
import PollItemContainer from 'containers/PollItemContainer';


export default class MyPolls extends Component {
    render() {
        const pollItemNodes = this.props.data.map((pollItem, itemIndex) => {
            return (
                <div>
                    <PollItemContainer
                        pollTitle = { pollItem.pollTitle }
                        author = { pollItem.author }
                        key = { pollItem['_id']}
                        description = { pollItem.description }
                        numVotes = { pollItem.numVotes }
                        options = { pollItem.options }
                        handleVote = { this.props.handleVote }
                        handleDelete = { this.props.handleDelete }
                        itemIndex = { itemIndex }
                        itemData = { pollItem }
                    />
                </div>
            );
        })
        return (
            <div>
                { pollItemNodes }
            </div>
        );
    }
}
