import React, { Component } from 'react';
import './App.css';

import { Header, Button, Segment, Icon, Container } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <div>
        <Header as='h1' content={"Hi, I'm Chris"} subheader={"I Make Things With Code"} textAlign={"center"}/>
        <Segment basic textAlign="center">
          <Button color='github' as='a' href='https://github.com/ChristopherJMiller'>
            <Icon name='github' /> ChristopherJMiller
          </Button>
          <Button color='twitter' as='a' href='https://twitter.com/Chris7332'>
            <Icon name='twitter' /> @Chris7332
          </Button>
        </Segment>
        <Header as='h2' content={"Projects"} textAlign={"center"}/>
        <Segment basic textAlign="center">
          <Button color='grey' as='a' href='https://github.com/ChristopherJMiller/doggo-factory'>
            Doggo Factory
          </Button>
          <Button color='grey' as='a' href='https://git.mctherealm.net/Froger/lakewood-leaders'>
            Lakewood Leaders Website
          </Button>
          <Button color='grey' as='a' href='https://git.mctherealm.net/Froger/lakewoodranchtsa'>
            LRHS TSA Website
          </Button>
        </Segment>
        <Container as='h4' textAlign={"center"}><a href="http://tsaweb.org"><Header as='h4' content={"Projects Through TSA"} textAlign={"center"} /> Learn More</a></Container>
        <Segment basic textAlign="center">
          <Button as='a' href='https://git.mctherealm.net/LRHS-TSA/teammate/src/develop'>
            TeamMate
          </Button>
          <Button as='a' href='https://git.mctherealm.net/LRHS-TSA/testor-server'>
            Testor Server
          </Button>
          <Button as='a' href='https://git.mctherealm.net/LRHS-TSA/Galaquest'>
            Galaquest
          </Button>
        </Segment>
      </div>
    );
  }
}

export default App;
