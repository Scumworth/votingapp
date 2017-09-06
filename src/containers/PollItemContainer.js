//PollItemContainer.js
import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import PollItem from 'components/PollItem';

export default class PollItemContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            extended: false
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({extended: !this.state.extended});
    }
    render(){
        return (
            <div>
                <div onClick = {this.handleClick}>
                    <h3> {this.props.pollTitle } </h3>
                </div>
                {this.state.extended  
                    ? <PollItem
                        pollTitle = { this.props.pollTitle }
                        author = { this.props.author }
                        key = { this.props.key }
                        description = { this.props.description }
                        numVotes = { this.props.numVotes }
                        options = { this.props.options }
                        handleVote = { this.props.handleVote }
                        itemIndex = { this.props.itemIndex }
                        itemData = { this.props.itemData }
                    />
                    : null
                }
            </div>
        );
    }
}
