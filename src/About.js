import React, { Component } from 'react';
import { Card, CardText } from 'react-mdl';
import { Grid, Row } from 'react-flexbox-grid/lib/index';
import logo from './logo.svg';

class About extends Component {
    render() {
        return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>About Material React Starter Kit</h2>
        </div>
        <Grid fluid className="content">
          <Row center="xs">
            <Card shadow={6}>
              <CardText>
                About this starter kit
              </CardText>
            </Card>
          </Row>
        </Grid>
      </div>
    );
    }
}

export default About;
