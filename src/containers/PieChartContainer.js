//PieChartContainer.js
import React, { Component } from 'react';
import PieChart from 'components/PieChart'; 

export default class PieChartContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            options: {
                title: 'Sample Pie Chart'
            },
            data: {}
        }
    }
    buildChartData(rawData) {
        const dataArray = [
            ['Option', 'Number of Votes'],
        ];
        rawData.options.forEach((option) => {
            dataArray.push([option.optionTitle, option.votes]);
        })
        return dataArray;
        
    }
    componentWillMount() {
        const chartData = this.buildChartData(this.props.itemData);
        this.setState({ data: chartData });
    }
    render() {
        return (
            <PieChart 
                options = { this.state.options }
                chartData = { this.state.data }
                height = { this.props.height }
                width = { this.props.width }
            />
        )
    }
}
