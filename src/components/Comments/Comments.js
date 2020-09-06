import React from "react";
import { Paper, Grid, Typography, makeStyles, Avatar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: -30,
    marginBottom: 60
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
  },
  avatar: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const Comments = (props) => {
  const { name, email, body } = props.comment;
  const classes = useStyles();

  return (
    <div>
      {/* <h1>Comment: {comment.length}</h1> */}
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <div className={classes.avatar}>
              <Avatar
                src={`https://loremflickr.com/600/400?random=${
                  Math.random() * 10
                }`}
                style={{ width: "80px", height: "80px", border: "5px solid black" }}
              />
              <Typography variant="caption">{email}</Typography>
            </div>
          </Grid>
          <Grid item xs={8} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item>
                <Typography gutterBottom variant="subtitle1">
                  {name}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {body}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
    </div>
  );
};


export default Comments;