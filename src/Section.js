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
    this.cardBack = this.props.card || true;
  }

  render() {
    let component;
    if (this.cardBack) {
      component = (
        <Card className={`${this.component}`}>
          <CardContent>
            <h1 className="weight-300 text-center display-3">{this.props.title}</h1>
            <hr />
            { this.props.children }
          </CardContent>
        </Card>
      )
    } else {
      component = (
        <div className={`${this.component}`}>
          <h1 className="weight-300 text-center display-3">{this.props.title}</h1>
          <hr />
          { this.props.children }
        </div>
      )
    }
    return (
      <Section className='vertical-center'>
        {component}
      </Section>
    );
  }
}

export default withWidth()(CardSection);
