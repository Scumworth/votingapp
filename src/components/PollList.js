//PollList.js
import React, { Component } from 'react';
import PollItemContainer from 'containers/PollItemContainer';

export default class PollList extends Component {

    render(){
        const pollItemNodes = this.props.data.map((pollItem, itemIndex) => {
            return (
                <PollItemContainer
                    pollTitle = { pollItem.pollTitle }
                    author = { pollItem.author }
                    key = { pollItem['_id']}
                    id = { pollItem['_id']}
                    description = { pollItem.description }
                    numVotes = { pollItem.numVotes }
                    options = { pollItem.options }
                    handleVote = { this.props.handleVote }
                    itemIndex = { itemIndex }
                    itemData = { pollItem }
                    url = { this.props.url }
                    userId = { this.props.userId }
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
