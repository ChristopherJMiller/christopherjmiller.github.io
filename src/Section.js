import React, { Component } from 'react';
import './App.css';
import Card from '@material-ui/core/Card';
import withWidth from '@material-ui/core/withWidth';
import CardContent from '@material-ui/core/CardContent';

import {Section} from 'react-fullpage';


const sizeClass = {
  sm: 'margin-sm',
  md: 'margin-md',
  lg: 'margin-lg'
};

class CardSection extends Component {
  constructor(props) {
    super(props);

    console.log(this.props.width);
    this.component = sizeClass[this.props.width] || 'margin-lg';
  }

  render() {
    return (
      <Section>
        <Card className={`${this.component}`} style={{marginTop: '5vh'}}>
          <CardContent>
            <h1 className="weight-300 text-center display-3">{this.props.title}</h1>
            <hr />
            { this.props.children }
          </CardContent>
        </Card>
      </Section>
    );
  }
}

export default withWidth()(CardSection);
