//PollList.js
import React, { Component } from 'react';
import PollItem from 'components/PollItem';

export default class PollList extends Component {
    render(){
        const pollItemNodes = this.props.data.map((pollItem, itemIndex) => {
            return (
                <PollItem 
                    pollTitle = { pollItem.pollTitle }
                    author = { pollItem.author }
                    key = { pollItem['_id']}
                    description = { pollItem.description }
                    numVotes = { pollItem.numVotes }
                    options = { pollItem.options }
                    handleVote = { this.props.handleVote }
                    itemIndex = { itemIndex }
                />
            );
        })
        return (
            <div>
                <h1>polldata</h1>
                { pollItemNodes }
            </div>
        );
    }
}
