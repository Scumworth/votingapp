//PollItem.js
import React, { Component } from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import PieChartContainer from 'containers/PieChartContainer';
import ShareWithFriends from 'components/ShareWithFriends';

export default class PollItem extends Component {
    render() { 
        const pollOptions = this.props.options.map((option, optionIndex) => {
            return (
                <div>
                    <p>Option: { option.optionTitle }</p>
                    <Button onClick = { () => this.props.handleVote(this.props.itemIndex, optionIndex) }>Vote</Button>
                    <p>votes: { option.votes }</p>
                </div>
            );
        });
        return (
            <div>
                <Row>
                    <Col xs = {6}>
                        <p>by { this.props.author }</p>
                        <p>{ this.props.description }</p>
                        { pollOptions }
                    </Col>
                    <Col xs = {6}>
                        <PieChartContainer 
                            height = "300px"
                            width = "300px"
                            itemData = { this.props.itemData } 
                        />
                        <p>{ this.props.numVotes } votes total.</p>
                        <ShareWithFriends data = { this.props.itemData } />
                    </Col>
                </Row>
            </div>

        );
    }
}
