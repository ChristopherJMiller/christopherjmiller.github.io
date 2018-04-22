import React, { Component } from 'react';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {Card, CardTitle, CardActions, CardText} from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import {blue300, indigo300, red400, grey500, yellow600} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';



class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            title="Chris Miller"
            showMenuIconButton={false}
            zDepth={2}
            style={{position: 'fixed'}}
          />
          <div className="row center-md">
            <Card className="col-md-8 col-sm-12 card-margins">
              <CardTitle title="Hi, I'm Chris" subtitle="I Make Things with Code" />
              <CardText>
                My focus is on modern web development, robotics, and game development. 
              </CardText>
            </Card>

            <h1 className="col-md-8 card-margins-small">Current Projects</h1>

            <Card className="col-md-8 col-sm-12 card-margins">
              <CardTitle title="Lakewood Leaders Website" subtitle="Community Service Management" />
              <CardText>
                Lakewood Leaders is a community service organization at Lakewood Ranch Highschool. The website manages members and allows for electronic event sign up.
                <CardActions>
                  <RaisedButton
                    href="https://github.com/ChristopherJMiller/lakewood-leaders"
                    target="_blank"
                    label="Github Link"
                    secondary={false}
                  />
                  <RaisedButton
                    href="https://leaders.lrhsclubs.com/"
                    target="_blank"
                    label="Website"
                    secondary={true}
                  />
                </CardActions>
                <CardActions className="chip-wrap">
                  <Chip backgroundColor={red400} className="chip">
                    Ruby on Rails
                  </Chip>

                  <Chip backgroundColor={blue300} className="chip">
                    Docker
                  </Chip>

                  <Chip backgroundColor={indigo300} className="chip">
                    Kubernetes
                  </Chip>
                </CardActions>
              </CardText>
            </Card>

            <Card className="col-md-8 col-sm-12 card-margins">
              <CardTitle title="RhyVR" subtitle="VR Drum Rhythm Game" />
              <CardText>
                RhyVR will bring stepmania mechanics and open source feel to Virtual Reality. The game is still within prototype stages.
                <CardActions>
                  <RaisedButton
                    href="https://github.com/ChristopherJMiller/rhyvr"
                    target="_blank"
                    label="Github Link"
                    secondary={false}
                  />
                  <RaisedButton
                    href="https://github.com/ChristopherJMiller/rhyvr-song-editor"
                    target="_blank"
                    label="Song Editor Github Link"
                    secondary={false}
                  />
                  <RaisedButton
                    href="https://www.youtube.com/watch?v=Ig1xqisP1hs"
                    target="_blank"
                    label="Prototype Video"
                    secondary={true}
                  />
                </CardActions>
                <CardActions className="chip-wrap">
                  <Chip backgroundColor={grey500} className="chip">
                    Unity3D
                  </Chip>

                  <Chip backgroundColor={yellow600} className="chip">
                    Electron
                  </Chip>
                </CardActions>
              </CardText>
            </Card>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
