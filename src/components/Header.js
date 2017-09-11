// Header.js
import React, { Component } from 'react';
import { Jumbotron, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import GoogleLogin from 'react-google-login';

export default class Header extends Component {
    render(){
        return (
            <div style = {{textAlign: 'right'}}>
                <Nav bsStyle = "pills">
                    <LinkContainer active = {this.props.navKey === 1} to = "/polls">
                        <NavItem eventKey = {1}>Home</NavItem>
                    </LinkContainer>
                    
                    { this.props.login
                            ? <LinkContainer active = {this.props.navKey === 2} to = "/mypolls">
                                <NavItem eventKey = {2}>My Polls</NavItem>
                              </LinkContainer>
                        : null
                    }  
                    { this.props.login
                            ? <LinkContainer active = {this.props.navKey === 3} to = "/newpoll">
                                <NavItem eventKey = {3}>New Poll</NavItem>
                              </LinkContainer>
                        : null
                    }
                    { !this.props.login
                        ? <GoogleLogin
                        clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                        buttonText="Login with Google"
                        onSuccess={this.props.handleLogin}
                        onFailure={(response) => {
                            console.log(response);
                        }}
                        />
                        : null
                    }

                </Nav>
                <Jumbotron style = {{textAlign: 'center'}}>
                    <h1>FreeCodeCamp Voting App</h1>
                    <p>Polls hosted by this app</p>
                    <p>Select a poll to see the results and vote.</p>
                    <p>Sign-In to make a new poll</p>
                </Jumbotron>
            </div>
        );
    }
}
