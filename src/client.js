import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBarExampleIconMenu from './Appbar';
import HomeBanner from './HomeBanner';

const muiTheme = getMuiTheme({
  // palette: {
  //   textColor: cyan500,
  // },
  appBar: {
    height: 50,
  },
});


const App = () => (
<div>
  <MuiThemeProvider muiTheme={muiTheme}>
    <AppBarExampleIconMenu />
    
  </MuiThemeProvider>
  <MuiThemeProvider muiTheme={muiTheme}>
  	<HomeBanner />
  </MuiThemeProvider>
</div>
);

ReactDOM.render(<App />, document.getElementById("root"));
