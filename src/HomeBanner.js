import React from 'react';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextFieldExampleSimple from './TextField';
const style = {
  height: 600,
  width: 600,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

const HomeBanner = () => (
  <div className="home-banner">
    <Paper style={style} zDepth={2} >
    	<TextFieldExampleSimple/>
    </Paper>
  </div>
);

export default HomeBanner;