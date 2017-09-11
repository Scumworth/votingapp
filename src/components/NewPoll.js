// NewPoll.js

import React, { Component } from 'react';
import { Form, FormGroup, ControlLabel, Button, FormControl, Row, Col } from 'react-bootstrap';

export default class NewPoll extends Component {
    render(){

        const formOptions = this.props.options.map((option, idx) => {
            return (
            <div>
                <Row>
                    <Col xs = {10}>
                    <FormControl
                        type = "text"
                        placeholder = {`Option #${idx + 1}`}
                        onChange = { this.props.handleChange }
                        name = {`Option${idx + 1}`}
                        key = {option['_id']}
                    />
                    </Col>
                    <Col xs = {2}>
                    <Button block type = "button" onClick = {() => this.props.handleRemoveOption(idx)}>-</Button>
                    </Col>
                </Row>
            </div>
            );
        });

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
 
                        { formOptions } 

                        </FormGroup>
                        <Button type = "button" onClick = {this.props.handleAddOption}>+</Button>
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
