//PollItemContainer.js
import React, { Component } from 'react';
import { Button, Well } from 'react-bootstrap';
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
                    <Well> {this.props.pollTitle } </Well>
                </div>
                {this.state.extended  
                    ? <PollItem
                        url = { this.props.url }
                        pollTitle = { this.props.pollTitle }
                        author = { this.props.author }
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
