import React, { Component } from 'react';
import { Container, Form, Input, Card, Button } from 'semantic-ui-react';

class Inputs extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dataLength: 128,
            batches: 100
        }
    }

    lengthChanged(e) {
        const dataLength = e.target.value;

        this.setState({dataLength});
    }

    batchesChanged(e) {
        const batches = e.target.value;

        this.setState({batches});
    }

    render() {
        return (
            <Form>

                <Form.Field>
                    <label>Data length</label>
                    <Input value={this.state.dataLength} onChange={this.lengthChanged.bind(this)} />
                </Form.Field>

                <Form.Field>
                    <label>Batches</label>
                    <Input value={this.state.batches} onChange={this.batchesChanged.bind(this)} />
                </Form.Field>

                <Button primary fluid>Start</Button>
            </Form>
        );
    }

}

export default Inputs;