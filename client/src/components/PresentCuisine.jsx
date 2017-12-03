import React from 'react';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import LocalDining from 'material-ui/svg-icons/maps/local-dining';
import Face from 'material-ui/svg-icons/action/face';
import Mood from 'material-ui/svg-icons/social/mood';
import MoodBad from 'material-ui/svg-icons/social/mood-bad';
import {grey400, green500, red500, darkBlack, lightBlack} from 'material-ui/styles/colors';
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
  </IconMenu>
);

class PresentCuisine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open:false,
      clickCounter: -1,

    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if (event) {
      console.log('EVENT:', event);
      console.log('TARGET:', event.target);
      console.log('VALUE:', event.targert.value);
    }
  }

  render() {
    if (this.state.clickCounter === -1) {
      return (
        <span>
        <ListItem
          leftAvatar={<Face />}
          rightIcon={rightIconMenu}
          onClick={(event) => {
            this.setState(prevState => {
              return {clickCounter: prevState.clickCounter + 1};
            });
            this.props.wantToEat.push(this.props.type)
          }}
          primaryText={this.props.type}
          name={this.props.name}
          value={this.props.type}
          style={{
            textAlign: 'left',
            width: 'auto',
          }}
        />
        </span>
      )
    } else if (this.state.clickCounter === 0) {
      return (
        <span>
        <ListItem
          leftAvatar={
            <Mood
              color={green500}
            />
          }
          rightIconButton={rightIconMenu}
          onClick={(event) => {
            this.setState(prevState => {
              return {clickCounter: prevState.clickCounter + 1};
            });
            this.props.wantToEat.pop()
            this.props.willNotEat.push(this.props.type)
          }}
          primaryText={this.props.type}
          name={this.props.name}
          value={this.props.type}
          style={{
            textAlign: 'left',
            width: 'auto',
          }}
        />
        </span>
      )
    } else if (this.state.clickCounter === 1) {
      return (
        <span>
        <ListItem
          leftAvatar={
            <MoodBad
              color={red500}
            />
          }
          rightIconButton={rightIconMenu}
          onClick={(event) => {
            this.setState(prevState => {
              return {clickCounter: prevState.clickCounter + 1};
            });
            this.props.willNotEat.pop()
          }}
          primaryText={this.props.type}
          name={this.props.name}
          value={this.props.type}
          style={{
            textAlign: 'left',
            width: 'auto',
          }}
        />
        </span>
      )
    } else {
      return(
        <span>
        <ListItem
          leftAvatar={<Face />}
          rightIconButton={rightIconMenu}
          onClick={(event) =>
            this.setState(prevState => {
              return {clickCounter: -1};
            })}
          primaryText={this.props.type}
          name={this.props.name}
          value={this.props.type}
          style={{
            textAlign: 'left',
            width: 'auto',
          }}
        />
        </span>
      )
    }
  }
}

export default PresentCuisine;