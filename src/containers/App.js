//App.js
import React, { Component } from 'react';
import 'containers/App.css';
import axios from 'axios';
import Header from 'components/Header';
import Footer from 'components/Footer';
import PollListContainer from 'containers/PollListContainer';
import NewPollContainer from 'containers/NewPollContainer';

export default class App extends Component {

    render() {
        return (
            <div>
                <Header />
                <PollListContainer 
                    pollInterval = { this.props.pollInterval }
                    url = { this.props.url }
                />
                <NewPollContainer 
                    url = { this.props.url }
                />
                <Footer /> 
            </div>
        );
    }
}

