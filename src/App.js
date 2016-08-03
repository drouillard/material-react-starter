import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Card, CardActions, CardText } from 'react-mdl';
import { Grid, Row } from 'react-flexbox-grid/lib/index';

class App extends Component {
    render() {
        return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Material React Starter Kit</h2>
        </div>
        <Grid fluid className="content">
          <Row center="xs">
            <Card shadow={6}>
              <CardText>
                <h2>Hello World!</h2>
                <span>You are all set up</span>
              </CardText>
              <CardActions border>
                <Button raised ripple accent href="https://tleunen.github.io/react-mdl/components">
                  Get More Components
                  </Button>
              </CardActions>
            </Card>
          </Row>
        </Grid>
      </div>
    );
    }
}

export default App;
