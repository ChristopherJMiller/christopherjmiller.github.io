import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';

const webChip = {
  text: 'Web',
  color: 'primary'
}

const desktopChip = {
  text: 'Desktop',
  color: 'primary'
}

const arduinoChip = {
  text: 'Arduino',
  color: 'primary'
}

const railsChip = {
  text: 'Ruby on Rails',
  color: 'default'
}

const pythonChip = {
  text: 'Python',
  color: 'default'
}

const unityChip = {
  text: 'Unity3D',
  color: 'default'
}

const cPlusPlusChip = {
  text: 'C++',
  color: 'default'
}

const projects = [
  {
    title: 'openService',
    description: 'An open source community service platform with the goal of giving power back to the users.',
    link: 'https://github.com/realliance/openService',
    tags: [
      webChip,
      railsChip
    ]
  },
  {
    title: 'The Dungeon',
    description: 'Creating a dungeon crawler as part of the Fall 2018 ACE Video Game Design Team.',
    link: 'https://github.com/UF-ACE/TheDungeon',
    tags: [
      desktopChip,
      unityChip
    ]
  },
  {
    title: 'HueHub',
    description: 'Custom interfacing for the Philips Hue Bridge, allowing for Raspberry Pi slaves to acts similarly to lights.',
    link: 'https://github.com/ChristopherJMiller/huehub',
    tags: [
      webChip,
      railsChip,
      pythonChip
    ]
  },
  {
    title: 'Arduino Guitar Hero Controller',
    description: 'A library and instructions for converting a Wii Guitar Hero Controller into a USB game controller for PC play.',
    link: 'https://github.com/ChristopherJMiller/ArduinoGuitarHero',
    tags: [
      arduinoChip
    ]
  },
  {
    title: 'Miner1.5',
    description: 'A mining game developed using the Madd Engine, a custom built game engine.',
    link: 'https://github.com/realliance/Miner1.5',
    tags: [
      desktopChip,
      cPlusPlusChip
    ]
  },
  {
    title: 'ACE Connect4',
    description: 'Co-op Connect 4 with the ability for custom board sizes and win conditions. Developed for Engineering Appreciation Day for ACE.',
    link: 'https://github.com/realliance/ufgamejam',
    tags: [
      desktopChip,
      unityChip
    ]
  }
]

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingTop: '50px',
    marginLeft: '10%',
    marginRight: '10%'
  },
  cardRoot: {
    marginTop: '50px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  chip: {
    marginLeft: '5px',
    marginRight: '5px'
  }
}

class ProjectBoard extends Component {
  render() {
    return (
      <div style={styles.root}>
        <h1 className="weight-300 text-center display-3">Projects</h1>
        <hr style={{width: '100%'}} />
        <div style={styles.cardRoot}>
          {projects.map((project) => (
            <Card style={{ maxWidth: 400, marginLeft: '10px', marginRight: '10px', marginBottom: '10px' }}>
              <CardContent>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </CardContent>
              <CardContent>
                {project.tags.map((tag) => (
                  <Chip style={ styles.chip } color={tag.color} label={tag.text} />
                ))}
              </CardContent>
              <CardActions>
                <Button component="a" href={project.link} size="small">Github</Button>
              </CardActions>
            </Card>
          ))}
        </div>
      </div>
    );
  }
}

export default ProjectBoard;
