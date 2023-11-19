import React, { useContext } from 'react';
import { Grid, Typography, Paper , makeStyles } from '@material-ui/core';

import { SocketContext } from '../Context';

const useStyles = makeStyles((theme) => ({
  typo: {
    marginLeft: '10px',
    fontWeight: '600',
    fontFamily: 'MuseoModerno,sans-serif',
    background: '-webkit-linear-gradient(skyblue, dodgerblue)',
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
    fontfamily: 'sans-serif',
  },
  video: {
    borderRadius: '25px',
    transform: 'scaleX(-1)',
    width: '550px',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  gridContainer: {
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  paper: {
    backgroundColor: 'rgba(255,255,255,0.5)',
    padding: '10px',
    borderRadius: '30px',
    margin: '5px',
    background: '#e5fcff',
    boxShadow:  '20px 20px 60px #c3d6d9,-20px -20px 60px #ffffff',
  },
}));

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);
  const classes = useStyles();

  return (
    <Grid container className={classes.gridContainer}>
      {stream && (
        <Paper elevation={16} square={false} className={classes.paper}>
          <Grid item xs={12} md={6}>
            <Typography className={classes.typo} variant="h5" gutterBottom>{name || 'Host'}</Typography>
            <video playsInline muted ref={myVideo} autoPlay className={classes.video}  />
          </Grid>
        </Paper>
      )}
      {callAccepted && !callEnded && (
        <Paper elevation={16} square={false} className={classes.paper}>
          <Grid item xs={12} md={6}>
            <Typography className={classes.typo} variant="h5" gutterBottom>{call.name || 'Client'}</Typography>
            <video playsInline ref={userVideo} autoPlay className={classes.video} />
          </Grid>
        </Paper>
      )}
    </Grid>
  );
};

export default VideoPlayer;
