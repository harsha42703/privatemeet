import React from 'react';
import { Typography, Container, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    center: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      },
    container: {
      width: '80%',
      marginBottom: '35px',
      padding: 0,
      [theme.breakpoints.down('xs')]: {
        width: '100%',
      },
    },
    typo: {
      fontWeight: '600',
      fontSize: '16px',
      'textalign': 'center',
      fontFamily: 'MuseoModerno,sans-serif',
      background: '-webkit-linear-gradient(skyblue, dodgerblue)',
      '-webkit-background-clip': 'text',
      '-webkit-text-fill-color': 'transparent',
      fontfamily: 'sans-serif',
      width: '100%',
      [theme.breakpoints.down('xs')]: {
        width: '100%',
        fontSize: '12px',
      },
    },
    copy: {
        fontWeight: '600',
        fontSize: '16px',
        'textalign': 'center',
        fontFamily: 'MuseoModerno,sans-serif',
        color: 'black',
    },
    paper: {
      backgroundColor: 'rgba(255,255,255,0.8)',
      padding: '10px 20px',
      borderRadius: '30px',
      margin: '5px',
      boxShadow:  '20px 20px 60px #c3d6d9,-20px -20px 60px #ffffff',
    },
  }));

const About = () => {
    const classes = useStyles();
  return (
    <div className={classes.center}>
        <Container className={classes.container}>
        <Paper elevation={24} className={classes.paper}>
        <Typography className={classes.typo} gutterBottom variant="h6">Introducing "Private Meet," an innovative web application designed for seamless and secure online video call attendances on a personal level. With end-to-end encryption, your conversations remain confidential and protected throughout, ensuring a heightened level of privacy. "Private Meet" takes inspiration from incognito mode, operating without storing any data, providing users with a worry-free and ephemeral communication experience. Simply generate a unique ID, paste it, and immerse yourself in a sleek Aqua UI, combining functionality with a visually pleasing interface for a delightful online meeting experience with end-to-end encryption.</Typography>
        <Typography className={classes.copy} gutterBottom variant="h6">
        Copyright © Harsha 2023. All rights reserved.
        </Typography>
        </Paper>
        </Container>
    </div>
  )
}

export default About;