import React, { Component } from 'react';
import './App.css';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Button from '@material-ui/core/Button';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

import CardSection from './Section';
import {ScrollToTopOnMount, SectionsContainer, Section, Header} from 'react-fullpage';

import educationImg from '../public/images/education.jpg';

const copSteps = ['Programming Fundamentals 1', 'Programming Funamentals 2', 'Intro to Computer Organization', 'Data Structures and Algorithms'];
const eelSteps = ['Digital Logic and Computer Systems', 'Discrete Structuers', 'Microprocessor Applications'];

class App extends Component {
  render() {
    let options = {
      sectionClassName:     'section',
      anchors:              ['intro', 'education', 'skills'],
      scrollBar:            false,
      navigation:           true,
      verticalAlign:        false,
      sectionPaddingTop:    '50px',
      sectionPaddingBottom: '50px',
      arrowNavigation:      true
    };

    return (
      <div>
        <ScrollToTopOnMount />
        <Header>
          <Button><a href="#intro">Intro</a></Button>
          <Button><a href="#education">Education</a></Button>
          <Button><a href="#skills">Skills</a></Button>
        </Header>
        <SectionsContainer {...options}>
          <Section>
            <div className="text-center vertical-center">
              <h1 className="display-1"><span className="weight-300">Christopher J. </span><span className="weight-700">Miller</span></h1>
              <h2 className="weight-400">Computer Engineering Student | Software Developer</h2>
            </div>
          </Section>
          <CardSection title="Education" background={educationImg}>
            <div style={{ width: '100%', clear: 'both', marginBottom: '6rem'}}><h2 style={{float: 'left'}}>University of Florida</h2><p style={{float: 'right'}}>Aug. 2018 - May. 2022</p></div>
            <p>Pursuing a degree in Computer Engineering (CpE).</p>
            <h4>Computer Science Class Progess</h4>
            <Stepper activeStep={0}>
              {copSteps.map((label, index) => {
                const props = {};
                const labelProps = {};
                return (
                  <Step key={label} {...props}>
                    <StepLabel {...labelProps}>{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
            <h4>Electrical Engineering Class Progess</h4>
            <Stepper>
              {eelSteps.map((label, index) => {
                const props = {};
                const labelProps = {};
                return (
                  <Step key={label} {...props}>
                    <StepLabel {...labelProps}>{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
          </CardSection>
          <CardSection title="Skills" />
          </SectionsContainer>
        </div>
    );
  }
}

export default App;
