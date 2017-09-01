//PollItem.js
import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export default class PollItem extends Component {
    render(){
        const pollOptions = this.props.options.map((option, optionIndex) => {
        const itemIndex = this.props.itemIndex;
            return ( 
                <div>
                    <p>Option:{ option.optionTitle }</p>
                    <Button onClick = { () => this.props.handleVote(itemIndex, optionIndex) }>Vote</Button>
                    <p>votes: { option.votes }</p>
                </div>
            );
        });
        return (
            <div>
                <h3>{ this.props.pollTitle }</h3>
                <p>by { this.props.author }</p>
                <p>{ this.props.description }</p>
                { pollOptions }
                <p>{ this.props.numVotes } votes total.</p>
                 
            </div>
        );
    }
}
