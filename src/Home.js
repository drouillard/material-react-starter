import React, { Component } from 'react';
import { Button, Card, CardActions, CardText } from 'react-mdl';
import { Grid, Row } from 'react-flexbox-grid/lib/index';
import logo from './logo.svg';
import { Link } from 'react-router';

class Home extends Component {
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
                  Get More Components!
                </Button>

              </CardActions>
              <CardText>
                <Link to={'about'}>About This Starter Kit</Link>
              </CardText>
            </Card>
          </Row>
        </Grid>
      </div>
    );
    }
}

export default Home;
