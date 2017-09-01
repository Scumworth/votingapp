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
        //this.setState({ 
            //data: update(this.state.data, {
                //[itemIndex]: {options: { [optionIndex]: {votes: {$set: 2 }}}}
            //})
        //});

        const updateData = update(this.state.data, {
            [itemIndex]: {options: { [optionIndex]: {votes: {$set: 2 }}}} 
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
        this.loadPollItems();
        setInterval(this.loadPollItems, this.props.pollInterval);
    }

    render() {
        return (
            <PollList 
                data = { this.state.data }
                handleVote = { this.handleVote }
            />
        );
    }
}
