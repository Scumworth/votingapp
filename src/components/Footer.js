import React, { Component } from 'react';

export default class Footer extends Component {
    render(){
        return (
            <div style = {{textAlign: 'left'}}>
                <p>This voting app is built for FreeCodeCamp</p>
                <p>User Stories:</p>
                <ul>
                    <li>As an authenticated user, I can keep my polls and come back later to access them.</li>
                    <li>As an authenticated user, I can share my polls with my friends.</li>
                    <li>As an authenticated user, I can see the aggregate results of my polls.</li>
                    <li>As an authenticated user, I can delete polls that I decide I don't want anymore.</li>
                    <li>As an authenticated user, I can create a poll with my number of possible items.</li>
                    <li>As an unauthenticated or authenticated user, I can see and vote on everyone's polls.</li>
                    <li>As an unauthenticated or authenticated user, I can ssee the results of polls in chart form.</li>
                    <li>As an authenticated user, if I don't like the options on a poll, I can create a new option.</li>
                </ul>
            </div>
        );
    }
}

