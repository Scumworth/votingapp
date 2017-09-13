// Header.js
import React, { Component } from 'react';
import { Jumbotron, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { IndexLinkContainer } from 'react-router-bootstrap';
import GoogleLogin from 'react-google-login';

export default class Header extends Component {
    render(){
        return (
            <div style = {{textAlign: 'right'}}>
                <Nav bsStyle = "pills">
                    <IndexLinkContainer to = "/polls">
                        <NavItem>All Polls</NavItem>
                    </IndexLinkContainer>
                    
                    { this.props.login
                            ? <IndexLinkContainer to = "/mypolls">
                                <NavItem>My Polls</NavItem>
                              </IndexLinkContainer>
                        : null
                    }  
                    { this.props.login
                            ? <IndexLinkContainer to = "/newpoll">
                                <NavItem>New Poll</NavItem>
                              </IndexLinkContainer>
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
