import React, { Component } from 'react';
import { Chart } from 'react-google-charts';
import { Container } from 'semantic-ui-react';

class Plot extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [['Index', 'Value'], [1, 10], [2, 17], [3, 9]]
        }
    }

    render() {
        return (
            <Container>
                <Chart
                    chartType="LineChart"
                    data={this.state.data}
                    option={{}}
                    width="100%"
                    height="500px"
                    legend_toggle
                />
            </Container>
        );
    }
}

export default Plot;