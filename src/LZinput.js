import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';


function LZinput(props) {
    const input_style = {
        fontSize: '2.5rem',
    };

    const label_style = {
        fontSize: '1.6rem',
    };

    return (
        <Grid container spacing={24}>
          <Grid item xs={6} md={2}>
            <TextField inputProps={{style: input_style}} InputLabelProps={{shrink: true,}} type="text" name="window_size" label="Window size" value={props.window_size} onChange={props.handleChange} fullWidth />
          </Grid>
          <Grid item xs={6} md={2}>
            <TextField inputProps={{style: input_style}} InputLabelProps={{shrink: true,}} type="text" name="buffer_size" label="Buffer size" value={props.buffer_size} onChange={props.handleChange} fullWidth />
          </Grid>
          <Grid item xs={12} md={8}>
            <TextField inputProps={{style: input_style}} InputLabelProps={{style: label_style}} type="text" name="input_str" label="Input string" onChange={props.handleChange} fullWidth />
          </Grid>
        </Grid>
    );
}


export default LZinput;
