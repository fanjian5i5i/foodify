import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBarExampleIconButton from './Appbar';

const App = () => (
  <MuiThemeProvider>
    <AppBarExampleIconButton />
  </MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById("root"));
