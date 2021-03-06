//App.js
import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './../components/Header';
import Footer from './../components/Footer';
import PollListContainer from './PollListContainer';
import NewPollContainer from './NewPollContainer';
import MyPollsContainer from './MyPollsContainer';
import SharePollContainer from './SharePollContainer';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            login: false,
            navKey: 1,
            
            //1 = Home 
            //2 = My Polls
            //3 = New Polls
        };
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin(response) {
        this.setState({
            login: true,
            userId: response.profileObj.email
        });

    }

    

    render() {
        
        return (
            <div>
                <Header 
                    login = { this.state.login }
                    handleLogin = { this.handleLogin }
                    navKey = { this.state.navKey}
                />
                <Switch>
                    <Route exact path = "/" render = { () => (
                        <Redirect to = "/polls"/>
                    )}/>
                    <Route exact path = "/polls" render = { () => <PollListContainer
                            pollInterval = { this.props.pollInterval }
                            url = { this.props.url }
                            userId = { this.state.userId }
                        />}
                    />
                    <Route path = "/polls/:id" render = {(props) => <SharePollContainer {...props} url = { this.props.url } userId = { this.state.userId }/>} />
                    <Route path = "/mypolls" render = { () => <MyPollsContainer
                            pollInterval = { this.props.pollInterval }
                            url = { this.props.url }
                            userId = { this.state.userId }
                        />}
                    />
                    <Route path = "/newpoll" render = { () => <NewPollContainer
                            url = { this.props.url }
                            login = { this.state.login }
                            userId = { this.state.userId }
                        />}
                    />
                </Switch>
                <Footer /> 
            </div>
        );
    }
}

