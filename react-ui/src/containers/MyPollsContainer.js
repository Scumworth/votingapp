//MyPollsContainer.js
import React, { Component } from 'react';
import axios from 'axios';
import update from 'immutability-helper';
import MyPolls from 'components/MyPolls';


export default class MyPollsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
        this.loadUserPolls = this.loadUserPolls.bind(this);
        this.handleVote = this.handleVote.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    loadUserPolls() {
        axios.get(`${this.props.url}/${this.props.userId}`)
            .then((res) => {
                console.log(res);
                this.setState({ data: res.data });
            })
            .catch((err) => console.log(err));
    }

    handleVote(itemIndex, optionIndex) {
        if (this.state.data[itemIndex].voters.indexOf(this.props.userId) !== -1) {
            alert('You have already voted in this poll, fool')
        }          
        else {
            const newVoteTotal = this.state.data[itemIndex].options[optionIndex].votes + 1;
            const newVotersArray = this.state.data[itemIndex].voters.push(this.props.userId);

            const updateData = update(this.state.data, {
                [itemIndex]: {options: { [optionIndex]: {votes: {$set: newVoteTotal }}}},
                voters: {$set: newVotersArray}
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
    }

    handleDelete(itemIndex) {
        const id = this.state.data[itemIndex]['_id'];
        axios.delete(`${this.props.url}/singlepoll/${id}`);
        this.loadUserPolls();
    }

    componentDidMount() {
        this.loadUserPolls();
        const intervalId  = setInterval(this.loadUserPolls, this.props.pollInterval);
        this.setState({intervalId: intervalId});
    }

    componentWillUnmount() {
        clearInterval(this.state.intervalId);
    }

    

    render() {
        return (
            <MyPolls
                data = { this.state.data }
                handleVote = { this.handleVote }
                handleDelete = { this.handleDelete }
                userId = { this.props.userId }
            />
        );
    }
}
