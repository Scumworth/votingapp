//PollItem.js
import React, { Component } from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import PieChartContainer from 'containers/PieChartContainer';
import ShareWithFriends from 'components/ShareWithFriends';
import { Route } from 'react-router-dom';

export default class PollItem extends Component {
    render() { 
        const pollOptions = this.props.options.map((option, optionIndex) => {
            return (
                <div key = {optionIndex}>
                    <p>Option: { option.optionTitle }</p>
                    <Route render = {({history}) => (

                    <Button onClick = { () => {
                        this.props.handleVote(this.props.itemIndex, optionIndex);
                        history.push('/');
                    } }>Vote</Button>

                    )}/>
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
                            optionsData = { this.props.options } 
                        />
                        <p>{ this.props.numVotes } votes total.</p>
                        <ShareWithFriends id = { this.props.key } />
                    </Col>
                </Row>
            </div>

        );
    }
}
