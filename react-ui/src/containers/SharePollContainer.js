//SharePollContainer.js 
import React, { Component } from 'react';
import axios from 'axios';
import update from 'immutability-helper';
import PollItem from './../components/PollItem';

export default class SharePollContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.loadPollById = this.loadPollById.bind(this);
        this.handleVote = this.handleVote.bind(this);
    }

    loadPollById(id) {
        axios.get(this.props.url + '/singlepoll/' + id)
            .then((res) => {
                console.log('loading poll');
                this.setState({ data: res.data });
            })
            .catch((err) => console.log(err));
    }
    
    handleVote(itemIndex, optionIndex) {
        if (this.state.data.voters.indexOf(this.props.userId) !== -1) {
            alert('You have already voted in this poll, fool')
        } 
        else {
            const newVoteTotal = this.state.data.options[optionIndex].votes + 1;
            const newVotersArray = this.state.data.voters.push(this.props.userId);

            const updateData = update(this.state.data, {
                options: { [optionIndex]: {votes: {$set: newVoteTotal}}},
                voters: {$set: newVotersArray}
            });
            axios.put(this.props.url, {
                id: this.state.data['_id'],
                updateObj: updateData,
            })
                .then((res) => {
                    this.loadPollById(this.props.match.params.id);
                    console.log(res);
                })
                .catch((err) => {
                    console.log(err);
                })
        }      
    }
    
    componentWillMount() {
        console.log('will mount');
        this.loadPollById(this.props.match.params.id);
    }

    componentDidMount() {
        this.setState({reload: false});
        console.log('did mount');
    }

    
    render(){
        if (!this.state.data) {
            console.log('loading poll...');
            return (<div>Loading Poll...</div>);
        }
        return (
            <div>
                <PollItem
                    
                    pollTitle = { this.state.data.pollTitle }
                    author = { this.state.data.author }
                    description = { this.state.data.description }
                    options = { this.state.data.options }
                    handleVote = { this.handleVote }
                    url = { this.props.url }
                    key = { this.props.match.params.id }
                    id = { this.props.match.params.id }
                    userId = { this.props.userId }
                   
                />
            </div>
        );
    }
}
