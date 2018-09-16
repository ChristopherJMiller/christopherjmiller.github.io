import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';

const railsChip = {
  text: 'Ruby on Rails'
}

const projects = [
  {
    title: 'openService',
    description: 'An open source community service platform with the goal of giving power back to the users.',
    link: 'https://github.com/realliance/openService',
    tags: [
      railsChip
    ]
  }
]

class ProjectBoard extends Component {
  render() {
    return (
      <div>
        {projects.map(project => (
          <Card style={{ maxWidth: 400 }}>
            <CardContent>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </CardContent>
            <CardActions>
              <Button component="a" href={project.link} size="small">Github</Button>
            </CardActions>
          </Card>
        ))}
      </div>
    );
  }
}

export default ProjectBoard;
