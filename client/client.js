import React from 'react'
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Paper from 'material-ui/Paper';
import {darkBlack,purple500} from 'material-ui/styles/colors';



import AppBarSearch from '../components/Appbar';
import FoodCard from '../components/FoodCard';
// import ParcelInfo from '../components/Parcelinfo';
// import GridListExampleSimple from '../components/Imagegrid';
// import SampleMap from '../components/Map';
// import App from '../components/App'
const muiTheme = getMuiTheme({
  palette: {
    // textColor: "white",
    primary1Color: "white",
    alternateTextColor:purple500,
    textColor: purple500,
  },
  appBar: {
    // height: 50,
  },
});
const styles = {
  paper:{
    marginTop:8,
    marginBottom:8,
  }
}
const App = () => (
  <div>
  <MuiThemeProvider muiTheme={muiTheme}>
    <AppBarSearch />

  </MuiThemeProvider>
  <MuiThemeProvider>
    <div className="row">
      <div className="col-lg-6 col-md-12 col-xs-12"><Paper style={styles.paper}><FoodCard/></Paper></div>
      <div className="col-lg-6 col-md-12 col-xs-12"><Paper style={styles.paper}><FoodCard/></Paper></div>
      <div className="col-lg-6 col-md-12 col-xs-12"><Paper style={styles.paper}><FoodCard/></Paper></div>
      <div className="col-lg-6 col-md-12 col-xs-12"><Paper style={styles.paper}><FoodCard/></Paper></div>
      <div className="col-lg-6 col-md-12 col-xs-12"><Paper style={styles.paper}><FoodCard/></Paper></div>
      <div className="col-lg-6 col-md-12 col-xs-12"><Paper style={styles.paper}><FoodCard/></Paper></div>
      <div className="col-lg-6 col-md-12 col-xs-12"><Paper style={styles.paper}><FoodCard/></Paper></div>
      <div className="col-lg-6 col-md-12 col-xs-12"><Paper style={styles.paper}><FoodCard/></Paper></div>
      <div className="col-lg-6 col-md-12 col-xs-12"><Paper style={styles.paper}><FoodCard/></Paper></div>
      <div className="col-lg-6 col-md-12 col-xs-12"><Paper style={styles.paper}><FoodCard/></Paper></div>


    </div>
  </MuiThemeProvider>
  </div>
);

ReactDOM.render(
	<App/>,
	document.getElementById('app')
)
