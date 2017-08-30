// NewPoll.js

import React, { Component } from 'react';
import { Form, FormGroup, ControlLabel, Button, FormControl } from 'react-bootstrap';

export default class NewPoll extends Component {
    render(){
        return (
            <div>
                <h1>Add a New Poll</h1>
                <Form>
                    <FormGroup controlId = "formBasicText">
                        <FormControl
                            type = "text"
                            placeholder = "Poll Title"
                            onChange = { this.props.handleChange }
                            name = "pollTitle"
                          
                        />
                        <FormControl
                            type = "text"
                            placeholder = "Description"
                            onChange = { this.props.handleChange }
                            name = "description" 
                        />
                        <FormControl
                            type="text"
                            placeholder="Option #1"
                            onChange = { this.props.handleChange }
                            name = "option1"
                        />
                        <FormControl
                            type="text"
                            placeholder="Option #2"
                            onChange = { this.props.handleChange } 
                            name = "option2"
                        />
                    </FormGroup>
                    <Button 
                        type = "submit"
                        onClick = { this.props.handleSubmit }
                    >
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}
