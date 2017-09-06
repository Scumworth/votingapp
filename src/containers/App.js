//App.js
import React, { Component } from 'react';
import 'containers/App.css';
import axios from 'axios';
import GoogleLogin from 'react-google-login';
import Header from 'components/Header';
import Footer from 'components/Footer';
import PollListContainer from 'containers/PollListContainer';
import NewPollContainer from 'containers/NewPollContainer';

export default class App extends Component {

    render() {
        return (
            <div>
                <Header />
                <GoogleLogin
                    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                    buttonText="Login with Google"
                    onSuccess={(response) => {
                        console.log(response);
                    }}
                    onFailure={(response) => {
                        console.log(response);
                    }}
                 />
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

