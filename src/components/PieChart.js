//PieChart.js
import React, { Component } from 'react';
import { Chart } from 'react-google-charts';

export default class PieChart extends Component {
    render(){
        return (
            <div>
                <Chart
                    chartType = "PieChart"
                    data = { this.props.chartData }
                    options = { this.props.options }
                    graph_id = "PieChart"
                    height = { this.props.height }
                    width = { this.props.width }
                    legend_toggle
                />
            </div>
        );
    }
}
