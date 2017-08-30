//PollListContainer.js
import React, { Component } from 'react';
import axios from 'axios';
import PollList from 'components/PollList';

export default class PollListContainer extends Component {

    constructor(props) {
        super(props);
        this.state = { data: [] };
        this.loadPollItems = this.loadPollItems.bind(this);
    }

    loadPollItems() {
        axios.get(this.props.url)
            .then((res) => {
                this.setState({ data: res.data });
            })
            .catch((err) => console.log(err));
    }

    componentDidMount() {
        this.loadPollItems();
        setInterval(this.loadPollItems, this.props.pollInterval);
    }

    render() {
        return (
            <PollList data = { this.state.data }/>
        );
    }
}
