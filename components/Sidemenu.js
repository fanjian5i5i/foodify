import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import {grey500, purple500} from 'material-ui/styles/colors';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import FontIcon from 'material-ui/FontIcon';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
export default class SideBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle () {
    console.log(this.state);
    this.setState({open: !this.state.open});
  }
  handleClose () {
    this.setState({open: false});
  }

  render() {
    const styles={
      iconColor:{
        color:purple500,
        fill:purple500
      }
    }
    return (

      <div>
        <IconButton
          label="Open Drawer"
          onTouchTap={this.handleToggle.bind(this)}>
          <NavigationMenu style={styles.iconColor}/>
        </IconButton>
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <List>
            <ListItem
              disabled={true}
              leftAvatar={
                <Avatar src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/12523864_100206983713554_5934333195621876196_n.jpg?oh=b9bb76e178575c2ac4d1708a8511fb6a&oe=581F4175" />
              }
            >
              Yunqi Zhang
            </ListItem>
          </List>
          <MenuItem onTouchTap={this.handleClose.bind(this)}>Roles</MenuItem>
          <MenuItem onTouchTap={this.handleClose.bind(this)}>Reports</MenuItem>
          <MenuItem onTouchTap={this.handleClose.bind(this)}>Analytics</MenuItem>
          <MenuItem onTouchTap={this.handleClose.bind(this)}>Correspondence</MenuItem>
          <MenuItem onTouchTap={this.handleClose.bind(this)}>Setup</MenuItem>
          <MenuItem
            primaryText="Admin"
            rightIcon={<ArrowDropRight />}
            menuItems={[
                <MenuItem primaryText="Log In" onTouchTap={this.handleClose.bind(this)}/>,
                <MenuItem primaryText="Update" onTouchTap={this.handleClose.bind(this)}/>,
                <MenuItem primaryText="Reset"  onTouchTap={this.handleClose.bind(this)}/>,
                <MenuItem primaryText="Rules"  onTouchTap={this.handleClose.bind(this)}/>,
              ]}
            >
          </MenuItem>
          <MenuItem onTouchTap={this.handleClose.bind(this)}>Lease Administration</MenuItem>
        </Drawer>
      </div>
    );
  }
}
