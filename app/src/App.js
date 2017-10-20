import React, { Component } from 'react';
import { Container, Grid } from 'semantic-ui-react';
import Inputs from './Inputs';
import Plot from './Plot';
import zmq from 'zmq';

import './App.css';

const App = () => {

    const responder = zmq.socket('rep');
    
    responder.on('message', function(request) {
      console.log("Received request: [", request.toString(), "]");
    
      // do some 'work'
      setTimeout(function() {
    
        // send reply back to client.
        responder.send("World");
      }, 1000);
    });

    responder.bind('tcp://*:1337', function(err) {
      if (err) {
        console.log(err);
      } else {
        console.log("Listening on 1337…");
      }
    });

    process.on('SIGINT', function() {
      responder.close();
    });

    return (
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column width={4}>

              <Inputs />

            </Grid.Column>
            <Grid.Column width={12}>

              <Plot />

            </Grid.Column>
          </Grid.Row>
        </Grid>
    );
}

export default App;
