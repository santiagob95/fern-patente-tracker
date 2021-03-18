import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ImageComponent from './ImageComponent';
const useStyles = makeStyles({
  root: {
    minWidth: 250,
    maxWidth:500
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {props.doc.createdAt}
        </Typography>
        <Typography variant="h5" component="h2">
            {props.doc.descripcion}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          ${props.doc.precio}
        </Typography>
        
        {props.doc.imgs && props.doc.imgs.map(url =>(
          <ImageComponent id={props.id} imageurl={url}/>
        )) }
        
      </CardContent>
    </Card>
  );
}
