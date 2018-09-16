import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { BarChart } from 'react-chartkick'

const skillSteps = [
  {
    label: 'Programming',
    data: [
      ['Python', 40],
      ['C#', 50],
      ['Java', 75],
      ['Node.js', 85],
      ['Ruby', 75],
      ['Javascript', 85]
    ]
  },
  {
    label: 'Web',
    data: [
      ['Express', 40],
      ['Ruby on Rails', 85],
      ['React', 75],
      ['Bootstrap', 100],
      ['Semantic UI', 80]
    ]
  },
  {
    label: 'Infrastructure',
    data: [
      ['Linux', 70],
      ['Docker', 90],
      ['Kubernetes', 75],
      ['OpenStack', 45],
      ['Google Cloud', 75]
    ]
  }
];

const styles = theme => ({
});

class SkillsStepper extends React.Component {
  state = {
    activeStep: 0,
  };

  handleNext = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1,
    }));
  };

  handleStepChange = activeStep => {
    this.setState({ activeStep });
  };

  render() {
    const { classes, theme } = this.props;
    const { activeStep } = this.state;

    const maxSteps = skillSteps.length;

    return (
      <div>
        <h1 class='text-center'>{skillSteps[activeStep].label}</h1>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.activeStep}
          onChangeIndex={this.handleStepChange}
          enableMouseEvents
        >
          {skillSteps.map(step => (
            <BarChart max={100} data={step.data} />
          ))}
        </SwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          className={classes.mobileStepper}
          nextButton={
            <Button size="small" onClick={this.handleNext} disabled={activeStep === maxSteps - 1}>
              Next
              {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>
          }
          backButton={
            <Button size="small" onClick={this.handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
              Back
            </Button>
          }
        />

      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(SkillsStepper);