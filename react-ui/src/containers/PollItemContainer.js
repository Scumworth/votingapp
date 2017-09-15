//PollItemContainer.js
import React, { Component } from 'react';
import onClickOutside from 'react-onclickoutside';
import { Form, FormGroup, ControlLabel, FormControl, Button, Well } from 'react-bootstrap';
import PollItem from './../components/PollItem';
import { Route } from 'react-router-dom';

class PollItemContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            extended: false
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleCustomVote = this.handleCustomVote.bind(this);
    }
    handleClick() {
        this.setState({extended: !this.state.extended});
    }
    handleClickOutside = () => {
        this.setState({extended: false});
    }

    handleChange(event) {
        event.preventDefault();
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleCustomVote(event) {
        event.preventDefault();
        if (this.state.itemData.voters.indexOf(this.props.userId) !== -1) {
            alert('You have already voted in this poll, fool.');
        }
        else if(!this.props.userId) {
            alert('Please Login to Vote, Sir or Madam');
        }
        else {
            console.log('add handle custom vote');
        }

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
                {this.props.userId
                    ? <Form>
                        <FormControl
                            type = "text"
                            placeholder = 'Add custom option'
                            onChange = { this.handleChange }
                            name = "customOption"
                        />
                        <Button onClick = { () => {
                            this.handleCustomVote
                        }}> Vote For Custom Option </Button>
                    </Form>
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
