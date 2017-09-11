//SharePollContainer.js 
import React, { Component } from 'react';
import axios from 'axios';
import PollItem from 'components/PollItem';

export default class SharePollContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.loadPollById = this.loadPollById.bind(this);
        this.handleVote = this.handleVote.bind(this);
    }

    loadPollById(id) {
        console.log('loading poll');
        axios.get(this.props.url + '/singlepoll/' + id)
            .then((res) => {
                this.setState({ data: res.data });
            })
            .catch((err) => console.log(err));
    }

    handleVote() {
        console.log('vote handled');
    }
    
    componentWillMount() {
        console.log('will mount');
        console.log(this.props);
        this.loadPollById(this.props.match.params.id);
    }
    
    render(){
        console.log(this.state.data);
        if (!this.state.data) {return (<div>Loading Poll...</div>)}
        return (
            <div>
                <PollItem
                    pollTitle = { this.state.data.pollTitle }
                    author = { this.state.data.author }
                    description = { this.state.data.description }
                    numVotes = { this.state.data.numVotes }
                    options = { this.state.data.options }
                    handleVote = { this.handleVote }
                    itemData = { this.state.data }
                    url = { this.props.url }
                   
                />
            </div>
        );
    }
}
