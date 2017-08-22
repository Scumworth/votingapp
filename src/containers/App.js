import React, { Component } from 'react';
import 'containers/App.css';
import Header from 'components/Header';
import Footer from 'components/Footer';


export default class App extends Component {
    render(){
        return (
            <div>
                <Header />
                <Footer /> 
            </div>
        );
    }
}

