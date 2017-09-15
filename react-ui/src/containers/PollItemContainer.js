//PollItemContainer.js
import React, { Component } from 'react';
import onClickOutside from 'react-onclickoutside';
import { Button, Well } from 'react-bootstrap';
import PollItem from './../components/PollItem';
import { Route } from 'react-router-dom';

class PollItemContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            extended: false
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({extended: !this.state.extended});
    }
    handleClickOutside = () => {
        this.setState({extended: false});
    }
    render(){
        return (
            <div>
                <div onClick = {this.handleClick}>
                    <Well> {this.props.pollTitle } </Well>
                </div>
                {this.state.extended  
                    ? <PollItem
                        url = { this.props.url }
                        pollTitle = { this.props.pollTitle }
                        author = { this.props.author }
                        description = { this.props.description }
                        numVotes = { this.props.numVotes }
                        options = { this.props.options }
                        handleVote = { this.props.handleVote }
                        itemIndex = { this.props.itemIndex }
                        itemData = { this.props.itemData }
                        id = { this.props.id }
                        userId = { this.props.userId }
                    />
                    : null
                }
                {(this.props.userId && this.props.myPolls)
                 ? <Route render = {({history}) => (
                        <Button onClick = { () => {
                            this.props.handleDelete(this.props.itemIndex);
                            history.push('/mypolls');
                        }}>Delete</Button>
                    )}/>
                      : null
                }
 
            </div>
        );
    }
}

export default onClickOutside(PollItemContainer);
