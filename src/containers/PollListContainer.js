//PollListContainer.js
import React, { Component } from 'react';
import axios from 'axios';
import update from 'immutability-helper';
import PollList from 'components/PollList';

export default class PollListContainer extends Component {

    constructor(props) {
        super(props);
        this.state = { data: [] };
        this.loadPollItems = this.loadPollItems.bind(this);
        this.handleVote = this.handleVote.bind(this);
    }

    loadPollItems() {
        axios.get(this.props.url)
            .then((res) => {
                this.setState({ data: res.data });
            })
            .catch((err) => console.log(err));
    }

    handleVote(itemIndex, optionIndex) {
        const newVoteTotal = this.state.data[itemIndex].options[optionIndex].votes + 1;

        const updateData = update(this.state.data, {
            [itemIndex]: {options: { [optionIndex]: {votes: {$set: newVoteTotal }}}} 
        }); 
        const updateObj = updateData[itemIndex];
        console.log('updateObj')
        console.log(updateObj);
        
        axios.put(this.props.url, {
            id: this.state.data[itemIndex]['_id'],
            updateObj: updateObj,
        })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    componentDidMount() {
        console.log('mounting');
        this.loadPollItems();
        const intervalId = setInterval(this.loadPollItems, this.props.pollInterval);
        this.setState({intervalId: intervalId});
    }

    componentWillUnmount() {
        clearInterval(this.state.intervalId);
    }

    render() {
        return (
            <PollList 
                data = { this.state.data }
                handleVote = { this.handleVote }
                url = { this.props.url } 
            />
        );
    }
}
