// PollListContainer.js
import React, { Component } from 'react';
import PollList from 'containers/PollList';
import DATA from '../data';

export default class PollListContainer extends Component {
    render(){
        return (
            <div>
                <PollList data = { DATA }/>
            </div>
        );
    }
}
