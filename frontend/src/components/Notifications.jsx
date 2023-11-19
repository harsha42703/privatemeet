import React, { useContext } from 'react';
import { Button } from '@material-ui/core';
import { SocketContext } from '../Context';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  ans: {
    color: 'black',
    backgroundColor: 'green',
    height: '20px',
    },
  }));

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);
  const classes = useStyles();
  return (
    <>
      {call.isReceivingCall && !callAccepted && (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <h1 className='call-line'>{call.name} is calling :</h1>
          <Button variant='outlined' color="primary" classes={classes.ans} fullWidth onClick={answerCall}>
            Answer
          </Button>
        </div>
      )}
    </>
  );
};

export default Notifications;
