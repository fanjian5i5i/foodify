import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import injectTapEventPlugin from 'react-tap-event-plugin';
import SideBar from './Sidemenu';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import FontIcon from 'material-ui/FontIcon';
import SearchIcon from 'material-ui/svg-icons/action/search';
import {grey500, purple500} from 'material-ui/styles/colors';

injectTapEventPlugin();

const AppBarSearch = () => (
  <AppBar
    style={{position: 'fixed',top:0}}
    zDepth={1}
    title={"Tableside"}
    iconElementLeft={<SideBar/>}
    iconElementRight={
      <IconMenu
        iconButtonElement={
          <IconButton><MoreVertIcon/></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      >
        <MenuItem primaryText="Lease Admin" />
        <MenuItem primaryText="Dashboard" />
        <MenuItem primaryText="Analytics" />
        <MenuItem primaryText="Reports" />
        <MenuItem primaryText="Sign out" />
      </IconMenu>
    }
  >

  </AppBar>
);

export default AppBarSearch;
