// Header.js
import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';

export default class Header extends Component {
    render(){
        return (
            <div>
                <Jumbotron>
                    <h1>FreeCodeCamp Voting App</h1>
                    <p>Polls hosted by this app</p>
                    <p>Select a poll to see the results and vote.</p>
                    <p>Sign-In to make a new poll</p>
                </Jumbotron>
            </div>
        );
    }
}
