import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons'


const useStyles = makeStyles({
  root: {
    minWidth: '100%',
    color: 'blue',
    borderBottom: '4px solid blue',
  }
});

const Header = () => {

  const classes = useStyles();

  return (


    
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h4" component="h2">
            <FontAwesomeIcon icon={faBook} /> News feed
        </Typography>
      </CardContent>
    </Card>
  );
}


export default Header;