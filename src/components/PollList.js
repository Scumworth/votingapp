//PollList.js
import React, { Component } from 'react';
import PollItem from 'components/PollItem';

export default class PollList extends Component {
    render(){
        const pollItemNodes = this.props.data.map((pollItem) => {
            return (
                <PollItem 
                    author = { pollItem.author }
                    key = { pollItem['_id']}
                    text = { pollItem.text }
                />
            );
        })
        return (
            <div>
                <h1>polldata</h1>
                { pollItemNodes }
            </div>
        );
    }
}
