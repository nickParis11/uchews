import React from 'react';
import Paper from 'material-ui/Paper';
import {List} from 'material-ui/List';
import PresentCuisine from './PresentCuisine.jsx'
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  paper: {
    display: 'inline-block',
    height: '50%',
    margin: '0 auto',
    padding: 50,
    textAlign: 'left',
    width: '50%',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
};

class ChewserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      types: [
              'American', 'Asian',
              'Chinese',
              'Dessert',
              'Greek',
              'Hamburgers', 'Healthy',
              'Indian', 'Italian',
              'Japanese',
              'Mediterranean', 'Mexican', 'Middle Eastern',
              'Pasta', 'Pizza',
              'Salads', 'Sandwiches', 'Seafood', 'Soup', 'Sushi',
              'Thai',
              'Vegetarian',
              'Wings', 'Wraps'
             ],
    };
  }

  componentDidMount () {
    window.scrollTo(0, 0)
  }


  render() {
    var willNotEat = this.props.willNotEat;
    var wantToEat = this.props.wantToEat;
    var types = this.state.types;
    console.log('TYPE:', types);

    return (
      <div>
        <Paper
          style={style.paper}
          zDepth={3}
        >
          <h1>Chewser #{this.props.counter}</h1>
          <h2>What are you in the mood for?</h2>
          <List
            style={style.container}
          >
            {types.map((type) => (<PresentCuisine key={type} type={type} wantToEat={wantToEat} willNotEat={willNotEat} />))}
          </List>
          <RaisedButton
            label="Chews"
            margin="20"
            primary={true}
            fullWidth={true}
            onClick={ () => this.props.clickHandle("waiting") } />
        </Paper>
      </div>
    )
  }

}

export default ChewserForm;
