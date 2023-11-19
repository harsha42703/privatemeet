import React from 'react';
import { Typography, AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import VideoPlayer from './components/VideoPlayer';
import Sidebar from './components/Sidebar';
import Notifications from './components/Notifications';
import About from './components/About';

const useStyles = makeStyles((theme) => ({
  appBar: {
    boxShadow: '0px 0px 0px black',
    backgroundColor: 'transparent',
    margin: '30px 100px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',

    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  wrapper: {
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  h2: {
    'text-align': 'center',
    fontSize: '42px',
    fontWeight: '700',
    fontFamily: 'MuseoModerno,sans-serif',
    background: '-webkit-linear-gradient(skyblue, dodgerblue)',
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <AppBar className={classes.appBar} position="static" >
        <Typography variant="h3" align="center" className={classes.h2}>
          Private Meet
        </Typography>
      </AppBar>
      <VideoPlayer />
      <Sidebar>
        <Notifications />
      </Sidebar>
      <About/>
    </div>
  );
};

export default App;
