import React from 'react';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import LocalDining from 'material-ui/svg-icons/maps/local-dining';
import Face from 'material-ui/svg-icons/action/face';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import {ListItem} from 'material-ui/List'

const iconButtonElement = (
  <IconButton>
    <LocalDining color={grey400} />
  </IconButton>
);

const rightIconMenu = (
  <IconMenu
    iconButtonElement={iconButtonElement}
    anchorOrigin={{horizontal: 'left', vertical: 'top'}}
    targetOrigin={{horizontal: 'left', vertical: 'top'}}
    >
      <MenuItem
        primaryText="sounds yumm"
      />
      <MenuItem
        primaryText="sounds yuck"
      />
    </IconMenu>
);

class PresentCuisine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open:false,
    };
    this.openHandle = this.openHandle.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  openHandle(event, index, value) {
    if (event) {
      this.setState({ open: !this.state.open }, () => {
        console.log('Congrats: changed the state!');
      });
    }
  }

  handleClick(event) {
    if (event) {
      console.log('EVENT:', event);
      console.log('TARGET:', event.target);
      console.log('VALUE:', event.targert.value);
    }
  }

  render() {
    return (
      <ListItem
        leftAvatar={<Face />}
        rightIconButton={rightIconMenu}
        onChange={this.openHandle}
        primaryText={this.props.type}
        name={this.props.name}
        checked={this.state.checked}
        onClick={this.checkHandle}
        value={this.props.type}
      />
    );
  }
}

export default PresentCuisine;