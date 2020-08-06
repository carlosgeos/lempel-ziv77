import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = {
  legend: {
    marginTop: '40px',
  },
  window_legend: {
    display: 'inline-block',
    width: '1rem',
    height: '1rem',
    borderRadius: '6px',
    backgroundColor: '#FE6B8B',
  },
  // total DRY ignore
  buffer_legend: {
    display: 'inline-block',
    width: '1rem',
    height: '1rem',
    borderRadius: '6px',
    backgroundColor: '#FF8E53',
  }
};

function LZlegend (props) {
  return (
    <div className={props.classes.legend}>
      <Typography variant='subtitle1' align='left'>
        Window = <span className={props.classes.window_legend}></span>
      </Typography>
      <Typography variant='subtitle1' align='left'>
        Buffer = <span className={props.classes.buffer_legend}></span>
      </Typography>
    </div>
  );
}

export default withStyles(styles)(LZlegend);
