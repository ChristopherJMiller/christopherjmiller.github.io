import React, { Component } from 'react';
import './App.css';

import Button from '@material-ui/core/Button';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

import ReactChartkick, { BarChart } from 'react-chartkick'
import Chart from 'chart.js'
ReactChartkick.addAdapter(Chart)

import SkillsStepper from './SkillsStepper'
import ProjectBoard from './ProjectBoard'


import CardSection from './Section';
import {ScrollToTopOnMount, SectionsContainer, Section, Header} from 'react-fullpage';

import educationImg from '../public/images/education.jpg';

class App extends Component {
  render() {
    let options = {
      sectionClassName:     'section',
      anchors:              ['intro', 'education', 'skills', 'projects'],
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
          <Button><a href="#projects">Projects</a></Button>
          <Button><a target="_blank" href="http://chrismiller.xyz/Resume/resume.pdf">Resume</a></Button>
        </Header>
        <SectionsContainer {...options}>
          <Section>
            <div className="text-center vertical-center">
              <div style={{paddingBottom: '10vh'}}>
                <h1 className="display-1"><span className="weight-300">Christopher J. </span><span className="weight-700">Miller</span></h1>
                <h2 className="weight-400">Computer Engineering Student | Software Developer</h2>
              </div>
            </div>
          </Section>
          <CardSection title="Education" background={educationImg}>
            <div style={{ width: '100%', clear: 'both', marginBottom: '6rem'}}><h2 style={{float: 'left'}}>University of Florida</h2><p style={{float: 'right'}}>Aug. 2018 - May. 2022</p></div>
            <p>Pursuing a degree in Computer Engineering (CpE).</p>
            <h4>Computer Science Classes</h4>
            <ul>
              <li>Programming Fundamentals 1</li>
            </ul>
          </CardSection>
          <CardSection title="Skills">    
            <SkillsStepper />
          </CardSection>
          <Section>
            <ProjectBoard />
          </Section>
          </SectionsContainer>
        </div>
    );
  }
}

export default App;
