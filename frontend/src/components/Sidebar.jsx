import React, { useState, useContext } from 'react';
import { Button, TextField, Grid, Typography, Container, Paper } from '@material-ui/core';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Assignment, Phone, PhoneDisabled } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';


import { SocketContext } from '../Context';



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  gridContainer: {
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  container: {
    width: '80%',
    margin: '35px 0',
    padding: 0,
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  margin: {
    marginTop: 20,
  },
  padding: {
    padding: 20,
  },
  typo: {
    fontWeight: '600',
    fontSize: '34px',
    fontFamily: 'MuseoModerno,sans-serif',
    background: '-webkit-linear-gradient(skyblue, dodgerblue)',
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
    fontfamily: 'sans-serif',
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      fontSize: '28px',
    },
  },
  btn:{
    color: 'black',
    backgroundColor: 'dodgerblue',
    borderRadius: '50px',
    width: '100px',
    height: '40px',
  },
  paper: {
    backgroundColor: 'rgba(255,255,255,0.8)',
    padding: '10px 20px',
    borderRadius: '30px',
    margin: '5px',
    boxShadow:  '20px 20px 60px #c3d6d9,-20px -20px 60px #ffffff',
  },
}));

const Sidebar = ({ children }) => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState('');
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Paper elevation={24} className={classes.paper}>
        <form className={classes.root} noValidate autoComplete="off">
          <Grid container className={classes.gridContainer}>
            <Grid item xs={12} md={6} className={classes.padding}>
              <Typography className={classes.typo} gutterBottom variant="h6">Account Info</Typography>
              <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth />
              <CopyToClipboard text={me} className={classes.margin}>
                <Button color='primary' variant='outlined' fullWidth startIcon={<Assignment fontSize="large"/>}>
                  Copy Your ID
                </Button>
              </CopyToClipboard>
            </Grid>
            <Grid item xs={12} md={6} className={classes.padding}>
              <Typography className={classes.typo} gutterBottom variant="h6">Call With Id</Typography>
              <TextField label="Paste ID Here" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} fullWidth />
              {callAccepted && !callEnded ? (
                <Button variant='outlined' color='secondary' startIcon={<PhoneDisabled fontSize="large" />} fullWidth onClick={leaveCall} className={classes.margin}>
                  Hang Up
                </Button>
              ) : (
                <Button color='primary' variant='outlined' startIcon={<Phone fontSize="large" />} fullWidth onClick={() => callUser(idToCall)} className={classes.margin}>
                  Call
                </Button>
              )}
            </Grid>
          </Grid>
        </form>
        {children}
      </Paper>
    </Container>
  );
};

export default Sidebar;
