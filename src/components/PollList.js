//PollList.js
import React, { Component } from 'react';

export default class PollList extends Component {
    render(){
        console.log('test');
        console.log(this.props.data);
        return (
            <div>
                <h1>polldata</h1>
                <p>test</p>
            </div>
        );
    }
}
