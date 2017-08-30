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
            author: '',
            option1: '',
            option2: '',
            options: [],
            numOptions: 2
        } 
        this.handleChange = this.handleChange.bind(this);       
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    populateOptions(){
        const optionsUpdate = this.state.options;;
        const numOptions = this.state.numOptions;
        for (let i = 1; i <= numOptions; i ++) {
            optionsUpdate.push({optionsTitle: optionsUpdate[`option${i}`], votes: 0})
        }
        this.setState({options: optionsUpdate});
    }
    
    handleSubmit(event) {
        event.preventDefault();
        console.log('buttonclicked');
        this.populateOptions();
        axios.post(this.props.url, {
            author: 'Skynet',
            pollTitle: this.state.pollTitle,
            description: this.state.description,
            options: this.state.options
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

    render(){
        return (
            <div>
                <NewPoll 
                    handleSubmit = { this.handleSubmit }
                    handleChange = { this.handleChange }
                />
            </div>
        );
    }
}
