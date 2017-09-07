//NewPollContainer.js 
import React, { Component } from 'react';
import NewPoll from 'components/NewPoll';
import axios from 'axios';

export default class NewPollContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pollTitle: '',
            description: '',
            options: [{optionTitle: ''}, {optionTitle: ''}],
            numOptions: 2
        } 
        this.handleChange = this.handleChange.bind(this);       
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleRemoveOption = this.handleRemoveOption.bind(this);
    }

    createSubmission() {
        const options = this.state.options;
        const submission = [];
        for (let i = 0; i < options.length; i++) {
            submission.push({optionTitle: this.state[`Option${i+1}`], votes: 0})
        }
        return submission;
    }

    
    handleSubmit(event) {
        const submission = this.createSubmission();
        event.preventDefault();
        console.log('buttonclicked');
        axios.post(this.props.url, {
            author: this.props.userId,
            pollTitle: this.state.pollTitle,
            description: this.state.description,
            options: submission
        })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
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

    handleAddOption() {
        this.setState({options: this.state.options.concat({ optionTitle: '' })});

    }
    
    handleRemoveOption(removalIdx) {
        this.setState({options: this.state.options.filter((option) => {
            return this.state.options.indexOf(option) !== removalIdx;
        })});
    }

    render(){
        return (
            <div>
                { this.props.login
                    ?<NewPoll 
                        handleRemoveOption = { this.handleRemoveOption }
                        handleAddOption = { this.handleAddOption }
                        handleSubmit = { this.handleSubmit }
                        handleChange = { this.handleChange }
                        options = { this.state.options }
                    />
                    : null
                }
            </div>
        );
    }
}
