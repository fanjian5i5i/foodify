import React from 'react';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextFieldExampleSimple from './TextField';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import CircularProgress from 'material-ui/CircularProgress';
import http from 'http';
const style = {
  width:"100%"
};

export class HomeBanner extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      path:"\\\\ZBRAFILE\DATA\Deptment\Planning\GIS\DCGIS_Administration\CITYWIDE\COB_PWD\COBUCS\COBUCS.gdb",
      street:"\\autoli\AutoliDeptS\GISData\projects\pwd\cobucs_data\rte-sys.shp",
      parcel:"parcel_15",
      output:"Art80_from_sql",
      waiting:false
    };
  }
  // getInitialState() {
  //   return {path:"\\ZBRAFILE\DATA\Deptment\Planning\GIS\DCGIS_Administration\CITYWIDE\COB_PWD\COBUCS\COBUCS.gdb",
  //     road:"\autoli\AutoliDeptS\GISData\projects\pwd\cobucs_data\rte-sys.shp",
  //     parcel:"parcel_15",
  //     output:"Art80_from_sql"};
  // }
  componentDidMount(){
    console.log(this.state);
  }
  runPython() {
    var that = this;
    this.setState({waiting:true});
    // window.location = '/runpython';
    // console.log(this.refs.workspace);
    // var url = "http://localhost:3000/download";
    var requestOpts = {
    host: "localhost",
    port: 3000,
    path: "/download",
    headers: {
      'Content-Type': 'application/vnd.ms-excel',
    }
    };
    http.get(requestOpts, function (response) {

            console.log(JSON.stringify(response.headers));
            // response.on("data", function (chunk) {
            //     console.log(chunk);
            // }); 
            // response.resume();
            // response.headers['']
            response.on("end", function (err) {

                that.setState({
                    waiting:false
                });



            // }); 
        });
  }
  _handleTextFieldChange(type,e){
    var newValue = {};
    newValue[type] = e.target.value;
    this.setState(
            newValue
        );
  }
  render() {
    const text = this.state.liked ? 'like' : 'haven\'t liked';
    var that = this;
    const styleCircle = {bottom:"-20px"};
    return (
      <div className="home-banner">
        <Card>
            <CardHeader
              title="Without Avatar"
              subtitle="Expand this panel if you need to make changes to the default input file paths."
              showExpandableButton={true}
            />
            <CardText expandable={true}>
              <div>
                <TextField
                      id="text-field-default"
                      floatingLabelText="Please copy and paste your workspace path..."
                      style={style}
                      value={this.state.path}
                      onChange={this._handleTextFieldChange.bind(this,"path")}
                      
                /><br />
                <TextField
                      id="text-field-default"
                      floatingLabelText="Please copy and paste your street segment featureclass path..."
                      style={style}
                      value={this.state.street}
                      onChange={that._handleTextFieldChange.bind(this,"street")}
                /><br />
                <TextField
                      id="text-field-default"
                      floatingLabelText="Please copy and paste your parcel featureclass path (in relate to workspace)..."
                      style={style}
                      value={this.state.parcel}
                      onChange={that._handleTextFieldChange.bind(this,"parcel")}
                /><br />
                <TextField
                      id="text-field-default"
                      floatingLabelText="Please type in the output file name..."
                      style={style}
                      value={this.state.output}
                      onChange={that._handleTextFieldChange.bind(this,"output")}
                /><br />
              </div>
            </CardText>
            <CardActions>
              <RaisedButton label="Run" primary={true} onClick={this.runPython.bind(this)}/>
              { this.state.waiting ? <CircularProgress size={0.5} style={styleCircle}/> : null}
            </CardActions>
          </Card>
      </div>
    );
  }
}
