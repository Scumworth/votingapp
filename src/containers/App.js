//App.js
import React, { Component } from 'react';
import axios from 'axios';
import 'containers/App.css';
import Header from 'components/Header';
import Footer from 'components/Footer';
import PollList from 'components/PollList';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {data: []};
        this.loadPollItems = this.loadPollItems.bind(this);
    }

    loadPollItems() {
        axios.get(this.props.url)
            .then((res) => {
                this.setState({ data: res.data })
            });
    }

    handlePollItemSubmit() {
        
    }
    componentDidMount() {
        this.loadPollItems();
        setInterval(this.loadPollItems, this.props.pollInterval);
    }
    render() {
        return (
            <div>
                <Header />
                <PollList data = { this.state.data } />
                <Footer /> 
            </div>
        );
    }
}

