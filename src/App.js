import React, { Component } from 'react';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {Card, CardTitle, CardActions, CardText} from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import {purple100, blue300, indigo300, cyan700, red400, grey500, yellow600, blueGrey200} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            title="Chris Miller"
            showMenuIconButton={false}
            zDepth={2}
            style={{position: 'fixed', backgroundColor: cyan700 }}
            iconElementRight={
              <IconMenu
                iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                targetOrigin={{horizontal: 'left', vertical: 'top'}}

                onItemClick={(event, menuItem, index) => {
                  window.open(menuItem.props.value, '_blank');
                }}
              >
                <MenuItem primaryText="Github" value="https://github.com/ChristopherJMiller" leftIcon={<FontIcon className="fa fa-github" />} />
                <MenuItem primaryText="Twitter" value="https://twitter.com/Chris7332" leftIcon={<FontIcon className="fa fa-twitter" />} />
              </IconMenu>
            }
          />
          <div className="row center-xs">
            <Card className="col-md-8 col-sm-12 card-margins">
              <CardTitle title="Hi, I'm Chris" subtitle="I Make Things with Code" />
              <CardText>
                My focus is on modern web development, robotics, and game development. 
              </CardText>
            </Card>

            <h1 className="col-md-8 card-margins-small">Current Projects</h1>

            <Card className="col-md-5 col-sm-12 card-margins-small card-group">
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

            <Card className="col-md-5 col-sm-12 card-margins-small card-group">
              <CardTitle title="RhyVR" subtitle="VR Drum Rhythm Game" />
              <CardText>
                RhyVR will bring stepmania mechanics and open source feel to Virtual Reality. The game is still within prototype stages.
                <CardActions>
                  <RaisedButton
                    href="https://github.com/ChristopherJMiller/rhyvr"
                    target="_blank"
                    label="Github"
                    secondary={false}
                  />
                  <RaisedButton
                    href="https://github.com/ChristopherJMiller/rhyvr-song-editor"
                    target="_blank"
                    label="Song Editor Github"
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

            <h1 className="col-md-8 card-margins-small">Past Projects</h1>

            <Card className="col-md-5 col-sm-12 card-margins-small card-group">
              <CardTitle title="Doggo Factory" subtitle="Bone Tycoon Idling Game" />
              <CardText>
                A quick little idling game about a dog's bone making tycoon.
                <CardActions>
                  <RaisedButton
                    href="https://github.com/ChristopherJMiller/doggo-factory"
                    target="_blank"
                    label="Github"
                    secondary={false}
                  />
                  <RaisedButton
                    href="http://chrismiller.xyz/doggo-factory"
                    target="_blank"
                    label="Website"
                    secondary={true}
                  />
                </CardActions>
                <CardActions className="chip-wrap">
                  <Chip backgroundColor={purple100} className="chip">
                    React
                  </Chip>
                </CardActions>
              </CardText>
            </Card>

            <Card className="col-md-5 col-sm-12 card-margins-small card-group">
              <CardTitle title="Corgi Loaf" subtitle="I had an extra domain coupon." />
              <CardText>
                Wanted to contribute my own filler website.
                <CardActions>
                  <RaisedButton
                    href="http://corgiloaf.net/"
                    target="_blank"
                    label="Website"
                    secondary={true}
                  />
                </CardActions>
                <CardActions className="chip-wrap">
                  <Chip backgroundColor={blueGrey200} className="chip">
                    Memes
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
